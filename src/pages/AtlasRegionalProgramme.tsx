import { Link } from 'react-router-dom'
import FoundationNav from '../components/atlas/FoundationNav'
import { foundationLinks } from '../data/atlasFoundation'

const beforeInputs = [
  'Workforce and employability', 'Vocational and university programmes', 'Skills gaps',
  'Contractors and suppliers', 'Local economic priorities', 'Industrial capabilities',
  'Potential complementary industries', 'Community priorities',
]
const beforeOutputs = [
  'Regional skills assessment', 'Supplier map', 'Training requirements',
  'Workforce-development plan', 'Local procurement strategy', 'Potential partnership list',
]
const constructionAreas = [
  ['Local employment', 'Work with contractors to identify roles that could realistically be filled locally.'],
  ['Training before hiring', 'Shape short courses around confirmed contractor and project requirements.'],
  ['Apprenticeships', 'Create pathways with vocational schools and participating contractors where feasible.'],
  ['Local procurement', 'Explain the qualification, safety, insurance and technical requirements relevant to local SMEs.'],
  ['Supplier development', 'Run supplier briefings and support businesses preparing to enter the project supply chain.'],
  ['Education partnerships', 'Connect infrastructure projects with vocational education, universities and STEM programmes.'],
]
const operations = [
  'Technical employment', 'Continuous workforce training', 'Apprenticeships',
  'Operations and maintenance careers', 'Local supplier contracts', 'Technical certifications',
  'University collaboration', 'STEM programmes', 'Local entrepreneurship',
]
const ecosystem = [
  'AI and digital companies', 'Technical service companies', 'Engineering', 'Energy services',
  'Infrastructure suppliers', 'Maintenance companies', 'Training providers', 'Startups',
  'Logistics', 'Complementary industrial activities',
]
const supplierComponents = [
  'Supplier registration', 'Contractor introductions', 'Project-requirement workshops',
  'Procurement briefings', 'Health and safety requirements', 'Quality requirements',
  'Tender-readiness support', 'Qualification guidance',
]
const academyTraining = [
  'Electrical systems', 'HVAC and cooling', 'Fibre and networking', 'Industrial maintenance',
  'Data-centre operations', 'Health and safety', 'Renewable energy',
  'Construction management', 'Digital infrastructure',
]
const publicCooperation = [
  'Workforce development', 'Education', 'Supplier engagement', 'Local employment',
  'Economic development', 'Investment attraction', 'Infrastructure coordination',
]
const indicators = [
  'People trained', 'Apprenticeships', 'Local hires', 'Local suppliers participating',
  'Local procurement value', 'Educational partners', 'Qualifications completed',
  'Companies supported', 'Businesses entering the Atlas supply chain',
]
const principles = ['Measurable', 'Locally relevant', 'Employment-focused', 'Partnership-driven', 'Transparent', 'Tied to real economic opportunity']

