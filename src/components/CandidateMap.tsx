import type { InfrastructureCandidate } from '../data/infrastructureCandidates'

export default function CandidateMap({ candidate, compact = false }: { candidate: InfrastructureCandidate; compact?: boolean }) {
  const apiKey = (import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY as string | undefined)?.trim()
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(candidate.map.searchQuery)}`
  const embedUrl = apiKey ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(candidate.map.searchQuery)}&zoom=${candidate.coordinates.precision === 'municipality' ? 10 : 7}` : ''
  return <div className="overflow-hidden rounded-xl border border-zinc-300 bg-zinc-100">
    {embedUrl ? <iframe title={`${candidate.name} regional map`} className={compact ? 'h-52 w-full' : 'h-80 w-full md:h-[28rem]'} src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <div className={`relative flex ${compact ? 'h-52' : 'h-80 md:h-[28rem]'} items-center justify-center overflow-hidden bg-zinc-950 text-white`}>
      <div aria-hidden="true" className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(#71717a 1px, transparent 1px), linear-gradient(90deg, #71717a 1px, transparent 1px)',backgroundSize:'32px 32px'}} />
      <div className="relative max-w-md px-6 text-center"><span className="mx-auto mb-4 block size-3 rounded-full bg-amber-300 ring-8 ring-amber-300/15"/><p className="font-medium">{candidate.name} · regional context</p><p className="mt-2 text-sm text-zinc-400">Atlas schematic fallback — not a parcel map</p></div>
    </div>}
    <div className="flex flex-col gap-3 bg-white p-4 text-sm sm:flex-row sm:items-center sm:justify-between"><div><p className="font-medium capitalize">Precision: {candidate.coordinates.precision}</p><p className="mt-1 text-zinc-500">{candidate.map.context}</p></div><a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 shrink-0 items-center font-medium underline underline-offset-4">Open in Google Maps<span className="sr-only"> (opens in a new tab)</span></a></div>
  </div>
}
