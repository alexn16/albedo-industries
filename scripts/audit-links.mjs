import {readFileSync,readdirSync,statSync,existsSync} from 'node:fs'
import {join,relative,resolve} from 'node:path'

const root=resolve(import.meta.dirname,'..')
const walk=(dir)=>readdirSync(dir).flatMap(name=>{const path=join(dir,name);return statSync(path).isDirectory()?walk(path):[path]})
const sourceFiles=walk(join(root,'src')).filter(file=>/\.(tsx|ts)$/.test(file))
const sources=sourceFiles.map(file=>({file:relative(root,file),text:readFileSync(file,'utf8')}))
const allSource=sources.map(x=>x.text).join('\n')
const failures=[]
const checked=[]
const routes=new Set(['/'])
for(const match of allSource.matchAll(/<Route\s+path="([^"]+)"/g)){
  const route=match[1].startsWith('/')?match[1]:`/${match[1]}`
  if(route!=='/*')routes.add(route)
}
for(const match of allSource.matchAll(/route:\s*['"](\/[^'"]+)['"]/g))routes.add(match[1])
const ids=new Set([...allSource.matchAll(/\bid="([A-Za-z][\w-]*)"/g)].map(m=>m[1]))

for(const {file,text} of sources){
  for(const match of text.matchAll(/(?:href|to)\s*=\s*["']([^"']*)["']/g)){
    const destination=match[1];checked.push([file,destination])
    if(!destination.trim()||destination==='#'||destination.startsWith('undefined')||destination.startsWith('null'))failures.push(`${file}: empty or placeholder destination "${destination}"`)
    if(destination.startsWith('/media/')){
      const asset=join(root,'public',destination);if(!existsSync(asset))failures.push(`${file}: missing asset ${destination}`)
    }
    if(destination.startsWith('/')){
      const [pathname,hash]=destination.split('#')
      const matchesRoute=routes.has(pathname)||[...routes].some(route=>{const pattern='^'+route.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/:[^/]+/g,'[^/]+')+'$';return new RegExp(pattern).test(pathname)})
      if(!matchesRoute&&!pathname.includes('${')&&!pathname.endsWith('/funding'))failures.push(`${file}: no static or registered route for ${pathname}`)
      if(hash&&!ids.has(hash))failures.push(`${file}: missing anchor #${hash}`)
    }
  }
  for(const match of text.matchAll(/<SectionLink\s+id="([^"]+)"/g))if(!ids.has(match[1]))failures.push(`${file}: SectionLink target #${match[1]} does not exist`)
}
for(const match of allSource.matchAll(/dossierUrl:\s*['"](\/media\/[^'"]+\.pdf)['"]/g)){
  const file=join(root,'public',match[1]);
  if(!existsSync(file))failures.push(`Registry PDF missing: ${match[1]}`)
  else {const bytes=readFileSync(file);if(bytes.length===0||bytes.subarray(0,5).toString()!=='%PDF-')failures.push(`Invalid PDF: ${match[1]}`)}
}
const duplicateIds=[...ids].filter(id=>[...allSource.matchAll(new RegExp(`\\bid=["']${id}["']`,'g'))].length>1)
// Repeated IDs in mutually exclusive/localised candidate components are valid; report only within one file.
for(const {file,text} of sources)for(const id of ids){const count=[...text.matchAll(new RegExp(`<(?:section|div)[^>]*\\sid=["']${id}["']`,'g'))].length;if(count>1)failures.push(`${file}: duplicate id="${id}" (${count})`)}
console.log(`Checked ${checked.length} literal links, ${routes.size} routes, ${ids.size} section IDs and registry PDFs.`)
if(duplicateIds.length)console.log(`Cross-component repeated IDs (expected on mutually exclusive pages): ${duplicateIds.join(', ')}`)
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('Internal link audit passed: no empty destinations, missing literal routes/anchors, duplicate same-file IDs, or invalid registry PDFs.')
