import { Link, useParams } from 'react-router-dom'
import FoundationNav from '../components/atlas/FoundationNav'
import {
  atlasFoundationLocations,
  locationFramework,
  type AtlasFoundationLocation,
  type VerificationStatus,
} from '../data/atlasFoundationLocations'

const phases = [
  ['Site evaluation', 'Understand the region.'],
  ['Development', 'Build partnerships and plans.'],
  ['Pre-construction', 'Prepare workforce and suppliers.'],
  ['Construction', 'Activate employment, training and procurement programmes.'],
  ['Operations', 'Develop long-term technical careers.'],
  ['Regional growth', 'Support the wider economic ecosystem.'],
]
const municipalityView = [
  ['Skills', 'Develop capabilities that remain in the region.'],
  ['Jobs', 'Connect residents with real project and supply-chain demand.'],
  ['Local businesses', 'Increase participation of regional suppliers.'],
  ['Education', 'Connect infrastructure investment with local education.'],
  ['Growth', 'Use the anchor investment to support wider economic development.'],
]

export default function AtlasFoundationLocation() {
  const { location } = useParams()
  if (!location) return <LocationIndex />
  const plan = atlasFoundationLocations.find(item => item.slug === location && item.published)
  if (!plan) return <UnavailablePlan />
  return <LocationPlan plan={plan} />
}

function LocationIndex() {
  const published = atlasFoundationLocations.filter(location => location.published)
  return <article><FoundationNav />
    <section className="bg-zinc-950 text-white"><div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-32"><Link className="text-sm text-zinc-400 hover:text-white" to="/atlas/foundation">← Atlas Foundation</Link><p className="mt-12 text-xs font-bold uppercase tracking-[.2em] text-amber-200">Location plans</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">Regional Development Plans</h1><p className="mt-7 max-w-3xl text-xl leading-relaxed text-zinc-300">A location plan converts the Atlas Foundation methodology into a sourced, practical development tool for a specific region.</p></div></section>
    <section className="border-t border-zinc-200"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28"><h2 className="text-4xl font-semibold tracking-tight">Published plans</h2>{published.length ? <div className="mt-10 grid gap-4 md:grid-cols-2">{published.map(plan => <Link className="border border-zinc-300 p-6 hover:border-zinc-950" key={plan.slug} to={`/atlas/foundation/locations/${plan.slug}`}><span className="text-xs uppercase tracking-wider text-zinc-500">{plan.identity.status}</span><h3 className="mt-3 text-2xl font-semibold">{plan.identity.region}</h3><p className="mt-2 text-zinc-600">{plan.identity.municipality}, {plan.identity.country}</p></Link>)}</div> : <Empty>No location plans are currently published. A plan is published only when Atlas has sufficient verified information and an appropriate development relationship with the region.</Empty>}<Link className="mt-8 inline-flex min-h-12 items-center bg-zinc-950 px-6 text-sm font-semibold text-white" to="/atlas/foundation/programme">Review the Regional Development Programme</Link></div></section>
  </article>
}

function UnavailablePlan() {
  return <><FoundationNav /><section className="min-h-[65vh] bg-zinc-950 text-white"><div className="mx-auto max-w-4xl px-5 py-24 sm:px-6 md:py-32"><p className="text-xs font-bold uppercase tracking-[.2em] text-amber-200">Atlas Foundation</p><h1 className="mt-5 text-5xl font-semibold tracking-tight">No published location plan</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">This URL does not identify a verified, published Regional Development Plan.</p><Link className="mt-8 inline-flex min-h-12 items-center bg-white px-6 text-sm font-semibold text-zinc-950" to="/atlas/foundation/locations">View published plans</Link></div></section></>
}

