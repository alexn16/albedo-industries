export type AtlasDevelopmentStage = 'Gate 1' | 'Active Origination' | 'Active Validation'
export type AtlasEvidenceLevel = 'Public Source' | 'Counterparty Stated' | 'Developer Stated' | 'Documented' | 'Independently Verified' | 'Atlas-Controlled'
export type AtlasPipelineLayer = 'Active Pipeline' | 'Development Opportunity'
export type AtlasPublicationVisibility = 'featured' | 'public' | 'research-only' | 'hold' | 'archived' | 'private'
export interface AtlasPublication { visibility: AtlasPublicationVisibility; homepageFeatured: boolean; atlasFeatured: boolean; commercialPage: boolean; lastReviewed: string; reviewDue?: string; publicReason?: string; publicBlocker?: string }
const publish = (publication: Partial<AtlasPublication> & Pick<AtlasPublication, 'visibility'|'lastReviewed'>): AtlasPublication => ({ homepageFeatured: false, atlasFeatured: false, commercialPage: false, ...publication })

export interface AtlasPipelineOpportunity {
  id: string
  market: string
  name: string
  layer: AtlasPipelineLayer
  stage: AtlasDevelopmentStage
  evidence: AtlasEvidenceLevel
  scale: string
  position: string
  validation: string[]
  nextMilestone: string
  lastReviewed: string
  researchRoute?: string
  publication: AtlasPublication
}

/**
 * Commercial pipeline facts are intentionally separate from the research registry.
 * A linked research record remains the source for technical analysis; inclusion here
 * means active counterparty or institutional work, not asset control.
 */
