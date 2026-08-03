import { assertEquals } from 'jsr:@std/assert@1.0.14'
import { handleRequest, type HandlerDependencies } from './core.ts'

const origin = 'https://www.albedo-industries.com'
const capacity = {
  fullName: 'Ada Lovelace', email: 'ADA@EXAMPLE.COM', organization: 'Analytical Engines', consent: true,
  sourcePage: '/compute-infrastructure', submittedAt: '2026-08-03T10:00:00.000Z', website: '', leadType: 'capacity_interest',
  country: 'Spain', customerType: 'Startup', desiredService: 'Managed AI compute', rackRequirement: '1 rack',
  powerRequirement: '20 kW', startDate: '2027-01-01', contractDuration: '12 months', message: 'Private inference workloads',
  dataResidency: 'EU', comments: '',
} as const
const investor = {
  fullName: 'Grace Hopper', email: 'grace@example.com', organization: 'Compiler Partners', consent: true,
  sourcePage: '/compute-infrastructure', submittedAt: '2026-08-03T10:00:00.000Z', website: '', leadType: 'investor_partner_interest',
  role: 'Partner', partnerType: 'Strategic industry partner', investmentRange: '', areaOfInterest: 'Equipment',
  experience: 'Infrastructure delivery', involvement: 'Technical partner', message: 'Interested in discussing equipment.',
} as const

function dependencies(overrides: Partial<HandlerDependencies> = {}): HandlerDependencies {
  return {
    allowedOrigins: new Set([origin]),
    rateLimit: async () => true,
    insert: async () => '00000000-0000-0000-0000-000000000001',
    notify: async () => 'sent',
    markNotification: async () => undefined,
    log: () => undefined,
    ...overrides,
  }
}

function request(body: unknown, requestOrigin = origin) {
  return new Request('https://project.supabase.co/functions/v1/compute-interest', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: requestOrigin }, body: JSON.stringify(body),
  })
}

Deno.test('accepts a valid capacity submission and normalizes its email', async () => {
  let insertedEmail = ''
  const response = await handleRequest(request(capacity), dependencies({ insert: async (lead) => { insertedEmail = lead.email; return 'id' } }))
  assertEquals(response.status, 201)
  assertEquals(insertedEmail, 'ada@example.com')
})

Deno.test('accepts a valid investor or partner submission', async () => {
  const response = await handleRequest(request(investor), dependencies())
  assertEquals(response.status, 201)
})

Deno.test('accepts validated candidate tags for capacity and partner submissions', async () => {
  const taggedCapacity = { ...capacity, candidateId: 'EU-ES-01', candidateSlug: 'as-pontes', countryCode: 'ES', interestStrength: 'Active requirement', willingToDiscussLoi: true }
  const taggedPartner = { ...investor, candidateId: 'EU-PT-01', candidateSlug: 'sines', countryCode: 'PT', localRelationshipType: 'Fibre carrier', willingToDiscussLoi: false }
  assertEquals((await handleRequest(request(taggedCapacity), dependencies())).status, 201)
  assertEquals((await handleRequest(request(taggedPartner), dependencies())).status, 201)
})

Deno.test('rejects unknown or mismatched candidate metadata', async () => {
  const unknown = { ...capacity, candidateId: 'EU-XX-99', candidateSlug: 'invented', countryCode: 'XX', interestStrength: 'General interest', willingToDiscussLoi: false }
  const mismatch = { ...investor, candidateId: 'EU-ES-01', candidateSlug: 'sines', countryCode: 'PT', localRelationshipType: 'Landowner' }
  assertEquals((await handleRequest(request(unknown), dependencies())).status, 400)
  assertEquals((await handleRequest(request(mismatch), dependencies())).status, 400)
})

Deno.test('accepts non-binding candidate funding-interest fields', async () => {
  const fundingInterest = { ...investor, candidateId: 'EU-DE-01', candidateSlug: 'frankfurt-region', countryCode: 'DE', investorCountry: 'Germany', investorProfile: 'Unsure', preferredInstrument: 'Unsure', preferredStage: 'Research', notifyIfOfferOpens: true }
  assertEquals((await handleRequest(request(fundingInterest), dependencies())).status, 201)
})

for (const [name, payload] of [
  ['invalid email', { ...capacity, email: 'not-an-email' }],
  ['missing consent', { ...capacity, consent: undefined }],
  ['unknown lead type', { ...capacity, leadType: 'unknown' }],
  ['honeypot content', { ...capacity, website: 'bot.example' }],
  ['overlong field', { ...capacity, fullName: 'x'.repeat(121) }],
  ['unexpected field', { ...capacity, admin: true }],
] as const) {
  Deno.test(`rejects ${name}`, async () => {
    const response = await handleRequest(request(payload), dependencies())
    assertEquals(response.status, 400)
  })
}

Deno.test('rejects an invalid origin without processing a lead', async () => {
  let inserted = false
  const response = await handleRequest(request(capacity, 'https://attacker.example'), dependencies({ insert: async () => { inserted = true; return 'id' } }))
  assertEquals(response.status, 403)
  assertEquals(inserted, false)
})

Deno.test('rate limits a rapid repeated submission', async () => {
  let attempts = 0
  const deps = dependencies({ rateLimit: async () => ++attempts === 1 })
  assertEquals((await handleRequest(request(capacity), deps)).status, 201)
  assertEquals((await handleRequest(request(capacity), deps)).status, 429)
})

Deno.test('returns a generic failure when database insertion fails', async () => {
  const response = await handleRequest(request(capacity), dependencies({ insert: async () => { throw new Error('database details') } }))
  assertEquals(response.status, 500)
  assertEquals(await response.json(), { success: false, message: 'Registration could not be completed. Please contact Albedo directly.' })
})

Deno.test('preserves a successful registration when notification fails', async () => {
  let notificationStatus = ''
  const response = await handleRequest(request(investor), dependencies({
    notify: async () => { throw new Error('email unavailable') },
    markNotification: async (_leadType, _id, status) => { notificationStatus = status },
  }))
  assertEquals(response.status, 201)
  assertEquals(notificationStatus, 'failed')
})
