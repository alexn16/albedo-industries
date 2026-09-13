import { spawn } from 'node:child_process'
const origin='http://127.0.0.1:4173'
const routes=['/','/atlas','/atlas/partners','/atlas/research','/infrastructure/spain/as-pontes','/infrastructure/portugal/sines','/infrastructure/finland/kouvola-kotka','/orbital','/orbital/research','/display','/fastsoftware','/projects','/projects/alb-parking','/projects/germet','/about','/privacy','/terms']
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4173'],{stdio:'ignore'})
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms))
try{
 let ready=false
 for(let i=0;i<30;i++){try{if((await fetch(origin)).ok){ready=true;break}}catch{}await sleep(200)}
 if(!ready)throw new Error('Preview server did not start')
 for(const route of routes){const response=await fetch(origin+(route==='/'?route:`${route}/`));if(!response.ok)throw new Error(`${route}: HTTP ${response.status}`);const html=await response.text();const checks=[['one H1',(html.match(/<h1[ >]/g)||[]).length===1],['title',/<title>[^<]+<\/title>/.test(html)],['description',/<meta name="description" content="[^"]+"/.test(html)],['canonical',html.includes(`rel="canonical" href="https://www.albedo-industries.com${route==='/'?'/':route}"`)],['structured data',html.includes('application/ld+json')]];for(const [name,pass] of checks)if(!pass)throw new Error(`${route}: missing ${name}`)}
 for(const asset of ['/sitemap.xml','/robots.txt','/media/albedo-industries/atlas-as-pontes-gate-1-research-report.pdf'])if(!(await fetch(origin+asset)).ok)throw new Error(`Missing public asset: ${asset}`)
 console.log(`Runtime HTTP smoke passed for ${routes.length} representative routes and public assets.`)
}finally{server.kill('SIGTERM')}
