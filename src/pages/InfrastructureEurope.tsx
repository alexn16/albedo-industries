import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { atlasEvidenceLevels, atlasPipeline, type AtlasPipelineOpportunity } from '../data/atlasPipeline'
import { atlasResearchRecords } from '../data/atlasResearchIndex'
import { useAtlasMetadata } from '../hooks/useAtlasMetadata'
import { intentPrefetch, type RouteModule } from '../routes/routeModules'
import { atlasSectionIds, resolveAtlasSection } from '../routes/atlasSections'

const contact = 'mailto:alex@albedo-industries.com?subject=Project%20Atlas%20conversation'

export default function InfrastructureEurope({country}:{country?:string}) {
  const isAtlasLanding=useLocation().pathname==='/atlas'
  useAtlasMetadata({
    name: country ? `${country} Atlas Research` : 'Project Atlas', country: country ?? 'International',
    title: country ? undefined : 'Project Atlas — AI Infrastructure Origination | ALBEDO Industries',
    description: 'Project Atlas originates, researches and validates early-stage AI and data-centre infrastructure opportunities across selected international markets.',
    route: country ? `/infrastructure/${country.toLowerCase()}` : '/atlas',
  })
  const scopedResearch = country ? atlasResearchRecords.filter(candidate => candidate.country === country) : atlasResearchRecords
  const scopedPipeline = country ? atlasPipeline.filter(opportunity => opportunity.market === country) : atlasPipeline

  return <div>
    {!country && <AtlasNav />}
    {isAtlasLanding ? <AtlasHero /> : <section className="bg-zinc-950 text-white"><AtlasHeroContent /></section>}

    <Section id="overview" eyebrow="How Atlas creates value" title="Research becomes an opportunity only when the evidence earns it.">
      <p className="section-copy">Atlas typically tests first phases around 10–25 MW while prioritising credible pathways to larger scale. Work progresses through research, origination, validation, structuring, site control or development, and capital or operator alignment.</p>
      <div className="grid gap-4 md:grid-cols-3">{[
        ['01 · Research Universe', 'Markets and locations studied across power, grid, land, fibre, cooling, permitting and execution risk—including candidates that pause or fail.'],
        ['02 · Active Pipeline', 'A selected group with live institutional, developer, utility or counterparty work. Inclusion does not imply an asset is controlled.'],
        ['03 · Development Opportunities', 'The subset sufficiently advanced for focused conversations with development capital, operators and strategic partners.'],
      ].map(item => <article className="rounded-2xl border border-zinc-200 p-6" key={item[0]}><h3 className="text-xl font-semibold">{item[0]}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600">{item[1]}</p></article>)}</div>
    </Section>

    <section id="pipeline" className="atlas-section border-t border-zinc-200 bg-zinc-50"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="eyebrow">Commercial pipeline</p><h2 tabIndex={-1} className="section-title">Stage describes progress. Evidence describes confidence.</h2>
      <p className="section-copy">These records reflect active work, not secured capacity. Development Opportunities are shown first; every material figure carries its evidence classification and unresolved work.</p>
      <div className="mb-8 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-zinc-700"><strong>Development Opportunity</strong> means Atlas has moved beyond general research: identifiable counterparties, infrastructure conditions or a credible development pathway justify focused project-formation work. It does not mean Atlas owns a site or has secured power, permits, financing or demand unless separately evidenced.</div>
      <div className="space-y-5">{scopedPipeline.map(opportunity => <PipelineCard opportunity={opportunity} key={opportunity.id} />)}</div>
    </div></section>

    <Section id="evidence" eyebrow="Atlas Validation Standard" title="Precision is part of the origination advantage.">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-lg leading-relaxed text-zinc-700">Atlas distinguishes between identified, stated, documented, independently verified and controlled information.</p><p className="mt-5 leading-relaxed text-zinc-600">Land, power, permits, financing and customer demand are not described as secured without sufficient supporting evidence from the relevant counterparty or documentation.</p></div><dl className="divide-y divide-zinc-200 border-y border-zinc-200">{atlasEvidenceLevels.map(([level, meaning]) => <div className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr]" key={level}><dt className="font-semibold">{level}</dt><dd className="text-sm leading-relaxed text-zinc-600">{meaning}</dd></div>)}</dl></div>
    </Section>

    <Section id="validation" eyebrow="How Atlas validates" title="Research does not become a project by assertion.">
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">{[
        ['01', 'Originate', 'Identify markets, infrastructure conditions and relevant counterparties.'],
        ['02', 'Research', 'Test power, land, fibre, cooling, permitting and execution context.'],
        ['03', 'Validate', 'Seek counterparty evidence and test the assumptions that matter.'],
        ['04', 'Structure', 'Define control routes, development rights, legal structure and economics.'],
        ['05', 'Align', 'Match suitable capital, operators, capacity demand and delivery capability.'],
        ['06', 'Develop', 'Proceed only when sufficient evidence and contractual alignment exist.'],
      ].map(([number, title, copy]) => <li className="bg-white p-6" key={number}><span className="text-xs font-bold text-amber-700">{number}</span><h3 className="mt-3 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-600">{copy}</p></li>)}</ol>
    </Section>

    <Section id="governance" eyebrow="Operating boundaries" title="What Atlas does—and what it does not assume.">
      <div className="grid overflow-hidden rounded-2xl border border-zinc-200 md:grid-cols-2"><div className="p-7"><h3 className="text-xl font-semibold">Atlas does</h3><ul className="mt-5 space-y-3 text-sm text-zinc-700">{['Originate infrastructure opportunities','Conduct and publish research','Engage relevant local counterparties','Validate infrastructure pathways','Structure selected opportunities','Align viable work with appropriate capital, operators and specialists'].map(item => <li key={item}>— {item}</li>)}</ul></div><div className="border-t border-zinc-200 bg-zinc-50 p-7 md:border-t-0 md:border-l"><h3 className="text-xl font-semibold">Atlas does not assume</h3><ul className="mt-5 space-y-3 text-sm text-zinc-700">{['Published grid capacity belongs to Atlas','Land is controlled without documentation','A conversation makes a counterparty a partner','Permits exist before formal approval','Financing is secured before commitment','Customer demand exists without evidence'].map(item => <li key={item}>— {item}</li>)}</ul></div></div>
    </Section>

    <section id="research" className="atlas-section border-t border-zinc-200"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="eyebrow">Selected Published Diligence</p><h2 tabIndex={-1} className="section-title">Inspect the work behind Atlas.</h2>
      <p className="section-copy">Every opportunity begins as research. The library retains technical depth, sources, risks, open questions and negative outcomes, whether or not a location advances.</p>
      <div className="divide-y divide-zinc-200 border-y border-zinc-200">{scopedResearch.slice(0, 5).map(candidate => <article key={candidate.id} className="grid gap-3 py-6 sm:grid-cols-[8rem_1fr_12rem] sm:px-3"><span className="text-xs font-bold text-zinc-500">{candidate.id}<span className="mt-2 block font-normal">{candidate.country}</span></span><span><strong>{candidate.name}</strong><span className="ml-2 rounded-full bg-zinc-100 px-2 py-1 text-xs">{candidate.gate} · {candidate.status}</span><span className="mt-2 block text-sm text-zinc-600">{candidate.summary}</span><span className="mt-2 block text-sm"><strong>Unresolved:</strong> {candidate.blocker}</span></span><span className="flex flex-col items-start gap-2 text-xs text-zinc-500"><span>Reviewed {candidate.reviewed}</span><Link to={candidate.route} className="text-sm font-semibold text-zinc-950 underline decoration-amber-400 underline-offset-4">Review research →</Link>{candidate.dossierUrl && <a href={candidate.dossierUrl} className="text-sm underline underline-offset-4">Open PDF dossier</a>}</span></article>)}</div>
      {!country && <Link to="/atlas/research" {...intentPrefetch('research')} className="mt-8 inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold">View the complete research library →</Link>}
    </div></section>

    <Section id="partners" eyebrow="Alignment" title="Partners turn validated evidence into development progress.">
      <div className="grid gap-5 md:grid-cols-3">{[
        ['Capital Partners', 'Development capital can support grid studies and applications, site control, technical diligence, engineering, permitting, legal structuring and commercial validation.', 'Discuss a capital partnership'],
        ['Operators & Capacity Partners', 'Atlas works with operators and capacity buyers to define real infrastructure requirements and align selected sites with credible demand.', 'Discuss capacity requirements'],
        ['Site & Infrastructure Partners', 'Atlas evaluates land, power, grid, fibre, cooling, permitting, timeline, scale and expansion with local infrastructure counterparties.', 'Discuss an opportunity'],
      ].map(item => <article className="flex flex-col rounded-2xl border border-zinc-200 p-6" key={item[0]}><h3 className="text-xl font-semibold">{item[0]}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{item[1]}</p><Link to="/atlas/partners" {...intentPrefetch('partners')} className="mt-6 font-semibold underline decoration-amber-400 underline-offset-4">{item[2]} →</Link></article>)}</div>
    </Section>

    <Section id="leadership" eyebrow="About Atlas" title="Early-stage project formation inside a broader company.">
      <div className="grid gap-8 md:grid-cols-2"><div><h3 className="text-xl font-semibold">Alex Velasco</h3><p className="mt-1 text-sm font-medium text-zinc-500">Founder, ALBEDO Industries / Project Atlas</p><p className="mt-4 leading-relaxed text-zinc-600">Alex is building Atlas as a research-led infrastructure origination initiative. Project-specific work involves relevant local counterparties and technical specialists as opportunities progress; Atlas does not present itself as a large operating organisation.</p><a href="mailto:alex@albedo-industries.com" className="mt-5 inline-flex font-semibold underline decoration-amber-400 underline-offset-4">alex@albedo-industries.com</a></div><div><h3 className="font-semibold">An ALBEDO Industries initiative</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600">ALBEDO remains a broader company working across software, mobility, infrastructure and AI. Project-specific legal and ownership structures may be established where an opportunity advances to contractual development or investment; none is implied before then.</p><Link to="/about" className="mt-5 inline-flex font-semibold underline decoration-amber-400 underline-offset-4">About ALBEDO Industries →</Link></div></div>
    </Section>
    <section className="bg-zinc-950 text-white"><div className="mx-auto max-w-6xl px-6 py-20"><h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">Request the private detail when there is a credible fit.</h2><p className="mt-5 max-w-2xl text-zinc-400">Atlas shares deeper pipeline, diligence and project-specific information selectively after an initial conversation.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/atlas/partners" {...intentPrefetch('partners')} className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-950">Discuss a partnership</Link><a href={contact} className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold">Contact Project Atlas</a></div></div></section>
  </div>
}