function LocationPlan({ plan }: { plan: AtlasFoundationLocation }) {
  const title = `${plan.identity.region} Regional Development Plan`
  const contextFields = Object.values(plan.regionalContext).filter((field): field is NonNullable<typeof field> => Boolean(field))
  return <article><FoundationNav />
    <section className="bg-zinc-950 text-white"><div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-32"><Link className="text-sm text-zinc-400 hover:text-white" to="/atlas/foundation/locations">← Regional Development Plans</Link><div className="mt-12 flex flex-wrap gap-2"><Badge>{plan.identity.status}</Badge><Badge>{plan.identity.atlasProjectConfirmed ? 'Atlas project confirmed' : 'Candidate area · project not confirmed'}</Badge></div><h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.04em] md:text-7xl">{title}</h1><p className="mt-6 text-lg text-zinc-300">{plan.identity.municipality} · {plan.identity.country}</p><p className="mt-7 max-w-3xl text-xl leading-relaxed text-zinc-300">If Atlas develops infrastructure here, how could the investment contribute to the development of this specific area?</p></div></section>

    <PlanSection number="01" eyebrow="Region overview and local strengths" title="The regional starting point."><VerifiedFields fields={contextFields} /><SourceNote /></PlanSection>

    <PlanSection number="02" eyebrow="Regional opportunity" title="Understanding the area." intro="The plan starts with what already exists. It evaluates local capacity and priorities before recommending programmes rather than imposing a generic model."><FrameworkOrData configured={plan.regionalInputs.map(item => item.label)} framework={locationFramework.regionalInputs} /><TagList items={plan.priorities} empty="Regional programme priorities will be added after assessment." /></PlanSection>

    <PlanSection number="03" eyebrow="Project demand" title="Requirements, local capacity and development gaps." intro="Assessments are published only when project requirements and local evidence can be compared."><CapabilityTable rows={plan.capabilities} /><TagList items={plan.capabilities.length ? [] : [...locationFramework.projectCapabilities]} empty="" label={plan.capabilities.length ? undefined : 'Capabilities to assess'} /></PlanSection>

    <PlanSection number="04" eyebrow="Skills gap → training plan" title="Build training around evidenced demand." intro="Atlas Academy would prioritise existing local education institutions and connect identified gaps with relevant certification and employer pathways."><Flow items={['Local workforce + project requirements', 'Skills gap', 'Atlas Academy + education partners', 'Qualified workforce', 'Employment opportunities']} /><TagList items={plan.trainingPriorities} empty="Training priorities will be published only after local availability and project requirements are assessed." /></PlanSection>

    <PlanSection number="05" eyebrow="Local employment plan" title="Separate short-term demand from long-term careers."><div className="grid gap-px border border-zinc-300 bg-zinc-300 md:grid-cols-2"><CopyCard title="Construction" copy={plan.employment.construction} /><CopyCard title="Operations" copy={plan.employment.operations} /><CopyCard title="Supply chain" copy={plan.employment.supplyChain} /><CopyCard title="Wider economy" copy={plan.employment.widerEconomy} /></div><MetricGrid metrics={plan.employment.estimates} /></PlanSection>

    <PlanSection number="06" eyebrow="Local supplier map" title="Help regional businesses compete." intro="The plan maps potential suppliers against contractor requirements, then identifies qualification or capability gaps. It does not guarantee procurement."><Flow items={['Existing local companies', 'Atlas / contractor requirements', 'Qualification or capability gaps', 'Supplier development', 'Tender opportunities']} /><TagList label="Categories to map" items={plan.supplierCategories.length ? plan.supplierCategories : [...locationFramework.supplierCategories]} /></PlanSection>

    <PlanSection number="07" eyebrow="Education partnership plan" title="Potential education partners." intro="Institutions remain potential partners until collaboration is confirmed. Each record requires a capability, possible programme, status and next action."><EducationTable rows={plan.educationProspects} /><TagList items={plan.educationProspects.length ? [] : [...locationFramework.educationTypes]} label={plan.educationProspects.length ? undefined : 'Institution types to map'} /></PlanSection>

    <PlanSection number="08" eyebrow="Action plan" title="Turn analysis into accountable next steps."><ActionTable rows={plan.actions} /></PlanSection>

    <PlanSection number="09" eyebrow="Regional development dashboard" title="Data will be published as the programme develops." intro="Every quantitative indicator requires a period, source and verification status. Unsupported values are never displayed."><MetricGrid metrics={plan.metrics} /><TagList items={plan.metrics.length ? [] : [...locationFramework.metrics]} label={plan.metrics.length ? undefined : 'Indicators intended for future reporting'} /></PlanSection>

    <PlanSection number="10" eyebrow="Business development" title="Growing the economic ecosystem" intro="Atlas and local institutions could explore realistic opportunities enabled by infrastructure, skills and supplier capacity. The plan does not claim these industries will locate in the region."><TagList items={plan.businessOpportunities.length ? plan.businessOpportunities : [...locationFramework.businessOpportunities]} label="Opportunities to assess" /></PlanSection>

    <PlanSection number="11" eyebrow="Complementary investment" title="Use the anchor investment to strengthen the local proposition." intro="Complementary investment is a development objective, not a guaranteed outcome."><Flow items={['Atlas infrastructure', 'Power + connectivity + investment', 'Skills + suppliers + services', 'Stronger local ecosystem', 'Potential complementary investment']} /></PlanSection>

    <PlanSection number="12" eyebrow="Project phase roadmap" title="A programme that advances with the project."><div className="grid gap-3 md:grid-cols-3">{phases.map(([phase, copy], i) => <article className="border-t-2 border-zinc-950 pt-5" key={phase}><span className="text-xs text-amber-700">0{i + 1}</span><h3 className="mt-6 font-semibold">{phase}</h3><p className="mt-2 text-sm text-zinc-600">{copy}</p></article>)}</div></PlanSection>

    <PlanSection number="13" eyebrow="Municipality view" title="What this means for the region"><div className="grid gap-px border border-zinc-300 bg-zinc-300 md:grid-cols-5">{municipalityView.map(([title, copy]) => <CopyCard key={title} title={title} copy={copy} />)}</div></PlanSection>

    <section className="bg-amber-300"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28"><p className="text-xs font-bold uppercase tracking-[.18em]">Location development model</p><Flow items={['Local conditions', 'Atlas infrastructure investment', 'Workforce requirements', 'Training', 'Local procurement', 'Employment', 'Business development', 'Complementary investment', 'Long-term regional development']} /><div className="mt-10 flex flex-col gap-3 sm:flex-row"><a className="inline-flex min-h-12 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white" href={plan.ctas.partnership}>Discuss the regional plan</a><a className="inline-flex min-h-12 items-center justify-center border border-zinc-950 px-6 text-sm font-semibold" href={plan.ctas.project}>Review the Atlas project</a></div></div></section>
  </article>
}

