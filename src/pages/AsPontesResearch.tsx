import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CandidateMap from '../components/CandidateMap'
import ComputeInterestForm from '../components/ComputeInterestForm'
import { EvidenceBadge, ResearchIndicators } from '../components/ResearchIndicators'
import { candidateByRoute } from '../data/infrastructureCandidates'

const candidate = candidateByRoute.get('/infrastructure/spain/as-pontes')!
const tag = { id: candidate.id, slug: candidate.slug, name: candidate.name, country: candidate.country, countryCode: candidate.countryCode }

const evidence = [
  ['Industrial context', 'Former large-scale power and mining complex', 'verified' as const],
  ['Transmission infrastructure', '400 kV assets exist in the area', 'verified' as const],
  ['Reindustrialisation', 'A state-backed just-transition process is active', 'verified' as const],
  ['Water bodies', 'The mine lake and regional reservoirs exist', 'verified' as const],
  ['Demand-side grid capacity', 'No project-specific large-load capacity has been confirmed', 'evidence_required' as const],
  ['Fibre diversity', 'No site-specific physical route evidence has been obtained', 'evidence_required' as const],
  ['Site control', 'No parcel or land right has been secured', 'evidence_required' as const],
]

const unknowns = [
  'Firm demand-side capacity and an indicative connection timeline',
  'The applicable transmission or distribution connection route',
  'Candidate parcels, ownership, zoning and site-control path',
  'Physical fibre routes, carrier capacity and genuine route diversity',
  'Water abstraction, cooling, discharge and drought constraints',
  'Parcel-specific flood, wildfire, contamination and geotechnical conditions',
  'Qualified customer demand for capacity in Galicia',
]

const disqualifiers = [
  'No viable grid connection for a large demand load',
  'No controllable and compliant parcel',
  'Insufficient fibre resilience',
  'Environmental restrictions affecting water or discharge',
  'A grid or permitting timetable that is commercially unusable',
  'Insufficient customer demand for the location',
]

const actions = [
  ['1', 'Submit a formal demand-capacity enquiry to Red Eléctrica and confirm the applicable DSO', 'Written capacity and process response'],
  ['2', 'Identify candidate parcels, ownership, cadastral status and zoning', 'Parcel shortlist and land-control path'],
  ['3', 'Review the PXOM and request a written planning interpretation', 'Data-centre planning compatibility'],
  ['4', 'Send route and capacity RFIs to fibre carriers and infrastructure owners', 'Route, diversity, capacity and lead-time evidence'],
  ['5', 'Request an early water and discharge consultation', 'Feasible cooling-water envelope'],
  ['6', 'Obtain climate, flood, wildfire and environmental evidence', 'Parcel-level hazard screen'],
  ['7', 'Begin targeted customer discovery for Galicia', 'Qualified demand, timing, capacity and LOI willingness'],
]