function AtlasHero() {
  const [reduceMotion,setReduceMotion]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(()=>{
    const query=window.matchMedia('(prefers-reduced-motion: reduce)')
    const update=()=>setReduceMotion(query.matches)
    query.addEventListener('change',update)
    return()=>query.removeEventListener('change',update)
  },[])

  return <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-zinc-950 text-white">
    {!reduceMotion && <video className="pointer-events-none absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline preload="metadata" aria-hidden="true"><source src="/media/ALBEDO - INDUSTRIES/weryai_5bb6aefbba19268f1e7c90c34015e82f.mp4" type="video/mp4" /></video>}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" aria-hidden="true" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" aria-hidden="true" />
    <AtlasHeroContent />
  </section>
}

function AtlasHeroContent() {
  return <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center px-6 py-20 md:py-28">
    <p className="eyebrow text-amber-200">PROJECT ATLAS · AN ALBEDO INDUSTRIES INITIATIVE</p>
    <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">Originating and advancing AI infrastructure opportunities.</h1>
    <p className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-300">AI infrastructure origination and development across selected international markets. Evidence-led, early stage, and explicit about what is not yet controlled.</p>
    <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link to="/atlas?section=pipeline" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950">Explore the pipeline</Link><Link to="/atlas?section=research" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold">Explore research</Link><Link to="/atlas/partners" {...intentPrefetch('partners')} className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-300/50 px-6 text-sm font-semibold text-amber-100">Discuss an opportunity</Link></div>
    <p className="mt-8 max-w-3xl border-l border-amber-300 pl-4 text-sm leading-relaxed text-zinc-400">Atlas is an infrastructure origination, research and validation initiative—not an operator, utility, fund or claim of control over every listed site. Power, land, permits, financing and demand are not described as secured without supporting evidence.</p>
  </div>
}

function AtlasNav() {
  const location=useLocation()
  const requested=new URLSearchParams(location.search).get('section') || location.hash.slice(1)
  const [active,setActive]=useState(resolveAtlasSection(requested) || 'overview')
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0]
      const section=visible && resolveAtlasSection(visible.target.id)
      if(section)setActive(section)
    },{rootMargin:'-112px 0px -55% 0px',threshold:[0,.15,.5]})
    atlasSectionIds.forEach(id=>{const section=document.getElementById(id);if(section)observer.observe(section)})
    return()=>observer.disconnect()
  },[])
  const items=[['Overview','overview'],['Pipeline','pipeline'],['Validation','validation'],['Research','research'],['Evidence','evidence'],['Partners','partners'],['Leadership','leadership']]
  return <nav aria-label="Project Atlas sections" className="atlas-nav sticky top-[65px] z-40 overflow-x-auto border-b border-zinc-200 bg-white/95 backdrop-blur"><div className="mx-auto flex min-w-max max-w-6xl gap-1 px-6 py-2 text-xs font-medium">{items.map(([label,id])=><Link to={`/atlas?section=${id}`} aria-current={active===id?'location':undefined} className={`rounded-full px-3 py-2 transition-colors focus-visible:outline-offset-[-2px] ${active===id?'bg-zinc-900 text-white':'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'}`} key={id}>{label}</Link>)}</div></nav>
}

