import { atlasCandidateRegistry } from './atlasCandidates'
import { infrastructureCandidates } from './infrastructureCandidates'

export interface AtlasResearchRecord {
  id: string
  route: string
  country: string
  name: string
  gate: string
  status: string
  reviewed: string
  summary: string
  blocker: string
  dossierUrl?: string
}

const registry = new Map(atlasCandidateRegistry.map(candidate => [candidate.id, candidate]))

const publicStatus = (status: string) => status
  .replace(/Gate 1 FAIL/gi, 'Closed after research')
  .replace(/FAIL/gi, 'Closed after research')

/** One index over existing records; technical content stays in the original datasets and pages. */
export const atlasResearchRecords: AtlasResearchRecord[] = [
  ...atlasCandidateRegistry.map(candidate => ({
    id: candidate.id, route: candidate.route, country: candidate.country, name: candidate.name,
    gate: candidate.gate, status: publicStatus(candidate.researchStatus), reviewed: candidate.researchDate,
    summary: candidate.summary, blocker: candidate.primaryBlocker, dossierUrl: candidate.dossierUrl,
  })),
  ...infrastructureCandidates.filter(candidate => !registry.has(candidate.id)).map(candidate => ({
    id: candidate.id, route: candidate.route, country: candidate.country, name: candidate.name,
    gate: candidate.currentGate.split(' — ')[0], status: publicStatus(candidate.publicStatus),
    reviewed: candidate.lastUpdated, summary: candidate.summary, blocker: candidate.topBlocker,
  })),
]

export const atlasResearchPreview = atlasResearchRecords.slice(0, 4)
