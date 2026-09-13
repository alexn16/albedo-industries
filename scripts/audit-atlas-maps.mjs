import { readFileSync } from 'node:fs'

const registry=readFileSync('src/data/atlasCandidates.ts','utf8')
const component=readFileSync('src/components/atlas/AtlasLocationMap.tsx','utf8')
const pages=['AsPontesCandidatePage.tsx','ElBierzoCandidatePage.tsx','SinesCandidatePage.tsx','CanelonesCandidatePage.tsx'].map(file=>readFileSync(`src/pages/atlas/${file}`,'utf8'))
const failures=[]
const records=[...registry.matchAll(/id:'([^']+)'[\s\S]*?coordinates:\{latitude:([\d.-]+),longitude:([\d.-]+),precision:'([^']+)'\}[\s\S]*?map:\{searchQuery:'([^']+)'/g)]
for(const [,id,latRaw,lngRaw,precision,query] of records){
 const lat=Number(latRaw),lng=Number(lngRaw)
 if(lat < -90 || lat > 90)failures.push(`${id}: latitude out of range`)
 if(lng < -180 || lng > 180)failures.push(`${id}: longitude out of range`)
 if(!['region','municipality','site','parcel'].includes(precision))failures.push(`${id}: invalid precision`)
 if(!query.trim())failures.push(`${id}: empty Google Maps query`)
}
if(records.length!==5)failures.push(`expected 5 mapped research records; found ${records.length}`)
if(!component.includes('No exact development parcel is represented.'))failures.push('non-parcel precision safeguard missing')
if(!component.includes('https://www.google.com/maps/search/?api=1&query='))failures.push('stable Google Maps link missing')
if(!component.includes('loading="lazy"'))failures.push('map iframe is not lazy-loaded')
if(!component.includes('<noscript>'))failures.push('map fallback copy missing')
pages.forEach((page,index)=>{if(!page.includes('<AtlasLocationMap'))failures.push(`public opportunity page ${index+1} lacks shared map`)})
failures.forEach(message=>console.error(`FAIL ${message}`))
console.log(`Atlas map audit: ${records.length} records; ${pages.length} representative pages; ${failures.length} failures.`)
if(failures.length)process.exit(1)