function PipelineCard({opportunity}:{opportunity:AtlasPipelineOpportunity}) { return <article className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${opportunity.layer === 'Development Opportunity' ? 'bg-zinc-950 text-white' : 'border border-zinc-300'}`}>{opportunity.layer}</span><span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold">Stage · {opportunity.stage}</span><span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-900">Evidence · {opportunity.evidence}</span></div><div className="mt-5 grid gap-6 lg:grid-cols-[1fr_18rem]"><div><p className="text-xs font-bold tracking-wider text-zinc-500">{opportunity.id} · {opportunity.market}</p><h3 className="mt-2 text-3xl font-semibold">{opportunity.name}</h3><h4 className="mt-5 text-xs font-bold uppercase tracking-wider text-zinc-500">What we know</h4><p className="mt-2 text-lg font-medium">{opportunity.scale}</p><p className="mt-3 leading-relaxed text-zinc-600">{opportunity.position}</p>{opportunity.researchRoute && <Link to={opportunity.researchRoute} {...intentPrefetch(candidateModule(opportunity.researchRoute))} className="mt-5 inline-flex font-semibold underline decoration-amber-400 underline-offset-4">Open underlying research →</Link>}</div><div className="rounded-xl bg-zinc-50 p-5"><h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">What remains unresolved</h4><ul className="mt-3 space-y-2 text-sm text-zinc-700">{opportunity.validation.map(item => <li className="flex gap-2" key={item}><span aria-hidden="true">—</span>{item}</li>)}</ul><div className="mt-5 border-t border-zinc-200 pt-4"><h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Next validation milestone</h4><p className="mt-2 text-sm font-semibold">{opportunity.nextMilestone}</p></div><p className="mt-5 text-xs text-zinc-500">Last reviewed: <time>{opportunity.lastReviewed}</time></p></div></div></article> }

function Section({id, eyebrow, title, children}:{id:string;eyebrow:string;title:string;children:React.ReactNode}) { return <section id={id} className="atlas-section border-t border-zinc-200"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28"><p className="eyebrow">{eyebrow}</p><h2 tabIndex={-1} className="section-title">{title}</h2>{children}</div></section> }

function candidateModule(route: string): RouteModule {
  if (route.includes('el-bierzo')) return 'elBierzo'
  if (route.includes('canelones')) return 'canelones'
  if (route.includes('sines')) return 'sines'
  if (route.includes('as-pontes')) return 'asPontes'
  if (route.includes('kouvola')) return 'kouvolaKotka'
  return 'candidate'
}
