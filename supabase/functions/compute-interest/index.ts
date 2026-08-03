import { createClient } from 'npm:@supabase/supabase-js@2.55.0'
import { handleRequest, type HandlerDependencies, type LeadType } from './core.ts'

const requiredEnvironment = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY', 'COMPUTE_INTEREST_ALLOWED_ORIGINS', 'COMPUTE_INTEREST_RATE_LIMIT_SECRET'] as const
for (const name of requiredEnvironment) {
  if (!Deno.env.get(name)) throw new Error(`Missing required server configuration: ${name}`)
}

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  { auth: { persistSession: false, autoRefreshToken: false } },
)
const allowedOrigins = new Set(Deno.env.get('COMPUTE_INTEREST_ALLOWED_ORIGINS')!.split(',').map((origin) => origin.trim()).filter(Boolean))

function tableFor(leadType: LeadType) {
  return leadType === 'capacity_interest' ? 'compute_capacity_interests' : 'compute_investor_partner_interests'
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

function capacityRecord(lead: Extract<Parameters<HandlerDependencies['insert']>[0], { leadType: 'capacity_interest' }>) {
  return {
    full_name: lead.fullName,
    work_email: lead.email,
    company: lead.organization,
    country: lead.country,
    customer_type: lead.customerType,
    desired_service: lead.desiredService,
    approximate_rack_requirement: lead.rackRequirement,
    approximate_power_requirement: lead.powerRequirement || null,
    desired_start_date: lead.startDate,
    contract_duration_preference: lead.contractDuration,
    workload_description: lead.message,
    data_residency_requirements: lead.dataResidency,
    additional_comments: lead.comments || null,
    consent: lead.consent,
    source_page: lead.sourcePage,
    lead_type: lead.leadType,
    candidate_id: lead.candidateId || null,
    candidate_slug: lead.candidateSlug || null,
    country_code: lead.countryCode || null,
    interest_strength: lead.interestStrength || null,
    willing_to_discuss_loi: lead.willingToDiscussLoi ?? null,
  }
}

function investorRecord(lead: Extract<Parameters<HandlerDependencies['insert']>[0], { leadType: 'investor_partner_interest' }>) {
  return {
    full_name: lead.fullName,
    professional_email: lead.email,
    organization: lead.organization,
    role: lead.role,
    investor_partner_type: lead.partnerType,
    typical_investment_range: lead.investmentRange || null,
    area_of_interest: lead.interestArea,
    relevant_experience: lead.experience,
    preferred_involvement: lead.involvement,
    message: lead.message,
    consent: lead.consent,
    source_page: lead.sourcePage,
    lead_type: lead.leadType,
    candidate_id: lead.candidateId || null,
    candidate_slug: lead.candidateSlug || null,
    country_code: lead.countryCode || null,
    willing_to_discuss_loi: lead.willingToDiscussLoi ?? null,
    local_relationship_type: lead.localRelationshipType || null,
    investor_country: lead.investorCountry || null,
    investor_profile: lead.investorProfile || null,
    preferred_instrument: lead.preferredInstrument || null,
    preferred_stage: lead.preferredStage || null,
    notify_if_offer_opens: lead.notifyIfOfferOpens ?? null,
  }
}

const dependencies: HandlerDependencies = {
  allowedOrigins,
  async rateLimit(request) {
    const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const fingerprint = await sha256(`${Deno.env.get('COMPUTE_INTEREST_RATE_LIMIT_SECRET')}:${forwardedFor}`)
    const { data, error } = await supabase.rpc('check_compute_interest_rate_limit', { p_fingerprint_hash: fingerprint })
    if (error) {
      console.error('compute_interest_rate_limit_failed')
      return false
    }
    return data === true
  },
  async insert(lead) {
    const record = lead.leadType === 'capacity_interest' ? capacityRecord(lead) : investorRecord(lead)
    const { data, error } = await supabase.from(tableFor(lead.leadType)).insert(record).select('id').single()
    if (error || !data?.id) throw new Error('Insert failed')
    return data.id
  },
  async notify(lead) {
    const apiKey = Deno.env.get('RESEND_API_KEY')
    const recipient = Deno.env.get('COMPUTE_INTEREST_NOTIFICATION_EMAIL')
    const from = Deno.env.get('COMPUTE_INTEREST_FROM_EMAIL')
    if (!apiKey || !recipient || !from) return 'skipped'

    const subject = lead.leadType === 'capacity_interest' ? 'New compute capacity interest' : 'New compute investor or partner interest'
    const lines = [
      `Lead type: ${lead.leadType}`,
      `Name: ${lead.fullName}`,
      `Email: ${lead.email}`,
      `Organization: ${lead.organization}`,
      `Candidate: ${lead.candidateId || 'Europe programme / not specified'}`,
      lead.leadType === 'capacity_interest' ? `Customer type: ${lead.customerType}` : `Partner type: ${lead.partnerType}`,
    ]
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [recipient], subject, text: lines.join('\n') }),
    })
    if (!emailResponse.ok) throw new Error('Notification failed')
    return 'sent'
  },
  async markNotification(leadType, id, status) {
    const { error } = await supabase.from(tableFor(leadType)).update({ notification_status: status }).eq('id', id)
    if (error) throw new Error('Notification status update failed')
  },
  log(event, details = {}) {
    console.log(JSON.stringify({ event, ...details }))
  },
}

Deno.serve((request) => handleRequest(request, dependencies))
