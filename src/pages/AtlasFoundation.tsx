import { Link } from 'react-router-dom'
import FoundationNav from '../components/atlas/FoundationNav'
import { foundationLinks, foundationMetrics, foundationPillars } from '../data/atlasFoundation'
import { atlasFoundationLocations } from '../data/atlasFoundationLocations'

const model = ['Power', 'Infrastructure', 'Investment', 'Skills', 'Employment', 'Local businesses', 'Regional development']

export default function AtlasFoundation() {
  return <article className="bg-white text-zinc-950">
    <FoundationNav />
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,#92400e_0%,transparent_38%)] opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-36">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-amber-200">Atlas Foundation · Regional development platform</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.04em] md:text-7xl">Developing infrastructure. Developing regions.</h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-300">Atlas Foundation is the proposed regional-development platform associated with Atlas infrastructure projects.</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">It is designed to help translate major investment into skills, employment pathways, stronger local suppliers and wider economic opportunity—where appropriate and with regional partners.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-semibold text-zinc-950" to="/atlas/foundation/programme">Explore the Programme</Link><a className="inline-flex min-h-12 items-center justify-center border border-zinc-600 px-6 text-sm font-semibold" href={foundationLinks.partner}>Partner with Atlas Foundation</a></div>
      </div>
    </section>

    <Section eyebrow="Why it exists" title="Infrastructure can transform more than a site." intro="An Atlas development could create demand for capabilities, services and investment beyond the facility itself. Atlas Foundation provides a structured way to work with a region so that local people, institutions and businesses can better access those opportunities.">
      <Flow items={model} />
    </Section>

    <Section dark eyebrow="Regional development priorities" title="Build local capability around real project demand." intro="The platform brings six connected priorities into one regional plan.">
      <div className="grid gap-px border border-zinc-700 bg-zinc-700 md:grid-cols-2 lg:grid-cols-3">{foundationPillars.map(([title, copy], index) => <article className="bg-zinc-950 p-7" key={title}><span className="text-xs text-amber-300">0{index + 1}</span><h3 className="mt-7 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-zinc-400">{copy}</p></article>)}</div>
    </Section>

    <Section eyebrow="Workforce and suppliers" title="Prepare people and businesses for practical opportunities." intro="Atlas Academy would work with existing education organisations and employers to align training with evidenced skills requirements. The Atlas Local Supplier Programme would help regional SMEs understand procurement and qualification requirements. Neither programme guarantees employment or contracts.">
      <div className="grid gap-6 md:grid-cols-2"><Summary title="Atlas Academy" copy="Training → Certification → Apprenticeship → Employment pathway, adapted to each project and delivered with local institutions where feasible." /><Summary title="Local Supplier Programme" copy="Briefings, qualification guidance and tender-readiness support to help local companies compete for suitable project work." /></div>
      <Link className="mt-9 inline-flex min-h-11 items-center font-semibold underline decoration-amber-500 underline-offset-4" to="/atlas/foundation/programme">See how the programme would work →</Link>
    </Section>

    <Section soft eyebrow="From method to local execution" title="One platform. One methodology. A plan for each location." intro="The three levels have distinct roles, so strategy, implementation and local evidence remain clear.">
      <div className="grid gap-px border border-zinc-300 bg-zinc-300 md:grid-cols-3"><Hierarchy number="01" title="Atlas Foundation" copy="Why regional development belongs alongside infrastructure investment." /><Hierarchy number="02" title="Regional Development Programme" copy="How Atlas proposes to work before development, through construction and during operations." /><Hierarchy number="03" title="Location Development Plan" copy="How the methodology is adapted using verified information for a specific region." /></div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="inline-flex min-h-12 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white" to="/atlas/foundation/programme">Explore the Programme</Link><Link className="inline-flex min-h-12 items-center justify-center border border-zinc-400 px-6 text-sm font-semibold" to="/atlas/foundation/locations">View Location Plans</Link></div>
    </Section>

    <Section dark eyebrow="Current status" title="Framework established. No location programme published." intro="Atlas Foundation does not currently claim active location programmes or measured outcomes. A plan will be published only when Atlas has sufficient verified information and an appropriate development relationship with the region.">
      <div className="border border-zinc-700 p-6 md:p-8"><p className="text-lg font-semibold">{atlasFoundationLocations.filter(location => location.published).length === 0 ? 'No location-specific programmes published' : `${atlasFoundationLocations.filter(location => location.published).length} published location programme${atlasFoundationLocations.filter(location => location.published).length === 1 ? '' : 's'}`}</p><p className="mt-3 text-sm text-zinc-400">Future reporting could cover {foundationMetrics.slice(0, 5).map(metric => metric.label.toLowerCase()).join(', ')} and other verified indicators.</p></div>
    </Section>

    <section className="bg-amber-300"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28"><h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">Infrastructure is the starting point.</h2><p className="mt-6 max-w-3xl text-xl leading-relaxed">The objective is to help the people, businesses and institutions around a suitable Atlas project participate in the opportunity it creates.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link className="inline-flex min-h-12 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white" to="/atlas/foundation/programme">Explore the Programme</Link><a className="inline-flex min-h-12 items-center justify-center border border-zinc-950 px-6 text-sm font-semibold" href={foundationLinks.partner}>Partner with Atlas Foundation</a></div></div></section>
  </article>
}

function Section({ eyebrow, title, intro, children, dark = false, soft = false }: { eyebrow: string; title: string; intro: string; children: React.ReactNode; dark?: boolean; soft?: boolean }) {
  return <section className={`border-t ${dark ? 'border-zinc-800 bg-zinc-950 text-white' : soft ? 'border-zinc-200 bg-zinc-50' : 'border-zinc-200 bg-white'}`}><div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28"><p className={`text-xs font-bold uppercase tracking-[.18em] ${dark ? 'text-amber-200' : 'text-zinc-500'}`}>{eyebrow}</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2><p className={`mt-6 max-w-3xl text-lg leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{intro}</p><div className="mt-12">{children}</div></div></section>
}
function Flow({ items }: { items: string[] }) { return <ol aria-label={items.join(' to ')} className="grid gap-px border border-zinc-300 bg-zinc-300 sm:grid-cols-2 lg:flex">{items.map((item, index) => <li className="flex min-h-28 flex-col justify-between bg-white p-5 lg:min-w-0 lg:flex-1" key={item}><span className="text-xs text-amber-700">{String(index + 1).padStart(2, '0')}</span><strong className="text-sm">{item}</strong></li>)}</ol> }
function Summary({ title, copy }: { title: string; copy: string }) { return <article className="border-t-2 border-zinc-950 pt-6"><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-zinc-600">{copy}</p></article> }
function Hierarchy({ number, title, copy }: { number: string; title: string; copy: string }) { return <article className="bg-white p-6"><span className="text-xs text-amber-700">{number}</span><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600">{copy}</p></article> }
