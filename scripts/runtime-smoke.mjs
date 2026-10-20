import { spawn } from 'node:child_process'
const origin='http://127.0.0.1:4173'
const routes=['/','/atlas','/atlas/partners','/atlas/research','/infrastructure/spain/as-pontes','/infrastructure/portugal/sines','/infrastructure/finland/kouvola-kotka','/robotics','/orbital','/orbital/research','/display','/display/invest','/support','/fastsoftware','/projects','/projects/alb-parking','/projects/germet','/about','/privacy','/terms']
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4173','--strictPort'],{stdio:'ignore'})
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms))
try{
 let ready=false
 for(let i=0;i<30;i++){try{if((await fetch(origin)).ok){ready=true;break}}catch{}await sleep(200)}
 if(!ready)throw new Error('Preview server did not start')
 for(const route of routes){const response=await fetch(origin+(route==='/'?route:`${route}/`));if(!response.ok)throw new Error(`${route}: HTTP ${response.status}`);const html=await response.text();const checks=[['one H1',(html.match(/<h1[ >]/g)||[]).length===1],['title',/<title>[^<]+<\/title>/.test(html)],['description',/<meta name="description" content="[^"]+"/.test(html)],['canonical',html.includes(`rel="canonical" href="https://www.albedo-industries.com${route==='/'?'/':route}"`)],['structured data',html.includes('application/ld+json')]];for(const [name,pass] of checks)if(!pass)throw new Error(`${route}: missing ${name}`)}
 const robotics=await (await fetch(origin+'/robotics/')).text()
 for(const required of ['Industrial partnership &amp; pilot exploration','not a proprietary software development business','No site, equipment, partner or pilot date has been committed.','human oversight','Performance evaluation','/robotics','/support'])if(!robotics.includes(required))throw new Error(`Robotics prerender missing status or integration: ${required}`)
 const atlas=await (await fetch(origin+'/atlas/')).text()
 for(const required of ['Land ownership &amp; site control','Grid capacity &amp; connection','Fiber connectivity','Water &amp; cooling','Planning &amp; environment','Development budget','Capital requirements','Commercial demand','Development timetable','an estimate, a preliminary assessment or unverified'])if(!atlas.includes(required))throw new Error(`Atlas readiness content missing: ${required}`)
 for(const [route,cta] of [['/robotics/','Become an industrial partner'],['/orbital/','Collaborate on the first demonstrator'],['/display/','Help build the first prototype'],['/fastsoftware/','Explore a workflow demo'],['/support/','Nothing is sent when you select this button.']]){
  const html=await (await fetch(origin+route)).text()
  if(!html.includes(cta))throw new Error(`${route}: commercial CTA missing from static HTML`)
 }
 const sitemap=await (await fetch(origin+'/sitemap.xml')).text()
 if(!sitemap.includes('https://www.albedo-industries.com/robotics'))throw new Error('Robotics missing from production sitemap')
 for(const asset of ['/sitemap.xml','/robots.txt','/robotics-social.png','/media/robotics/autonomous-construction-640.webp','/media/albedo-display/display-concept-640.webp','/media/albedo-industries/atlas-as-pontes-gate-1-research-report.pdf'])if(!(await fetch(origin+asset)).ok)throw new Error(`Missing public asset: ${asset}`)
 console.log(`Runtime HTTP smoke passed for ${routes.length} representative routes and public assets.`)
}finally{server.kill('SIGTERM')}
