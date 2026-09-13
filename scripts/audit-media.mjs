import { existsSync, readFileSync } from 'node:fs'
const root='public/media/ALBEDO - INDUSTRIES/'
const media=[
  {file:'herovideo.mp4',minimum:0,active:false,removedBrokenPlaceholder:true},
  {file:'weryai_5bb6aefbba19268f1e7c90c34015e82f.mp4',minimum:3_000_000,active:true},
]
const failures=[]
for(const item of media){const path=root+item.file;if(item.removedBrokenPlaceholder){if(existsSync(path))failures.push(`${item.file}: invalid placeholder must remain removed`);console.log(`${item.file}: known broken placeholder removed; historical source requires approved restoration`);continue}let data;try{data=readFileSync(path)}catch{failures.push(`${item.file}: missing`);continue}if(data.length<item.minimum)failures.push(`${item.file}: below hero-specific sanity threshold (${data.length} bytes)`);for(const atom of ['ftyp','mdat','moov'])if(data.indexOf(atom)<0)failures.push(`${item.file}: missing ${atom} atom`);console.log(`${item.file}: ${data.length} bytes; active; moov ${data.indexOf('moov')<data.indexOf('mdat')?'before':'after'} mdat`)}
const home=readFileSync('src/pages/Home.tsx','utf8'),atlas=readFileSync('src/pages/InfrastructureEurope.tsx','utf8'),hero=readFileSync('src/components/HeroVideo.tsx','utf8')
const active=media.find(x=>x.active).file
for(const [name,source] of [['Home',home],['Atlas',atlas]]){if(!source.includes(active))failures.push(`${name}: active hero source missing`);if(!source.includes('HeroVideo'))failures.push(`${name}: shared guarded player missing`);if(!source.includes('bg-[radial-gradient'))failures.push(`${name}: static fallback missing`)}
if(home.includes('herovideo.mp4')||atlas.includes('herovideo.mp4'))failures.push('quarantined portrait asset is active')
for(const required of ['autoPlay','muted','loop','playsInline','preload="metadata"','aria-hidden="true"','saveData','prefers-reduced-motion','onError','hero-fallback.svg'])if(!hero.includes(required))failures.push(`HeroVideo missing ${required}`)
failures.forEach(x=>console.error(`FAIL ${x}`));console.log(`Hero media audit: ${media.length} accounted assets; ${failures.length} failures.`);if(failures.length)process.exit(1)
