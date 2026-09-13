import { Link } from 'react-router-dom'
import type { AtlasPipelineOpportunity } from '../../data/atlasPipeline'

export function AtlasSection({ id, eyebrow, title, intro, tone='light', children }: { id: string; eyebrow: string; title: string; intro?: string; tone?: 'light'|'soft'|'dark'; children: React.ReactNode }) {
  const dark=tone==='dark'
  return <section id={id} className={`atlas-section scroll-mt-28 border-t ${dark?'border-zinc-800 bg-zinc-950 text-white':tone==='soft'?'border-zinc-200 bg-zinc-50':'border-zinc-200 bg-white'}`}><div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28"><p className={`text-[.68rem] font-bold uppercase tracking-[.2em] ${dark?'text-amber-200':'text-amber-700'}`}>{eyebrow}</p><h2 tabIndex={-1} className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>{intro&&<p className={`mt-6 max-w-3xl text-base leading-relaxed md:text-lg ${dark?'text-zinc-400':'text-zinc-600'}`}>{intro}</p>}<div className="mt-12">{children}</div></div></section>
}

export function EvidenceBadge({ level }: { level: AtlasPipelineOpportunity['evidence'] }) {
  return <span className="inline-flex border border-amber-300/70 bg-amber-50 px-2.5 py-1 text-[.65rem] font-bold uppercase tracking-[.12em] text-amber-900">{level}</span>
}

export function DevelopmentStage({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <li className="relative border-t border-zinc-700 py-6 md:min-h-52 md:border-l md:border-t-0 md:px-6 first:md:border-l-0"><span className="text-xs font-semibold text-amber-300">{number}</span><h3 className="mt-5 text-sm font-bold uppercase tracking-[.13em]">{title}</h3><p className="mt-4 text-sm leading-relaxed text-zinc-400">{children}</p></li>
}

export function AtlasOpportunityCard({ opportunity }: { opportunity: AtlasPipelineOpportunity }) {
  return <article className="border-t border-zinc-300 py-8 first:border-t-0 md:py-10"><div className="grid gap-7 lg:grid-cols-[13rem_1fr_18rem]">
    <header><p className="text-xs font-bold uppercase tracking-[.18em] text-zinc-500">{opportunity.market} · {opportunity.id}</p><h3 className="mt-3 text-3xl font-semibold tracking-tight">{opportunity.name}</h3><p className="mt-3 text-sm font-medium text-zinc-600">{opportunity.scale}</p></header>
    <div><div className="flex flex-wrap gap-2"><span className="bg-zinc-950 px-2.5 py-1 text-[.65rem] font-bold uppercase tracking-[.12em] text-white">{opportunity.layer}</span><span className="border border-zinc-300 px-2.5 py-1 text-[.65rem] font-bold uppercase tracking-[.12em]">{opportunity.stage}</span><EvidenceBadge level={opportunity.evidence}/></div><p className="mt-5 leading-relaxed text-zinc-700">{opportunity.position}</p>{opportunity.researchRoute&&<Link to={opportunity.researchRoute} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-amber-500 underline-offset-4">View public opportunity evidence →</Link>}</div>
    <aside className="border-l-2 border-amber-400 pl-5"><p className="text-[.65rem] font-bold uppercase tracking-[.16em] text-zinc-500">Next development gate</p><p className="mt-2 text-sm font-semibold leading-relaxed">{opportunity.nextMilestone}</p><p className="mt-6 text-[.65rem] font-bold uppercase tracking-[.16em] text-zinc-500">Work remaining</p><ul className="mt-2 space-y-2 text-sm text-zinc-600">{[opportunity.publication.publicBlocker, ...opportunity.validation].filter(Boolean).slice(0,3).map(item=><li key={item}>— {item}</li>)}</ul><p className="mt-5 text-xs text-zinc-500">Public record reviewed {opportunity.publication.lastReviewed}</p></aside>
  </div></article>
}

export function PartnerPathway({ title, children, emphasis=false }: { title: string; children: React.ReactNode; emphasis?: boolean }) {
 return <article className={`border-t p-6 md:p-8 ${emphasis?'border-amber-400 bg-zinc-900':'border-zinc-700'}`}><h3 className="text-xs font-bold uppercase tracking-[.16em] text-amber-200">{title}</h3><p className="mt-4 text-sm leading-relaxed text-zinc-300">{children}</p></article>
}