export const atlasPipeline: AtlasPipelineOpportunity[] = [
  {
    id: 'AF-MZ-BEL', market: 'Mozambique', name: 'Beluluane', layer: 'Development Opportunity',
    stage: 'Active Validation', evidence: 'Counterparty Stated', scale: '60 MW stated as currently uncommitted',
    position: 'The industrial park counterparty states 80 MW total park capacity, 20 MW in use and 60 MW currently uncommitted. It is identifying an indicative 8–12 hectare area; approximately 350 hectares refers to availability across the park, not Atlas control.',
    validation: ['Exact plot and coordinates', 'Substation voltage and connection architecture', 'Reservation mechanics, evidence and timeline', 'Project-specific capacity pathway'], nextMilestone: 'Documentary plot and project-specific capacity review', lastReviewed: '21 August 2026', publication: publish({visibility:'featured',homepageFeatured:true,atlasFeatured:true,commercialPage:false,lastReviewed:'2026-08-21',publicReason:'Project-specific counterparty engagement and a defined documentary validation gate.',publicBlocker:'Plot, engineering and project-specific capacity evidence remain outstanding.'})
  },
  {
    id: 'EU-DE-HAM', market: 'Germany', name: 'Hamburg region', layer: 'Development Opportunity',
    stage: 'Active Validation', evidence: 'Developer Stated', scale: '150 MW indicated initially; potential 300 MW physical scale',
    position: 'A developer has stated that land is acquired, indicated approximately 150 MW for an initial delivery horizon and discussed physical site potential of 300 MW with a longer-term grid expansion pathway. None of this capacity is represented as secured for Atlas.',
    validation: ['Documentary land review', 'Grid allocation and delivery evidence', 'Technical phasing', 'Atlas participation and control pathway'], nextMilestone: 'Documentary land and grid evidence review', lastReviewed: '21 August 2026', publication: publish({visibility:'public',lastReviewed:'2026-08-21',publicReason:'Developer-stated project context remains suitable for a public pipeline record.',publicBlocker:'Documentary land, grid and Atlas participation evidence remain outstanding.'})
  },
  {
    id: 'AF-NA-MAL', market: 'Namibia', name: 'Maltahöhe / Hardap', layer: 'Active Pipeline',
    stage: 'Active Validation', evidence: 'Developer Stated', scale: '10 MW firm 24/7 initial phase proposed; 100 MW solar concept stated',
    position: 'The developer states access to approximately 11,400 hectares, exclusive development rights, a planned 100 MW solar project, a nearby 33 kV NamPower line and fibre connectivity. Atlas has not yet reviewed documentary support for these claims or confirmed a project-specific firm-power pathway.',
    validation: ['Land and development-right documentation', 'Generation and BESS architecture', 'NamPower connection route and capacity', 'Delivery timeline and Atlas participation structure'], nextMilestone: 'Confidential documentary review of land, rights and power architecture', lastReviewed: '21 August 2026', publication: publish({visibility:'public',lastReviewed:'2026-08-21',publicReason:'Active validation is publicly describable using developer-stated evidence.',publicBlocker:'Land rights, power architecture and participation remain unverified.'})
  },
  {
    id: 'LATAM-UY-01', market: 'Uruguay', name: 'Canelones', layer: 'Active Pipeline',
    stage: 'Active Origination', evidence: 'Counterparty Stated', scale: '10–25 MW first phase under institutional and utility screening',
    position: 'Canelones investment officials have identified Ruta 5, Ruta 101 and the Pando / Ruta 8 area as corridors worth evaluating and have offered cross-department coordination. UTE Grandes Clientes has opened a separate preliminary dialogue. No parcel, connection capacity or power reservation is secured.',
    validation: ['Corridor and parcel shortlist', 'UTE connection feasibility and voltage level', 'Land-control pathway', 'Fibre, permitting and expansion route'], nextMilestone: 'Institutional and UTE meetings to narrow the first viable corridor and connection path', lastReviewed: '21 August 2026', researchRoute: '/infrastructure/uruguay/canelones', publication: publish({visibility:'public',lastReviewed:'2026-08-21',publicReason:'Institutional and utility-path screening remains publicly relevant.',publicBlocker:'No suitable parcel is selected or controlled; a larger or adjacent site is required.'})
  },
  {
    id: 'AS-TH-01', market: 'Thailand', name: 'Eastern Economic Corridor screening', layer: 'Active Pipeline',
    stage: 'Active Origination', evidence: 'Counterparty Stated', scale: '10–25 MW requirements submitted for industrial-estate screening',
    position: 'Thailand BOI has coordinated the enquiry with the Industrial Estate Authority of Thailand and directed Atlas to screen utilities and land across Chonburi, Rayong and Samut Prakan. No industrial estate, parcel or power capacity has been selected or secured.',
    validation: ['IEAT industrial-estate shortlist', 'Power and water readiness', 'Industrial land availability', 'Fibre, resilience and investment-promotion pathway'], nextMilestone: 'Obtain an IEAT shortlist of estates that justify technical diligence', lastReviewed: '21 August 2026', publication: publish({visibility:'public',lastReviewed:'2026-08-21',publicReason:'Institutional industrial-estate screening is active and public-safe.',publicBlocker:'No estate, parcel or power capacity has been selected or secured.'})
  },
  {
    id: 'EU-PT-01', market: 'Portugal', name: 'Sines', layer: 'Active Pipeline',
    stage: 'Active Origination', evidence: 'Public Source', scale: 'Scale subject to land and power validation',
    position: 'Institutional engagement and a strong industrial, energy and subsea-connectivity context support continued origination. Atlas has not secured a parcel, power or permits.',
    validation: ['Credible land pathway', 'Residual grid capacity and connection route', 'Parcel-level fibre diversity', 'Project-specific permitting route'], nextMilestone: 'Identify a credible parcel and connection route', lastReviewed: '21 August 2026', researchRoute: '/infrastructure/portugal/sines', publication: publish({visibility:'research-only',lastReviewed:'2026-08-21',publicReason:'The location remains useful published research.',publicBlocker:'No credible parcel or project-specific connection route is established.'})
  },
  {
    id: 'AS-IN-SUR', market: 'India', name: 'Project Surya / Vastra', layer: 'Active Pipeline',
    stage: 'Active Validation', evidence: 'Counterparty Stated', scale: 'Initial phases around 10 MW; larger concept under discussion',
    position: 'Local development dialogue is testing a phased concept. Land, power, permitting, ready-to-build scope and local development responsibilities remain under validation.',
    validation: ['Land pathway', 'Power and grid evidence', 'Permitting and RTB responsibilities', 'Commercial and delivery structure'], nextMilestone: 'Document land, power and delivery responsibilities', lastReviewed: '21 August 2026', publication: publish({visibility:'public',lastReviewed:'2026-08-21',publicReason:'A phased development dialogue is suitable for a limited public record.',publicBlocker:'Land, power, permitting and delivery responsibilities remain under validation.'})
  },
  {
    id: 'AS-MY-SAR', market: 'Malaysia', name: 'Sarawak', layer: 'Active Pipeline',
    stage: 'Active Validation', evidence: 'Counterparty Stated', scale: 'Formal connection capacity under validation',
    position: 'Local engagement and technical counterparties have identified a utility and grid process. Site, power and formal connection capacity remain unverified.',
    validation: ['Site evidence', 'Formal utility response', 'Connection capacity and timing', 'Local delivery structure'], nextMilestone: 'Obtain a formal utility response', lastReviewed: '21 August 2026', publication: publish({visibility:'public',lastReviewed:'2026-08-21',publicReason:'Technical and utility-process exploration remains publicly describable.',publicBlocker:'Site and formal utility capacity evidence remain unverified.'})
  },
  {
    id: 'EU-ES-04', market: 'Spain', name: 'El Bierzo', layer: 'Active Pipeline',
    stage: 'Gate 1', evidence: 'Public Source', scale: '602 MW published demand margin; not allocated to Atlas',
    position: 'Published grid evidence supports continued research but does not establish an Atlas allocation. A controllable site, diverse fibre and operator demand remain unresolved.',
    validation: ['Candidate parcel and control route', 'Written connection pathway', 'Diverse fibre', 'Qualified demand'], nextMilestone: 'Identify a parcel and documentary site-control route', lastReviewed: '21 August 2026', researchRoute: '/infrastructure/spain/el-bierzo', publication: publish({visibility:'research-only',lastReviewed:'2026-08-21',publicReason:'Published grid research remains useful.',publicBlocker:'No controllable site, written connection pathway, diverse fibre or qualified demand.'})
  },
]

export const atlasEvidenceLevels = [
  ['Public Source', 'A published source supports the stated context; it does not establish Atlas control.'],
  ['Counterparty Stated', 'Information communicated by a relevant institutional, utility, land or infrastructure counterparty; supporting documents or independent checks may remain outstanding.'],
  ['Developer Stated', 'Information communicated by a site or project developer; supporting project documentation or independent checks may remain outstanding.'],
  ['Documented', 'Supporting documentation has been reviewed for the specific claim.'],
  ['Independently Verified', 'A qualified independent party has tested the specific claim.'],
  ['Atlas-Controlled', 'Atlas has an evidenced contractual or legal right.'],
] as const
