import { z } from 'npm:zod@3.25.76'

export const MAX_REQUEST_BYTES = 16_384

const trimmed = (max: number) => z.string().trim().min(1).max(max)
const optionalTrimmed = (max: number) => z.string().trim().max(max).optional().default('')
const common = {
  fullName: trimmed(120),
  email: z.string().trim().email().max(254).transform((value) => value.toLowerCase()),
  organization: trimmed(160),
  consent: z.literal(true),
  sourcePage: z.literal('/compute-infrastructure'),
  submittedAt: z.string().datetime().optional(),
  website: z.string().max(0).optional().default(''),
  candidateId: z.string().trim().max(16).optional(),
  candidateSlug: z.string().trim().max(80).optional(),
  countryCode: z.string().trim().length(2).optional(),
}

export const capacitySchema = z.object({
  ...common,
  leadType: z.literal('capacity_interest'),
  country: trimmed(100),
  customerType: z.enum(['Startup', 'Enterprise', 'Research', 'University', 'Public institution', 'Infrastructure provider', 'Other']),
  desiredService: z.enum(['Rack colocation', 'Dedicated infrastructure', 'Managed AI compute', 'GPU capacity', 'Storage', 'Private cloud', 'Unsure / discuss requirements']),
  rackRequirement: trimmed(120),
  powerRequirement: optionalTrimmed(120),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  contractDuration: trimmed(120),
  message: trimmed(3000),
  dataResidency: trimmed(1000),
  comments: optionalTrimmed(2000),
  interestStrength: z.enum(['General interest', 'Active requirement', 'Budget under review', 'Prepared to discuss an LOI', 'Existing procurement process']).optional(),
  willingToDiscussLoi: z.boolean().optional(),
}).strict()

export const investorSchema = z.object({
  ...common,
  leadType: z.literal('investor_partner_interest'),
  role: trimmed(120),
  partnerType: z.enum(['Infrastructure fund', 'Angel or private investor', 'Family office', 'Strategic industry partner', 'Energy partner', 'Landowner', 'Engineering or EPC partner', 'Equipment supplier', 'Public institution', 'Other']),
  investmentRange: optionalTrimmed(120),
  interestArea: z.enum(['Project financing', 'Site development', 'Energy', 'Equipment', 'Construction', 'Operations', 'Customer introductions', 'Other']),
  experience: trimmed(1500),
  involvement: trimmed(1000),
  message: trimmed(3000),
  willingToDiscussLoi: z.boolean().optional(),
  localRelationshipType: z.enum(['Landowner', 'Utility or energy partner', 'Fibre carrier', 'Engineering partner', 'EPC', 'Equipment supplier', 'Local authority', 'Capital partner', 'Other']).optional(),
  investorCountry: optionalTrimmed(100),
  investorProfile: z.enum(['Professional investor', 'Retail investor', 'Unsure']).optional(),
  preferredInstrument: z.enum(['Equity', 'Project debt', 'Revenue participation', 'Unsure']).optional(),
  preferredStage: z.enum(['Research', 'Feasibility', 'Development', 'Construction', 'Unsure']).optional(),
  notifyIfOfferOpens: z.boolean().optional(),
}).strict()

export type LeadType = 'capacity_interest' | 'investor_partner_interest'
type ValidLead = z.infer<typeof capacitySchema> | z.infer<typeof investorSchema>

export const candidateAllowlist = new Map([
  ['EU-ES-01', { slug: 'as-pontes', countryCode: 'ES' }], ['EU-ES-02', { slug: 'curtis', countryCode: 'ES' }],
  ['EU-ES-03', { slug: 'aragon', countryCode: 'ES' }], ['EU-PT-01', { slug: 'sines', countryCode: 'PT' }],
  ['EU-DE-01', { slug: 'frankfurt-region', countryCode: 'DE' }], ['EU-FR-01', { slug: 'paris-region', countryCode: 'FR' }],
  ['EU-SE-01', { slug: 'lulea-boden', countryCode: 'SE' }], ['EU-FI-01', { slug: 'hamina-kotka', countryCode: 'FI' }],
  ['EU-NO-01', { slug: 'stavanger-region', countryCode: 'NO' }], ['EU-PL-01', { slug: 'warsaw-poznan', countryCode: 'PL' }],
])

