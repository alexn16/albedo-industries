import type { AtlasGateStatus } from '../components/atlas/AtlasPrimitives'

/** Lightweight registry for Atlas routing, maps and index cards. Research content belongs to each candidate page. */
export interface AtlasCandidateRegistryEntry {
  id:string
  route:string
  country:string
  name:string
  gate:string
  recommendation:AtlasGateStatus
  researchStatus:string
  researchDate:string
  summary:string
  primaryBlocker:string
  dossierUrl:string
  coordinates:{latitude:number;longitude:number}
}
export const atlasCandidateRegistry:AtlasCandidateRegistryEntry[]=[
  {id:'EU-ES-01',route:'/infrastructure/spain/as-pontes',country:'Spain',name:'As Pontes',gate:'Gate 1',recommendation:'CONTINUE RESEARCHING',researchStatus:'Published research · active validation',researchDate:'August 2026',summary:'Post-coal industrial and energy thesis with access still to prove.',primaryBlocker:'Demand-side grid capacity unverified.',dossierUrl:'/media/albedo-industries/atlas-as-pontes-gate-1-research-report.pdf',coordinates:{latitude:43.45,longitude:-7.85}},
  {id:'EU-PT-01',route:'/infrastructure/portugal/sines',country:'Portugal',name:'Sines',gate:'Gate 1',recommendation:'CONDITIONAL PASS',researchStatus:'Dossier complete · capped validation active',researchDate:'10 August 2026',summary:'Strategically strong Atlantic infrastructure region; development access remains unresolved.',primaryBlocker:'Residual demand-side grid capacity unknown.',dossierUrl:'/media/albedo-industries/Project_Atlas_Sines_Gate1_Investment_Dossier__EN.pdf',coordinates:{latitude:37.96,longitude:-8.87}},
  {id:'EU-FI-02',route:'/infrastructure/finland/kouvola-kotka',country:'Finland',name:'Kouvola–Kotka Corridor',gate:'Gate 1',recommendation:'FAIL',researchStatus:'Research complete · active origination closed',researchDate:'August 2026',summary:'Excellent data-centre geography; poor Atlas origination opportunity.',primaryBlocker:'No verified MW and heavily pre-empted land.',dossierUrl:'/media/albedo-industries/Project_Atlas_Kouvola_Kotka_Gate1_Full_Dossier.pdf',coordinates:{latitude:60.7,longitude:26.95}},
]
export const atlasCandidateRegistryByRoute=new Map(atlasCandidateRegistry.map(candidate=>[candidate.route,candidate]))
