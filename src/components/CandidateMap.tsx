import { useMemo, useState } from 'react'
import type { InfrastructureCandidate } from '../data/infrastructureCandidates'

const precisionLabels = {
  region: 'region',
  municipality: 'municipio',
  site: 'emplazamiento',
  parcel: 'parcela',
} as const

const zoomByPrecision = { region: 7, municipality: 11, site: 14, parcel: 16 } as const

export default function CandidateMap({ candidate, compact = false }: { candidate: InfrastructureCandidate; compact?: boolean }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const precision = candidate.coordinates.precision
  const coordinates = `${candidate.coordinates.latitude.toFixed(4)}, ${candidate.coordinates.longitude.toFixed(4)}`
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${candidate.coordinates.latitude},${candidate.coordinates.longitude}`
  const embedUrl = useMemo(() => {
    const query = `${candidate.coordinates.latitude},${candidate.coordinates.longitude}`
    return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoomByPrecision[precision]}&output=embed`
  }, [candidate.coordinates.latitude, candidate.coordinates.longitude, precision])
  const height = compact ? 'h-56' : 'h-80 md:h-[28rem]'

  return <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm" aria-label={`Mapa de ${candidate.name}`}>
    <div className={`relative ${height} bg-zinc-950`}>
      {!loaded && !failed && <MapFallback candidate={candidate} coordinates={coordinates} mapsUrl={mapsUrl} loading />}
      {failed ? <MapFallback candidate={candidate} coordinates={coordinates} mapsUrl={mapsUrl} /> : <iframe title={`${candidate.name} — contexto ${precisionLabels[precision]}`} className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`} src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}
    </div>
    <div className="grid gap-3 border-t border-zinc-200 bg-white p-4 text-sm sm:grid-cols-[1fr_auto] sm:items-center">
      <div><p className="font-medium">Precisión: <span className="capitalize">{precisionLabels[precision]}</span></p><p className="mt-1 text-zinc-600">{candidate.map.context}</p><p className="mt-1 text-xs text-zinc-500">Coordenadas: {coordinates}. El marcador indica contexto territorial; no identifica una parcela salvo que se indique expresamente.</p></div>
      <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-4 font-medium hover:border-zinc-950">Abrir en Google Maps<span className="sr-only"> (se abre en una pestaña nueva)</span></a>
    </div>
  </section>
}

function MapFallback({ candidate, coordinates, mapsUrl, loading = false }: { candidate: InfrastructureCandidate; coordinates: string; mapsUrl: string; loading?: boolean }) {
  return <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-zinc-950 p-6 text-white">
    <div aria-hidden="true" className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
    <div className="relative max-w-md rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
      <span className={`mx-auto mb-4 block size-3 rounded-full bg-amber-300 ring-8 ring-amber-300/15 ${loading ? 'animate-pulse' : ''}`} />
      <p className="text-lg font-semibold">{loading ? 'Cargando mapa…' : candidate.name}</p>
      <p className="mt-2 text-sm text-zinc-300">{loading ? 'Preparando el contexto territorial.' : 'El mapa no se ha podido cargar. Puedes abrir la ubicación directamente en Google Maps.'}</p>
      <p className="mt-3 text-xs text-zinc-400">{coordinates} · precisión {precisionLabels[candidate.coordinates.precision]}</p>
      {!loading && <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white px-4 text-sm font-semibold text-zinc-950">Abrir en Google Maps</a>}
    </div>
  </div>
}