function PlanSection({ number, eyebrow, title, intro, children }: { number: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode }) {
  return <section className="border-t border-zinc-200"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28"><p className="text-xs font-bold uppercase tracking-[.18em] text-zinc-500">{number} · {eyebrow}</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>{intro && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600">{intro}</p>}<div className="mt-12">{children}</div></div></section>
}
function Badge({ children }: { children: React.ReactNode }) { return <span className="border border-zinc-600 px-3 py-2 text-xs font-bold uppercase tracking-[.12em]">{children}</span> }
function Empty({ children }: { children: React.ReactNode }) { return <p className="mt-8 border-l-2 border-amber-500 pl-5 text-zinc-600">{children}</p> }
function SourceNote() { return <p className="mt-6 text-sm text-zinc-500">Only sourced fields with an explicit verification state are displayed.</p> }
function VerifiedFields({ fields }: { fields: { label: string; value: string; source?: string; verification: VerificationStatus }[] }) { return fields.length ? <dl className="grid gap-px border border-zinc-300 bg-zinc-300 md:grid-cols-2">{fields.map(field => <div className="bg-white p-5" key={field.label}><dt className="text-xs uppercase tracking-wider text-zinc-500">{field.label}</dt><dd className="mt-3 font-semibold">{field.value}</dd><Verification status={field.verification} source={field.source} /></div>)}</dl> : <Empty>Verified regional context has not yet been published.</Empty> }
function Verification({ status, source }: { status: VerificationStatus; source?: string }) { return <p className="mt-3 text-xs text-zinc-500">{status}{source ? ` · ${source}` : ''}</p> }
function FrameworkOrData({ configured, framework }: { configured: string[]; framework: readonly string[] }) { return <TagList label={configured.length ? 'Verified inputs' : 'Inputs to assess'} items={configured.length ? configured : [...framework]} /> }
function TagList({ items, label, empty = 'Verified information has not yet been published.' }: { items: string[]; label?: string; empty?: string }) { return <div className="mt-8">{label && <h3 className="mb-4 text-sm font-bold uppercase tracking-[.14em] text-zinc-500">{label}</h3>}{items.length ? <ul className="flex flex-wrap gap-2">{items.map(item => <li className="border border-zinc-300 px-3 py-2 text-sm" key={item}>{item}</li>)}</ul> : empty && <Empty>{empty}</Empty>}</div> }
function Flow({ items }: { items: string[] }) { return <ol aria-label={items.join(' to ')} className="grid gap-px border border-zinc-400 bg-zinc-400 sm:grid-cols-2 lg:flex">{items.map((item, i) => <li className="flex min-h-28 flex-col justify-between bg-white p-4 text-zinc-950 lg:min-w-0 lg:flex-1" key={item}><span className="text-xs text-amber-700">{String(i + 1).padStart(2, '0')}</span><strong className="text-sm">{item}</strong></li>)}</ol> }
function CopyCard({ title, copy }: { title: string; copy: string }) { return <article className="bg-white p-6"><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600">{copy || 'To be defined from verified project and regional evidence.'}</p></article> }
function CapabilityTable({ rows }: { rows: AtlasFoundationLocation['capabilities'] }) { if (!rows.length) return <Empty>No capability assessment has been published.</Empty>; return <Table headers={['Capability', 'Project requirement', 'Local availability', 'Development gap', 'Verification']} rows={rows.map(row => [row.capability, row.projectRequirement, row.localAvailability || 'Not assessed', row.developmentGap || 'Not assessed', `${row.verification}${row.source ? ` · ${row.source}` : ''}`])} /> }
function EducationTable({ rows }: { rows: AtlasFoundationLocation['educationProspects'] }) { if (!rows.length) return <Empty>No institutions are displayed as potential or confirmed partners.</Empty>; return <Table headers={['Institution', 'Relevant capabilities', 'Potential collaboration', 'Status', 'Next action']} rows={rows.map(row => [row.institution, row.capabilities, row.potentialCollaboration, row.status, row.nextAction])} /> }
function ActionTable({ rows }: { rows: AtlasFoundationLocation['actions'] }) { if (!rows.length) return <Empty>No actions have been published. New actions begin as “To assess”; none are prepopulated as completed.</Empty>; return <Table headers={['Action', 'Partner type', 'Phase', 'Status', 'Next step']} rows={rows.map(row => [row.action, row.partnerType, row.phase, row.status, row.nextStep])} /> }
function Table({ headers, rows }: { headers: string[]; rows: string[][] }) { return <><div className="grid gap-3 md:hidden">{rows.map((row, i) => <dl className="border border-zinc-300 bg-white p-5" key={i}>{row.map((cell, j) => <div className="border-t border-zinc-200 py-3 first:border-0 first:pt-0" key={headers[j]}><dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">{headers[j]}</dt><dd className="mt-1 text-sm text-zinc-700">{cell}</dd></div>)}</dl>)}</div><div className="hidden overflow-x-auto border border-zinc-300 md:block"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-zinc-950 text-white"><tr>{headers.map(header => <th className="p-4" scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr className="border-t border-zinc-200" key={i}>{row.map((cell, j) => <td className="p-4 align-top text-zinc-600" key={j}>{cell}</td>)}</tr>)}</tbody></table></div></> }
function MetricGrid({ metrics }: { metrics: AtlasFoundationLocation['metrics'] }) { const verified = metrics.filter(metric => metric.data?.verification === 'Verified'); if (!verified.length) return <Empty>Data will be published as the programme develops.</Empty>; return <dl className="grid gap-px border border-zinc-300 bg-zinc-300 sm:grid-cols-2 lg:grid-cols-3">{verified.map(metric => <div className="bg-white p-6" key={metric.label}><dt className="text-xs uppercase tracking-wider text-zinc-500">{metric.label}</dt><dd className="mt-5 text-2xl font-semibold">{metric.data?.value}</dd><dd className="mt-3 text-xs text-zinc-500">{metric.data?.period} · {metric.data?.source} · Verified</dd></div>)}</dl> }