export default function AsPontesResearch() {
  useEffect(() => {
    const old = document.title
    document.title = 'As Pontes AI Infrastructure Research | Albedo Industries'
    return () => { document.title = old }
  }, [])

  return <div>
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Link to="/infrastructure/europe" className="text-sm text-zinc-400 hover:text-white">← Europe research</Link>
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">Research candidate — no investment offering</span>
          <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">Gate 1 — desktop screening</span>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[.2em] text-zinc-500">EU-ES-01 · Galicia, Spain</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">As Pontes AI infrastructure research</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">A credible brownfield and energy-transition candidate whose viability depends first on written evidence of demand-side grid capacity.</p>
        <p className="mt-6 max-w-3xl border-l border-amber-300 pl-4 text-sm text-zinc-300">No site, parcel, grid capacity, permit, financing, customer commitment or construction programme has been secured.</p>
        <div className="mt-10 max-w-3xl"><ResearchIndicators candidate={candidate}/></div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/reports/atlas-as-pontes-research-report-v1.pdf" download className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-medium text-zinc-950">Download full research report</a>
          <a href="#next-actions" className="inline-flex min-h-11 items-center rounded-full border border-zinc-700 px-5 text-sm">View next actions</a>
        </div>
        <p className="mt-5 text-xs text-zinc-500">Research version 1 · reviewed 4 August 2026</p>
      </div>
    </section>

    <Section eyebrow="Current Atlas conclusion" title="Continue researching — do not advance">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_.6fr]">
        <div className="space-y-4 text-sm leading-relaxed text-zinc-600">
          <p>As Pontes has credible structural reasons to remain under investigation: a former large power-generation complex, existing 400 kV infrastructure, industrial land, a state-backed just-transition process, regional water resources and a mild Atlantic climate.</p>
          <p>However, Atlas has found no project-specific evidence confirming that a large data-centre load can obtain demand-side grid capacity at the location.</p>
          <p className="font-medium text-zinc-950">The project cannot advance until this question is resolved.</p>
        </div>
        <aside className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-amber-800">Main blocker</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">Nearby transmission infrastructure and generation-access processes do not demonstrate available capacity, acceptable cost or an energisation date for a large electricity consumer.</p>
        </aside>
      </div>
    </Section>

    <Section eyebrow="Regional context" title="Map precision is part of the evidence" soft><CandidateMap candidate={candidate}/></Section>

    <Section eyebrow="Evidence summary" title="What is known — and what is not">
      <div className="grid gap-4 lg:grid-cols-2">{evidence.map(([area, finding, state]) => <article key={area} className="rounded-xl border border-zinc-200 p-6"><div className="flex items-start justify-between gap-4"><h3 className="font-semibold">{area}</h3><EvidenceBadge state={state}/></div><p className="mt-4 text-sm leading-relaxed text-zinc-600">{finding}</p></article>)}</div>
    </Section>

    <section className="border-y border-amber-200 bg-amber-50"><div className="mx-auto max-w-6xl px-6 py-16"><p className="eyebrow text-amber-800">Critical unknowns</p><h2 className="text-3xl font-semibold">Evidence required before advancement</h2><ul className="mt-8 grid gap-3 md:grid-cols-2">{unknowns.map(item => <li key={item} className="rounded-lg border border-amber-200 bg-white p-4 text-sm">— {item}</li>)}</ul></div></section>

    <Section eyebrow="Potential disqualifiers" title="What could end the thesis" dark><div className="grid gap-4 md:grid-cols-2">{disqualifiers.map(item => <article key={item} className="rounded-xl border border-zinc-800 p-5 text-sm text-zinc-300">{item}</article>)}</div></Section>

    <Section eyebrow="Gate decision" title="A binary condition for Gate 2">
      <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-600">
        <p><strong className="text-zinc-950">Decision:</strong> Continue researching. Do not advance. Do not reject.</p>
        <p>Atlas should require written, project-relevant evidence of a credible demand connection pathway before materially increasing expenditure.</p>
        <blockquote className="border-l-2 border-zinc-950 pl-5 text-lg text-zinc-950">A practical research threshold is a pathway toward at least 100 MW with a defined indicative delivery horizon.</blockquote>
        <p>This is a research filter, not a capacity claim. The final project scale may change after grid and customer evidence is obtained.</p>
      </div>
    </Section>

    <div id="next-actions"><Section eyebrow="Immediate next actions" title="What Atlas should do now" soft>
      <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-zinc-950 text-white"><tr><th className="p-4">Priority</th><th className="p-4">Action</th><th className="p-4">Required output</th></tr></thead><tbody>{actions.map(([priority, action, output]) => <tr key={priority} className="border-t border-zinc-200"><td className="p-4 font-medium">{priority}</td><td className="p-4 text-zinc-700">{action}</td><td className="p-4 text-zinc-500">{output}</td></tr>)}</tbody></table></div>
    </Section></div>

    <Section eyebrow="Final takeaway" title="Grid evidence comes first" dark><p className="max-w-3xl text-lg leading-relaxed text-zinc-300">Atlas currently has insufficient evidence to recommend development. The next decisive objective is to determine whether demand-side grid capacity exists. Until that question is answered, all other work is secondary.</p></Section>

    <section id="candidate-demand" className="border-t border-zinc-200"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28"><p className="eyebrow">Candidate demand validation</p><h2 className="section-title">Register non-binding capacity interest</h2><p className="section-copy">Your response is research input, not a capacity reservation or service order.</p><ComputeInterestForm kind="capacity" candidate={tag}/></div></section>
    <section className="border-t border-zinc-200 bg-zinc-50"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28"><p className="eyebrow">Evidence and partners</p><h2 className="section-title">Contribute land, energy, fibre, engineering or capital context</h2><p className="section-copy">Partner interest is non-binding and does not imply selection, procurement or an investment offering.</p><ComputeInterestForm kind="investor" candidate={tag}/></div></section>
  </div>
}

function Section({ eyebrow, title, children, soft = false, dark = false }: { eyebrow: string; title: string; children: React.ReactNode; soft?: boolean; dark?: boolean }) {
  return <section className={`border-t ${dark ? 'border-zinc-800 bg-zinc-950 text-white' : soft ? 'border-zinc-200 bg-zinc-50' : 'border-zinc-200'}`}><div className="mx-auto max-w-6xl px-6 py-20 md:py-28"><p className={`eyebrow ${dark ? 'text-zinc-500' : ''}`}>{eyebrow}</p><h2 className="section-title">{title}</h2>{children}</div></section>
}
