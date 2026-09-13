import { autonomousComputeNode as experiment } from '../src/data/orbitalExperiments.ts'
import { acquisitionPlan, candidateComparisonCriteria, computeCandidates, dataEntities, designReview, faultMatrix, gateA, measurementArchitecture, minimumBaselineCondition, requirements, safeEnvelope, stageABom, stageABudget, workloads } from '../src/data/orbitalExperimentEngineering.ts'
import { orbitalSources } from '../src/data/orbitalResearch.ts'
import { readFileSync } from 'node:fs'
const failures=[];const sourceIds=new Set(orbitalSources.map(x=>x.id));const page=readFileSync('src/pages/OrbitalExperiment.tsx','utf8');const app=readFileSync('src/App.tsx','utf8')
if(!experiment.status)failures.push('experiment status missing');if(experiment.status!=='EXPERIMENT DESIGN')failures.push('experiment is no longer safely design-stage')
if(!experiment.researchQuestion)failures.push('research question missing');if(!experiment.metrics.length)failures.push('metrics missing')
for(const metric of experiment.metrics){if(metric.status==='MEASURED'&&metric.value===undefined)failures.push(`${metric.id}: measured metric has no value`);if(metric.status==='PLANNED'&&metric.value!==undefined)failures.push(`${metric.id}: planned metric contains a fabricated value`)}
if(experiment.results.length)failures.push('result records exist before experiment execution review')
if(!experiment.stages.some(x=>x.id==='A'&&x.status==='IMMEDIATE DESIGN')||!experiment.stages.some(x=>x.id==='B'&&x.status==='CONDITIONAL FUTURE'))failures.push('Stage A/B distinction missing')
if(!/^\d{4}-\d{2}-\d{2}$/.test(experiment.lastReviewed)||Number.isNaN(Date.parse(experiment.lastReviewed)))failures.push('invalid review date')
for(const id of experiment.sourceIds)if(!sourceIds.has(id))failures.push(`missing source ${id}`)
if(!app.includes('path="orbital/experiment-01"'))failures.push('experiment route missing')
if(!computeCandidates.some(x=>x.decision.startsWith('RECOMMENDED BASELINE'))||!computeCandidates.some(x=>x.decision.startsWith('FALLBACK BASELINE')))failures.push('baseline or fallback recommendation missing')
if(!requirements.some(x=>x.priority==='MUST')||!workloads.length||!workloads.every(x=>x.validOutput))failures.push('requirements, workloads or valid-output definition missing')
if(!measurementArchitecture.watchdog||!faultMatrix.length||!safeEnvelope.length||!dataEntities.length||!minimumBaselineCondition||!gateA.dimensions.length||!designReview.length)failures.push('engineering package incomplete')
for(const item of stageABom){if(item.estimatedPrice!=='PRICE TO VERIFY'&&(!item.sourceUrl||item.availabilityChecked==='NOT CHECKED'))failures.push(`${item.component}: price lacks source/check`);if(item.procurementStatus!=='DO NOT ORDER')failures.push(`${item.component}: hardware marked orderable before review`)}
if(stageABudget.some(x=>!x.value.includes('CANNOT CALCULATE')))failures.push('budget published before price verification')
if(candidateComparisonCriteria.length<15||!acquisitionPlan.buyAfterReview.length||!acquisitionPlan.borrow.length||!acquisitionPlan.defer.length)failures.push('candidate comparison or make/buy/borrow plan incomplete')
for(const phrase of ['prototype built','flight booked','launch booked','ISS accepted','payload accepted','space-qualified','radiation-qualified','flight hardware complete','investor committed'])if(page.toLowerCase().includes(phrase.toLowerCase()))failures.push(`unsafe public claim: ${phrase}`)
if(/\$\s?\d[\d,.]*\s*(million|billion|m|bn)?/i.test(page))failures.push('unapproved funding amount found')
if(!page.includes('NOT YET ASSEMBLED')||!page.includes('NOT YET DESIGNED')||!page.includes('NOT SELECTED')||!page.includes('NOT BOOKED'))failures.push('required status safeguards missing')
failures.forEach(x=>console.error(`FAIL ${x}`));console.log(`Orbital experiment audit: ${experiment.metrics.length} planned metrics; ${experiment.workPackages.length} work packages; ${experiment.results.length} measured results; ${failures.length} failures.`);if(failures.length)process.exit(1)
