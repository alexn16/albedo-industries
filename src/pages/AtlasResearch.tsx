import { Link } from 'react-router-dom'
import { atlasResearchRecords } from '../data/atlasResearchIndex'
import { useAtlasMetadata } from '../hooks/useAtlasMetadata'

export default function AtlasResearch() {
  useAtlasMetadata({
    name: 'Research Library', country: 'International', route: '/atlas/research',
    title: 'Project Atlas — Research Library | ALBEDO Industries',
    description: 'Explore Project Atlas research into power, grid infrastructure, land, fibre, cooling, permitting and execution constraints in selected international markets.',
  })
  return <div>
    <section className="bg-zinc-950 text-white"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Link to="/atlas" className="inline-flex min-h-11 items-center text-sm text-zinc-400 hover:text-white">← Project Atlas</Link>
      <p className="mt-8 eyebrow text-amber-200">ATLAS RESEARCH LIBRARY</p>
      <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">Research before development.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">Atlas studies power systems, grid infrastructure, land, fibre, cooling, permitting and execution constraints before an opportunity enters active development.</p>
      <p className="mt-6 max-w-3xl border-l border-amber-300 pl-4 text-sm leading-relaxed text-zinc-400">Positive, paused and closed studies remain available. A published study is evidence of research—not site control, allocated power or a development commitment.</p>
    </div></section>
    <section className="border-t border-zinc-200"><div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-col gap-3 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Research Universe</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">All published candidate records</h2></div><p className="max-w-md text-sm leading-relaxed text-zinc-500">Each candidate page retains its evidence, risks, open questions, Gate decision, sources and available dossier.</p></div>
      <div className="divide-y divide-zinc-200">{atlasResearchRecords.map(record => <article className="grid gap-4 py-7 md:grid-cols-[8rem_1fr_12rem]" key={record.id}>
        <div><p className="text-xs font-bold tracking-wider text-zinc-500">{record.id}</p><p className="mt-2 text-sm">{record.country}</p></div>
        <div><div className="flex flex-wrap items-center gap-2"><h3 className="text-xl font-semibold">{record.name}</h3><span className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs">{record.gate}</span><span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700">{record.status}</span></div><p className="mt-3 text-sm leading-relaxed text-zinc-600">{record.summary}</p><p className="mt-3 text-sm"><strong>Primary unresolved condition:</strong> {record.blocker}</p></div>
        <div className="flex flex-col items-start gap-3 md:items-end"><p className="text-xs text-zinc-500">Reviewed {record.reviewed}</p><Link to={record.route} className="inline-flex min-h-11 items-center font-semibold underline decoration-amber-400 underline-offset-4">Review public research →</Link>{record.dossierUrl && <a href={record.dossierUrl} className="inline-flex min-h-11 items-center text-sm text-zinc-600 underline underline-offset-4">Open dossier PDF</a>}</div>
      </article>)}</div>
    </div></section>
  </div>
}
