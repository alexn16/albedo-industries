import { Link } from 'react-router-dom'
import type { AtlasCandidateRegistryEntry } from '../../data/atlasCandidates'

export type AtlasMapStatus='active'|'research'|'closed'
type Location=Pick<AtlasCandidateRegistryEntry,'id'|'name'|'country'|'route'|'coordinates'|'map'>

const statusLabel:Record<AtlasMapStatus,string>={active:'Active development',research:'Research / screening',closed:'Closed / archived'}
const precisionCopy:Record<Location['coordinates']['precision'],string>={
 region:'Approximate regional context. No exact development parcel is represented.',
 municipality:'Approximate municipal context. No exact development parcel is represented.',
 site:'Approximate site context based on current public/project evidence.',
 parcel:'Parcel-level context supported by the current source record. A marker alone does not imply Atlas control.',
}
const googleMapsUrl=(location:Location)=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.map.searchQuery)}`

export function AtlasLocationMap({location,status='research',scale,gate}: {location:Location;status?:AtlasMapStatus;scale?:string;gate?:string}) {
 const {latitude,longitude,precision}=location.coordinates
 const span=precision==='region' ? 1.4 : precision==='municipality' ? 0.55 : precision==='site' ? 0.18 : 0.08
 const bbox=[longitude-span,latitude-span*.65,longitude+span,latitude+span*.65].join('%2C')
 const embed=`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude}%2C${longitude}`
 const placeJson={"@context":"https://schema.org","@type":"Place",name:`${location.name}, ${location.country}`,address:{"@type":"PostalAddress",addressRegion:location.map.region,addressCountry:location.country},geo:{"@type":"GeoCoordinates",latitude,longitude},additionalProperty:{"@type":"PropertyValue",name:'Coordinate precision',value:precision}}
 return <section id="location" aria-labelledby={`location-${location.id}`} className="border-y border-zinc-200 bg-zinc-50"><script type="application/ld+json">{JSON.stringify(placeJson)}</script>
  <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
   <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-amber-700">Development geography</p><h2 id={`location-${location.id}`} className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Location &amp; infrastructure context</h2></div><span className={`w-fit px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${status==='active'?'bg-emerald-800 text-white':status==='closed'?'bg-zinc-300 text-zinc-700':'bg-amber-200 text-amber-950'}`}>{statusLabel[status]}</span></div>
   <div className="mt-9 grid overflow-hidden border border-zinc-300 bg-white lg:grid-cols-[1.45fr_1fr]">
    <div className="relative min-h-80 bg-zinc-200"><iframe title={`Approximate map of ${location.name}`} src={embed} loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full border-0"/><noscript><p className="p-6">Interactive map unavailable. The readable location details remain alongside this panel.</p></noscript></div>
    <div className="p-6 md:p-8"><p className="text-2xl font-semibold">{location.name}, {location.map.region}, {location.country}</p><dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 text-sm"><Detail label="Country" value={location.country}/><Detail label="Region" value={location.map.region}/><Detail label="Municipality / corridor" value={location.map.municipality}/><Detail label="Coordinates" value={`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`}/><Detail label="Location precision" value={precision}/>{scale&&<Detail label="Scale under review" value={scale}/>}</dl>
     <p className="mt-6 border-l-2 border-amber-500 pl-4 text-sm font-medium leading-relaxed">{precisionCopy[precision]}</p><p className="mt-4 text-sm leading-relaxed text-zinc-600">{location.map.context}</p>
     <h3 className="mt-6 text-xs font-bold uppercase tracking-[.15em]">Nearby context supported by research</h3><ul className="mt-3 space-y-2 text-sm text-zinc-600">{location.map.nearbyContext.map(x=><li key={x}>— {x}</li>)}</ul>{gate&&<p className="mt-6 text-sm"><strong>Next gate:</strong> {gate}</p>}
     <a href={googleMapsUrl(location)} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-11 items-center bg-zinc-950 px-5 text-sm font-semibold text-white">Open in Google Maps ↗</a>
    </div>
   </div><p className="mt-3 text-xs text-zinc-500">Map © OpenStreetMap contributors. Marker shows approximate geographic context, not a parcel boundary, land right, grid allocation, permit or financing.</p>
  </div>
 </section>
}
function Detail({label,value}:{label:string;value:string}){return <div><dt className="text-[.65rem] font-bold uppercase tracking-[.13em] text-zinc-500">{label}</dt><dd className="mt-1 leading-relaxed">{value}</dd></div>}

export function AtlasFootprintMap({locations,statusFor}:{locations:AtlasCandidateRegistryEntry[];statusFor:(location:AtlasCandidateRegistryEntry)=>AtlasMapStatus}) {
 return <div className="grid overflow-hidden border border-zinc-300 bg-white lg:grid-cols-[1.5fr_1fr]"><div className="relative min-h-[25rem] overflow-hidden bg-[#dfe7df]" role="img" aria-label="World map showing published Project Atlas location context">
  <svg viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full" aria-hidden="true"><rect width="1000" height="500" fill="#e8eee9"/><g fill="#bac7ba" stroke="#9aaa9d" strokeWidth="2"><path d="M55 98l140-63 155 35 42 75-67 35-35 72-84 15-38-67-96-24z"/><path d="M265 280l78 8 42 67-40 125-52-60-20-78z"/><path d="M420 88l85-42 98 20 32 38 135-25 158 55-26 88-111 22-55-34-59 41-59-44-72 14-70-55z"/><path d="M486 224l118 12 79 78-63 143-78-34-45-105z"/><path d="M796 336l111-20 63 66-67 65-101-34z"/></g><g stroke="#ffffff" strokeOpacity=".55">{[125,250,375].map(y=><line key={y} x1="0" x2="1000" y1={y} y2={y}/>)}{[250,500,750].map(x=><line key={x} x1={x} x2={x} y1="0" y2="500"/>)}</g></svg>
  {locations.map(location=>{const x=(location.coordinates.longitude+180)/360*100,y=(90-location.coordinates.latitude)/180*100,status=statusFor(location);return <Link key={location.id} to={location.route} aria-label={`${location.name}, ${location.country}: ${statusLabel[status]}`} className="group absolute -translate-x-1/2 -translate-y-1/2" style={{left:`${x}%`,top:`${y}%`}}><span className={`block h-5 w-5 rounded-full border-4 border-white shadow-lg ${status==='active'?'bg-emerald-700':status==='closed'?'bg-zinc-500':'bg-amber-500'}`}/><span className="absolute left-1/2 top-6 z-10 hidden -translate-x-1/2 whitespace-nowrap bg-zinc-950 px-2 py-1 text-xs font-semibold text-white group-hover:block group-focus:block">{location.name}</span></Link>})}
 </div><div className="divide-y divide-zinc-200">{locations.map(location=>{const status=statusFor(location);return <Link to={location.route} key={location.id} className="block p-5 hover:bg-zinc-50"><div className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${status==='active'?'bg-emerald-700':status==='closed'?'bg-zinc-500':'bg-amber-500'}`}/><span className="text-[.65rem] font-bold uppercase tracking-wider text-zinc-500">{statusLabel[status]}</span></div><p className="mt-2 font-semibold">{location.name}, {location.country}</p><p className="mt-1 text-xs text-zinc-500">{location.id} · {location.coordinates.precision} context</p></Link>})}</div></div>
}