export function hasValidCandidateTag(lead: ValidLead) {
  const hasAnyTag = Boolean(lead.candidateId || lead.candidateSlug || lead.countryCode)
  if (!hasAnyTag) return !lead.interestStrength && !lead.localRelationshipType
  if (!lead.candidateId || !lead.candidateSlug || !lead.countryCode) return false
  const expected = candidateAllowlist.get(lead.candidateId)
  if (!expected || expected.slug !== lead.candidateSlug || expected.countryCode !== lead.countryCode) return false
  return lead.leadType === 'capacity_interest'
    ? Boolean(lead.interestStrength && typeof lead.willingToDiscussLoi === 'boolean')
    : Boolean(lead.localRelationshipType || (lead.investorProfile && lead.preferredInstrument && lead.preferredStage && typeof lead.notifyIfOfferOpens === 'boolean'))
}

export interface HandlerDependencies {
  allowedOrigins: ReadonlySet<string>
  rateLimit: (request: Request) => Promise<boolean>
  insert: (lead: ValidLead) => Promise<string>
  notify: (lead: ValidLead) => Promise<'sent' | 'skipped'>
  markNotification: (leadType: LeadType, id: string, status: 'sent' | 'failed' | 'skipped') => Promise<void>
  log: (event: string, details?: Record<string, string>) => void
}

const messages = {
  validation: 'Please review the information provided.',
  rateLimit: 'Too many attempts. Please try again later.',
  internal: 'Registration could not be completed. Please contact Albedo directly.',
}

function response(origin: string, status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'content-type',
      'Vary': 'Origin',
    },
  })
}

export async function handleRequest(request: Request, dependencies: HandlerDependencies): Promise<Response> {
  const origin = request.headers.get('origin') ?? ''
  if (!dependencies.allowedOrigins.has(origin)) {
    return response('null', 403, { success: false, message: messages.validation })
  }
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin',
      },
    })
  }
  if (request.method !== 'POST') return response(origin, 405, { success: false, message: messages.validation })
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return response(origin, 415, { success: false, message: messages.validation })
  }

  const declaredLength = Number(request.headers.get('content-length') ?? 0)
  if (declaredLength > MAX_REQUEST_BYTES) return response(origin, 413, { success: false, message: messages.validation })

  let rawBody: string
  try {
    rawBody = await request.text()
  } catch {
    return response(origin, 400, { success: false, message: messages.validation })
  }
  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) return response(origin, 413, { success: false, message: messages.validation })

  let input: unknown
  try {
    input = JSON.parse(rawBody)
  } catch {
    return response(origin, 400, { success: false, message: messages.validation })
  }

  if (!await dependencies.rateLimit(request)) {
    dependencies.log('compute_interest_rate_limited')
    return response(origin, 429, { success: false, message: messages.rateLimit })
  }

  const leadType = typeof input === 'object' && input !== null && 'leadType' in input ? (input as { leadType?: unknown }).leadType : undefined
  const result = leadType === 'capacity_interest'
    ? capacitySchema.safeParse(input)
    : leadType === 'investor_partner_interest'
      ? investorSchema.safeParse(input)
      : null

  if (!result?.success || !hasValidCandidateTag(result.data)) {
    dependencies.log('compute_interest_validation_rejected', { leadType: typeof leadType === 'string' ? leadType : 'missing' })
    return response(origin, 400, { success: false, message: messages.validation })
  }

  let id: string
  try {
    id = await dependencies.insert(result.data)
  } catch {
    dependencies.log('compute_interest_insert_failed', { leadType: result.data.leadType })
    return response(origin, 500, { success: false, message: messages.internal })
  }

  try {
    const notificationStatus = await dependencies.notify(result.data)
    await dependencies.markNotification(result.data.leadType, id, notificationStatus)
  } catch {
    dependencies.log('compute_interest_notification_failed', { leadType: result.data.leadType, recordId: id })
    try { await dependencies.markNotification(result.data.leadType, id, 'failed') } catch { dependencies.log('compute_interest_notification_status_failed', { recordId: id }) }
  }

  return response(origin, 201, { success: true, message: 'Registration received.' })
}
