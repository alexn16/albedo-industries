import type { EvidenceState, InfrastructureCandidate } from '../data/infrastructureCandidates'

const labels: Record<EvidenceState, string> = { verified:'Verified', hypothesis:'Hypothesis', evidence_required:'Evidence required', decision_pending:'Decision pending' }
const styles: Record<EvidenceState, string> = { verified:'bg-emerald-50 text-emerald-800 border-emerald-200', hypothesis:'bg-blue-50 text-blue-800 border-blue-200', evidence_required:'bg-amber-50 text-amber-900 border-amber-200', decision_pending:'bg-zinc-100 text-zinc-700 border-zinc-200' }
export function EvidenceBadge({ state }: { state: EvidenceState }) { return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${styles[state]}`}>{labels[state]}</span> }

export function ResearchIndicators({ candidate, compact=false }: { candidate: InfrastructureCandidate; compact?: boolean }) {
  const supported=candidate.categories.filter(item=>item.sourceIds.length>0).length
  const openDecisions=candidate.categories.filter(item=>item.state==='decision_pending').length+candidate.risks.filter(item=>item.state==='decision_pending').length
  const killRisks=candidate.risks.filter(item=>item.killRisk).length
  const health=[['Evidence coverage',`${supported} of ${candidate.categories.length} categories`],['Reviewed sources',String(candidate.sources.length)],['Critical unknowns',String(candidate.criticalUnknowns.length)],['Open decisions',String(openDecisions)],['Kill risks',String(killRisks)],['Research freshness',candidate.lastUpdated]]
  return <div><div className="rounded-xl border border-zinc-200 p-5"><p className="text-xs uppercase tracking-wider text-zinc-400">Project gate</p><p className="mt-2 font-semibold">{candidate.currentGate}</p><p className="mt-2 text-xs text-zinc-500">Research, demand and engineering precede funding; construction and operations remain locked.</p></div>{!compact&&<dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3">{health.map(([label,value])=><div className="bg-white p-4" key={label}><dt className="text-xs text-zinc-400">{label}</dt><dd className="mt-2 text-sm font-semibold">{value}</dd></div>)}</dl>}<p className="mt-3 text-xs text-zinc-500">Research health reports evidence and unresolved work—not site quality or probability of construction.</p></div>
}
