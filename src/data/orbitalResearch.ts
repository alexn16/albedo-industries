export type OrbitalEvidence =
  | 'ESTABLISHED'
  | 'INDUSTRY DEMONSTRATED'
  | 'INDUSTRY CLAIM'
  | 'RESEARCH HYPOTHESIS'
  | 'DERIVED ESTIMATE'
  | 'OPEN QUESTION'
  | 'LONG-TERM THESIS'

export type OrbitalSourceType = 'agency' | 'government' | 'technical-paper' | 'peer-reviewed' | 'company-primary' | 'standard'

export interface OrbitalResearchSource {
  id: string
  title: string
  organisation: string
  sourceType: OrbitalSourceType
  published?: string
  reviewed: string
  url: string
  supports: string[]
  notes?: string
}

export interface OrbitalResearchTopic {
  id: string
  topic: string
  question: string
  whyItMatters: string
  keyConstraint: string
  evidence: OrbitalEvidence
  status: 'SOURCE REQUIRED' | 'MODELLING' | 'RESEARCHED'
  lastReviewed: string
  sourceIds: string[]
}

/**
 * No external source was accessible in the Phase 7 build environment. This
 * registry therefore remains intentionally empty instead of publishing
 * unverified titles, URLs, report numbers, dates, or quantitative claims.
 */
export const orbitalSources: OrbitalResearchSource[] = []

export const orbitalResearch: OrbitalResearchTopic[] = [
  { id: 'ORB-01', topic: 'Compute efficiency', question: 'How much useful AI compute can be delivered per watt, kilogram and unit of radiator area?', whyItMatters: 'Spaceflight compute and data-center accelerators optimize for different environments; neither demonstrates the economics of the other.', keyConstraint: 'Comparable workload efficiency, mass, redundancy and useful life', evidence: 'OPEN QUESTION', status: 'SOURCE REQUIRED', lastReviewed: '2026-09-13', sourceIds: [] },
  { id: 'ORB-02', topic: 'Electrical power', question: 'What array area, mass, storage and distribution are required for continuous useful compute?', whyItMatters: 'Nameplate generation is not delivered compute power; orbit, eclipse, degradation, conversion and redundancy alter the system.', keyConstraint: 'Delivered W/m² and W/kg by orbital architecture', evidence: 'OPEN QUESTION', status: 'MODELLING', lastReviewed: '2026-09-13', sourceIds: [] },
  { id: 'ORB-03', topic: 'Thermal rejection', question: 'How much radiator area and thermal-system mass are required to reject waste heat?', whyItMatters: 'Higher compute density does not remove heat; it can increase transport and rejection demands.', keyConstraint: 'Radiator temperature, emissivity, view, area and kg/kW', evidence: 'OPEN QUESTION', status: 'MODELLING', lastReviewed: '2026-09-13', sourceIds: [] },
  { id: 'ORB-04', topic: 'Launch mass and cost', question: 'What delivered mass, volume, cadence and integration cost can the system tolerate?', whyItMatters: 'A low advertised $/kg alone does not include destination, integration, deployment or replacement.', keyConstraint: 'Delivered lifecycle cost by orbit and architecture', evidence: 'OPEN QUESTION', status: 'MODELLING', lastReviewed: '2026-09-13', sourceIds: [] },
  { id: 'ORB-05', topic: 'Radiation and reliability', question: 'Can high-performance commercial compute survive economically in a selected orbit?', whyItMatters: 'Shielding, error correction, redundancy and replacement consume mass, power and capacity.', keyConstraint: 'Orbit-specific dose, single-event effects and recovery overhead', evidence: 'OPEN QUESTION', status: 'SOURCE REQUIRED', lastReviewed: '2026-09-13', sourceIds: [] },
  { id: 'ORB-06', topic: 'Communications and locality', question: 'Which workloads can move inputs and outputs within viable link availability, latency and cost?', whyItMatters: 'Orbit-native data may avoid downlink volume; Earth-native workloads may create it.', keyConstraint: 'Useful delivered bandwidth, availability and data-movement economics', evidence: 'OPEN QUESTION', status: 'SOURCE REQUIRED', lastReviewed: '2026-09-13', sourceIds: [] },
  { id: 'ORB-07', topic: 'Autonomy', question: 'How little intervention can a distributed compute facility safely tolerate?', whyItMatters: 'Diagnosis, degraded modes, secure updates, scheduling and recovery must work without routine physical access.', keyConstraint: 'Measured fault recovery and remote-intervention burden', evidence: 'OPEN QUESTION', status: 'SOURCE REQUIRED', lastReviewed: '2026-09-13', sourceIds: [] },
  { id: 'ORB-08', topic: 'Servicing and assembly', question: 'How can failed or obsolete compute avoid becoming disposable infrastructure?', whyItMatters: 'Accelerator obsolescence may be faster than a conventional spacecraft design life.', keyConstraint: 'Modularity, replacement cadence, robotic servicing and disposal', evidence: 'RESEARCH HYPOTHESIS', status: 'SOURCE REQUIRED', lastReviewed: '2026-09-13', sourceIds: [] },
  { id: 'ORB-09', topic: 'Orbit, sustainability and regulation', question: 'Where could compute operate without unacceptable debris, re-entry, spectrum or jurisdiction risk?', whyItMatters: 'Orbit selection couples radiation, eclipse, drag, collision avoidance, communications and end of life.', keyConstraint: 'Compliant lifecycle and acceptable orbital externalities', evidence: 'OPEN QUESTION', status: 'SOURCE REQUIRED', lastReviewed: '2026-09-13', sourceIds: [] },
  { id: 'ORB-10', topic: 'Lifecycle economics', question: 'Under what assumptions could orbital compute serve a specific workload competitively?', whyItMatters: 'Compute hardware is only one part of the power, thermal, launch, network, operations, servicing and disposal stack.', keyConstraint: 'Comparable lifecycle cost per useful workload', evidence: 'LONG-TERM THESIS', status: 'MODELLING', lastReviewed: '2026-09-13', sourceIds: [] },
]