export default function AtlasRegionalProgramme() {
  return <article className="bg-white text-zinc-950">
    <FoundationNav />
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-32">
        <Link to="/atlas/foundation" className="text-sm text-zinc-400 hover:text-white">← Atlas Foundation</Link>
        <p className="mt-12 text-xs font-bold uppercase tracking-[.2em] text-amber-200">Proposed programme framework</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.04em] md:text-7xl">Regional Development Programme</h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-zinc-300">A practical framework for working with a region before, during and after an Atlas infrastructure project.</p>
        <div className="mt-8 max-w-3xl border-l-2 border-amber-300 pl-5 text-sm leading-relaxed text-zinc-400">This page describes programme components Atlas Foundation could progressively activate with municipalities and local partners. It does not represent completed studies, active initiatives or committed outcomes.</div>
      </div>
    </section>

    <Phase number="01" label="Before development" title="Understand the region before planning the programme." intro="Before construction, Atlas Foundation would listen to public institutions, educators, employers, businesses and community organisations. The aim would be to establish what already exists, where the gaps are and which opportunities relate to the proposed project.">
      <Process items={['Understand', 'Map', 'Plan']} />
      <Split title="What we would examine" items={beforeInputs} titleTwo="Potential outputs" itemsTwo={beforeOutputs} />
      <Status>Proposed components only. Any assessment or plan would be labelled with its location, partners, evidence and completion status before publication.</Status>
    </Phase>

    <Phase number="02" label="Project development and construction" title="Convert project demand into accessible local opportunity." intro="As requirements become clearer, Atlas Foundation could connect contractor demand with relevant training, qualified workers and capable local suppliers.">
      <div className="grid gap-px border border-zinc-300 bg-zinc-300 md:grid-cols-2 lg:grid-cols-3">{constructionAreas.map(([title, copy], i) => <article className="bg-white p-6" key={title}><span className="text-xs text-amber-700">0{i + 1}</span><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600">{copy}</p></article>)}</div>
      <Process items={['Project demand', 'Training', 'Qualification', 'Local supplier / worker', 'Project participation']} />
    </Phase>

    <Phase number="03" label="Operations" title="Continue after construction." intro="Regional development should not disappear when a facility opens. Atlas Academy could support long-term technical careers, continuous learning and supplier capability throughout operations.">
      <Process items={['Education', 'Training', 'Apprenticeship', 'Employment', 'Career development']} />
      <Tags items={operations} />
    </Phase>

    <Section dark eyebrow="Regional economic development" title="Build conditions for wider investment." intro="The data centre can be an anchor, but the objective extends beyond its direct jobs. Atlas Foundation could convene the institutions, infrastructure providers and businesses needed to explore a broader economic ecosystem.">
      <Tags items={ecosystem} dark />
      <Status dark>Atlas cannot guarantee that companies will locate in a region. The role of the programme is to help create credible conditions and partnerships that may encourage complementary investment.</Status>
    </Section>

    <Section eyebrow="Atlas Local Supplier Programme" title="Help local companies compete for project opportunities." intro="The programme would help SMEs understand procurement routes and become tender-ready. It would not guarantee contracts or alter contractor qualification standards.">
      <Tags items={supplierComponents} />
      <p className="mt-8 max-w-3xl text-lg font-semibold">The objective is capability: making local businesses better prepared to compete for suitable project-related work.</p>
    </Section>

    <Section soft eyebrow="Atlas Academy" title="Training designed with the organisations that already serve the region." intro="Atlas Academy’s preferred model is partnership—not owning buildings or operating a standalone school. Training would begin with credible future demand and be delivered with existing education organisations and employers.">
      <Process items={['Atlas identifies skills requirements', 'Education partners design or deliver training', 'Employers define practical requirements', 'Participants receive relevant training', 'Qualified candidates access opportunities']} />
      <Tags items={academyTraining} />
    </Section>

    <Section eyebrow="Government and municipality partnership" title="A shared development plan" intro="Atlas Foundation could work with municipalities and regional governments to shape a programme around the infrastructure project. Public institutions would retain their responsibilities; Atlas could contribute project requirements, coordination and delivery support.">
      <Tags items={publicCooperation} />
    </Section>

    <Section dark eyebrow="Measurement" title="Indicators we intend to measure" intro="Results would be published only when a location programme is active and evidence is available. Until then, these remain reporting categories—not achievements.">
      <Tags items={indicators} dark />
    </Section>

    <Section eyebrow="Governance principle" title="Programmes must follow real regional and project needs." intro="Initiatives should support economic opportunity rather than exist for marketing or ESG reporting.">
      <Tags items={principles} />
    </Section>

    <section className="bg-amber-300">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.18em]">The regional development model</p>
        <Process items={['Atlas infrastructure investment', 'Local construction & procurement', 'Skills & training', 'Employment', 'Local businesses', 'Complementary investment', 'Long-term regional development']} />
        <h2 className="mt-12 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">The data centre is the anchor investment.</h2>
        <p className="mt-5 max-w-3xl text-xl">The objective is to help build an economic ecosystem around it.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link className="inline-flex min-h-12 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white" to="/atlas/foundation/locations">Explore Location Plans</Link><a className="inline-flex min-h-12 items-center justify-center border border-zinc-950 px-6 text-sm font-semibold" href={foundationLinks.partner}>Discuss Regional Development</a></div>
      </div>
    </section>
  </article>
}

function Phase({ number, label, title, intro, children }: { number: string; label: string; title: string; intro: string; children: React.ReactNode }) {
  return <section className="border-t border-zinc-200"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28"><p className="text-xs font-bold uppercase tracking-[.18em] text-amber-700">{number} · {label}</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2><p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600">{intro}</p><div className="mt-12">{children}</div></div></section>
}
function Section({ eyebrow, title, intro, children, dark = false, soft = false }: { eyebrow: string; title: string; intro: string; children: React.ReactNode; dark?: boolean; soft?: boolean }) {
  return <section className={`border-t ${dark ? 'border-zinc-800 bg-zinc-950 text-white' : soft ? 'border-zinc-200 bg-zinc-50' : 'border-zinc-200 bg-white'}`}><div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28"><p className={`text-xs font-bold uppercase tracking-[.18em] ${dark ? 'text-amber-200' : 'text-zinc-500'}`}>{eyebrow}</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2><p className={`mt-6 max-w-3xl text-lg leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{intro}</p><div className="mt-12">{children}</div></div></section>
}
function Process({ items }: { items: string[] }) {
  return <ol aria-label={items.join(' to ')} className="grid gap-px border border-zinc-400 bg-zinc-400 sm:grid-cols-2 lg:flex">{items.map((item, i) => <li className="flex min-h-28 flex-col justify-between bg-white p-5 text-zinc-950 lg:min-w-0 lg:flex-1" key={item}><span className="text-xs text-amber-700">{String(i + 1).padStart(2, '0')}</span><strong className="text-sm">{item}</strong></li>)}</ol>
}
function Tags({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return <ul className={`grid gap-px border ${dark ? 'border-zinc-700 bg-zinc-700' : 'border-zinc-300 bg-zinc-300'} sm:grid-cols-2 lg:grid-cols-3`}>{items.map(item => <li className={`p-5 text-sm ${dark ? 'bg-zinc-950 text-zinc-200' : 'bg-white'}`} key={item}>{item}</li>)}</ul>
}
function Split({ title, items, titleTwo, itemsTwo }: { title: string; items: string[]; titleTwo: string; itemsTwo: string[] }) {
  return <div className="mt-10 grid gap-8 md:grid-cols-2"><List title={title} items={items} /><List title={titleTwo} items={itemsTwo} /></div>
}
function List({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="border-b border-zinc-300 pb-4 text-xl font-semibold">{title}</h3><ul className="mt-3 divide-y divide-zinc-200">{items.map(item => <li className="py-3 text-sm text-zinc-600" key={item}>{item}</li>)}</ul></div>
}
function Status({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`mt-8 border-l-2 border-amber-500 pl-5 text-sm leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{children}</p>
}
