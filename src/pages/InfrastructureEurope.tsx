import { Link } from 'react-router-dom'
import { atlasEvidenceLevels, atlasPipeline, type AtlasPipelineOpportunity } from '../data/atlasPipeline'
import { atlasResearchPreview, atlasResearchRecords } from '../data/atlasResearchIndex'
import { useAtlasMetadata } from '../hooks/useAtlasMetadata'

const contact = 'mailto:alex@albedo-industries.com?subject=Project%20Atlas%20conversation'

export default function InfrastructureEurope({country}:{country?:string}) {
  useAtlasMetadata({
    name: country ? `${country} Atlas Research` : 'Project Atlas', country: country ?? 'International',
    title: country ? undefined : 'Project Atlas — AI Infrastructure Opportunities | ALBEDO Industries',
    description: 'Project Atlas is ALBEDO Industries’ research-led platform for originating, validating and advancing early-stage AI and data-centre infrastructure opportunities.',
    route: country ? `/infrastructure/${country.toLowerCase()}` : '/atlas',
  })
  const scopedPipeline = country ? atlasPipeline.filter(opportunity => opportunity.market === country) : atlasPipeline
  const researchPreview = country ? atlasResearchRecords.filter(record => record.country === country) : atlasResearchPreview

  return <div>
    {!country && <AtlasNav />}
    <section className="bg-zinc-950 text-white"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="eyebrow text-amber-200">PROJECT ATLAS · AN ALBEDO INDUSTRIES INITIATIVE</p>
      <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">Originating and advancing AI infrastructure opportunities.</h1>
      <p className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-300">ALBEDO Industries’ research-led initiative for identifying, validating and advancing early-stage data-centre infrastructure opportunities in selected international markets.</p>
      <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><a href="#pipeline" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950">Explore active opportunities</a><Link to="/atlas/partners" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-semibold">Discuss investment or partnership</Link><Link to="/atlas/research" className="inline-flex min-h-11 items-center text-sm font-semibold text-amber-100 underline decoration-amber-300/60 underline-offset-4">Review Atlas research</Link></div>
      <p className="mt-8 max-w-3xl border-l border-amber-300 pl-4 text-sm leading-relaxed text-zinc-400">Atlas is an infrastructure origination, research and validation initiative—not an operator, utility, fund or claim of control over every listed site. Power, land, permits, financing and demand are not described as secured without supporting evidence.</p>
    </div></section>

    <Section id="model" eyebrow="How Atlas creates value" title="Research becomes an opportunity only when the evidence earns it.">
      <p className="section-copy">Atlas typically tests first phases around 10–25 MW while prioritising credible pathways to larger scale. Work progresses through research, origination, validation, structuring, site control or development, and capital or operator alignment.</p>
      <div className="grid gap-4 md:grid-cols-3">{[
        ['01 · Research Universe', 'Markets and locations studied across power, grid, land, fibre, cooling, permitting and execution risk—including candidates that pause, close after research or do not advance.'],
        ['02 · Active Pipeline', 'A selected group with live institutional, developer, utility or counterparty work. Inclusion does not imply an asset is controlled.'],
        ['03 · Development Opportunities', 'The subset sufficiently advanced for focused conversations with development capital, operators and strategic partners.'],
      ].map(item => <article className="rounded-2xl border border-zinc-200 p-6" key={item[0]}><h3 className="text-xl font-semibold">{item[0]}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600">{item[1]}</p></article>)}</div>
    </Section>

    <section id="pipeline" className="scroll-mt-32 border-t border-zinc-200 bg-zinc-50"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="eyebrow">Commercial pipeline</p><h2 className="section-title">Stage describes progress. Evidence describes confidence.</h2>
      <p className="section-copy">These records reflect active work, not secured capacity. Development Opportunities are shown first; every material figure carries its evidence classification and unresolved work.</p>
      <div className="space-y-5">{scopedPipeline.map(opportunity => <PipelineCard opportunity={opportunity} key={opportunity.id} />)}</div>
    </div></section>

    <Section id="standard" eyebrow="Atlas Validation Standard" title="Precision is part of the origination advantage.">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-lg leading-relaxed text-zinc-700">Atlas distinguishes between identified, stated, documented, independently verified and controlled information.</p><p className="mt-5 leading-relaxed text-zinc-600">Land, power, permits, financing and customer demand are not described as secured without sufficient supporting evidence from the relevant counterparty or documentation.</p></div><dl className="divide-y divide-zinc-200 border-y border-zinc-200">{atlasEvidenceLevels.map(([level, meaning]) => <div className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr]" key={level}><dt className="font-semibold">{level}</dt><dd className="text-sm leading-relaxed text-zinc-600">{meaning}</dd></div>)}</dl></div>
    </Section>

    <Section id="partners" eyebrow="Alignment" title="Partners turn validated evidence into development progress.">
      <div className="grid gap-5 md:grid-cols-3">{[
        ['Capital Partners', 'Development capital can support grid studies and applications, site control, technical diligence, engineering, permitting, legal structuring and commercial validation.', 'Discuss a capital partnership'],
        ['Operators & Capacity Partners', 'Atlas works with operators and capacity buyers to define real infrastructure requirements and align selected sites with credible demand.', 'Discuss capacity requirements'],
        ['Site & Infrastructure Partners', 'Atlas evaluates land, power, grid, fibre, cooling, permitting, timeline, scale and expansion with local infrastructure counterparties.', 'Discuss an opportunity'],
      ].map(item => <article className="flex flex-col rounded-2xl border border-zinc-200 p-6" key={item[0]}><h3 className="text-xl font-semibold">{item[0]}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{item[1]}</p><Link to="/atlas/partners" className="mt-6 font-semibold underline decoration-amber-400 underline-offset-4">{item[2]} →</Link></article>)}</div>
    </Section>

    <section id="research" className="scroll-mt-32 border-t border-zinc-200 bg-zinc-50"><div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="eyebrow">Atlas Research</p><h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Research is the origination engine.</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-zinc-600">The library retains technical evidence, risks, open questions and negative outcomes whether or not a location advances. Positive, paused and closed studies remain accessible.</p>
      <div className="mt-8 grid gap-3 md:grid-cols-2">{researchPreview.map(record => <Link to={record.route} className="rounded-xl border border-zinc-200 bg-white p-5 hover:border-zinc-400" key={record.id}><div className="flex items-center justify-between gap-3"><span className="text-xs font-bold tracking-wider text-zinc-500">{record.id} · {record.country}</span><span className="text-xs text-zinc-500">{record.gate}</span></div><h3 className="mt-3 text-lg font-semibold">{record.name}</h3><p className="mt-2 text-sm text-zinc-600">{record.status}</p></Link>)}</div>
      <Link to="/atlas/research" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white">Explore the research library</Link>
    </div></section>

    <Section id="about" eyebrow="About Atlas" title="Early-stage project formation within the broader ALBEDO portfolio.">
      <div className="grid gap-8 md:grid-cols-2"><div><p className="leading-relaxed text-zinc-600">Project Atlas is an ALBEDO Industries initiative. The broader ALBEDO portfolio spans software, mobility, infrastructure and AI.</p><Link to="/about" className="mt-5 inline-flex font-semibold underline decoration-amber-400 underline-offset-4">About ALBEDO Industries →</Link></div><div><h3 className="font-semibold">Potential project-level participation</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600">Depending on the opportunity and counterparties, Atlas may participate through origination economics, development fees, project equity, SPVs, strategic joint ventures or carried participation. No structure or economics are implied to be agreed.</p></div></div>
    </Section>
    <section className="bg-zinc-950 text-white"><div className="mx-auto max-w-6xl px-6 py-20"><h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">Request the private detail when there is a credible fit.</h2><p className="mt-5 max-w-2xl text-zinc-400">Atlas shares deeper pipeline, diligence and project-specific information selectively after an initial conversation.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/atlas/partners" className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-950">Discuss a partnership</Link><a href={contact} className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold">Contact Project Atlas</a></div></div></section>
  </div>
}

function AtlasNav() { return <nav aria-label="Project Atlas" className="sticky top-[65px] z-40 overflow-x-auto border-b border-zinc-200 bg-white/95 backdrop-blur"><div className="mx-auto flex min-w-max max-w-6xl gap-1 px-6 py-2 text-xs font-medium">{[['Overview','#model'],['Pipeline','#pipeline'],['Methodology','#standard'],['Partners','#partners'],['Research','/atlas/research'],['About Atlas','#about']].map(([label, href]) => href.startsWith('/')?<Link to={href} className="inline-flex min-h-10 items-center rounded-full px-3 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950" key={href}>{label}</Link>:<a href={href} className="inline-flex min-h-10 items-center rounded-full px-3 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950" key={href}>{label}</a>)}</div></nav> }

function PipelineCard({opportunity}:{opportunity:AtlasPipelineOpportunity}) { const advanced=opportunity.layer==='Development Opportunity'; return <article className={`rounded-2xl border bg-white p-6 md:p-7 ${advanced?'border-zinc-400 shadow-sm':'border-zinc-200'}`}><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${advanced?'bg-zinc-950 text-white':'border border-zinc-300'}`}>{opportunity.layer}</span><span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold">Stage · {opportunity.stage}</span><span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-900">Evidence · {opportunity.evidence}</span></div><div className="mt-5 grid gap-6 lg:grid-cols-[1fr_18rem]"><div><p className="text-xs font-bold tracking-wider text-zinc-500">{opportunity.id} · {opportunity.market}</p><h3 className="mt-2 text-2xl font-semibold md:text-3xl">{opportunity.name}</h3><p className="mt-3 text-lg font-medium">{opportunity.scale}</p><p className="mt-3 max-w-3xl leading-relaxed text-zinc-600">{opportunity.position}</p>{opportunity.researchRoute?<Link to={opportunity.researchRoute} className="mt-5 inline-flex min-h-11 items-center font-semibold underline decoration-amber-400 underline-offset-4">Review public research →</Link>:<Link to="/atlas/partners" className="mt-5 inline-flex min-h-11 items-center font-semibold underline decoration-amber-400 underline-offset-4">{advanced?'Request private details':'Discuss this opportunity'} →</Link>}</div><div className="rounded-xl bg-zinc-50 p-5"><h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Most important unresolved conditions</h4><ul className="mt-3 space-y-2 text-sm text-zinc-700">{opportunity.validation.slice(0,4).map(item => <li className="flex gap-2" key={item}><span aria-hidden="true">—</span>{item}</li>)}</ul><p className="mt-5 text-xs text-zinc-500">Last reviewed: <time>{opportunity.lastReviewed}</time></p></div></div></article> }

function Section({id, eyebrow, title, children}:{id:string;eyebrow:string;title:string;children:React.ReactNode}) { return <section id={id} className="scroll-mt-32 border-t border-zinc-200"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{children}</div></section> }
