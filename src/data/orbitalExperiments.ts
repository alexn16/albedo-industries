export type ExperimentStatus = 'EXPERIMENT DESIGN' | 'ASSEMBLY' | 'TESTING' | 'COMPLETE' | 'STOPPED'
export type ExperimentMetricStatus = 'PLANNED' | 'MEASURED' | 'DERIVED'
export interface ExperimentMetric { id:string; name:string; definition:string; unit:string; status:ExperimentMetricStatus; target:string; value?:number }
export interface ExperimentResult { metricId:string; value:number; unit:string; measuredAt:string; testPhase:string; method:string; confidence:'LOW'|'MEDIUM'|'HIGH'; notes?:string }
export interface ExperimentStage { id:'A'|'B'; name:string; status:'IMMEDIATE DESIGN'|'CONDITIONAL FUTURE'; objective:string }
export interface OrbitalExperiment { id:string; name:string; subtitle:string; status:ExperimentStatus; researchQuestion:string; stages:ExperimentStage[]; metrics:ExperimentMetric[]; workPackages:{id:string;name:string;status:'DESIGN'|'CONDITIONAL'}[]; researchDomains:string[]; notRetired:string[]; partnerNeeds:Record<string,string[]>; lastReviewed:string; sourceIds:string[]; results:ExperimentResult[] }

export const autonomousComputeNode:OrbitalExperiment={
  id:'ORB-EXP-01',name:'Autonomous Compute Node',status:'EXPERIMENT DESIGN',subtitle:'Testing whether compute infrastructure can operate with minimal human intervention under constrained power, communications and fault conditions.',
  researchQuestion:'How long can a compute node continue useful operation under constrained and changing conditions without physical human intervention?',
  stages:[
    {id:'A',name:'Terrestrial autonomous compute node',status:'IMMEDIATE DESIGN',objective:'Measure autonomy, recovery, power, thermal response, communications burden and useful-work continuity on Earth.'},
    {id:'B',name:'Hosted low-Earth-orbit demonstrator',status:'CONDITIONAL FUTURE',objective:'If Stage A earns progression, compare compact-node fault and recovery behavior in an actual orbital environment.'},
  ],
  metrics:[
    {id:'intervention-burden',name:'Intervention burden',definition:'Human physical or remote manual interventions normalized per 1,000 operating hours.',unit:'interventions/1,000 h',status:'PLANNED',target:'TARGET TO BE DEFINED AFTER BASELINE'},
    {id:'useful-uptime',name:'Useful compute uptime',definition:'Share of experiment time producing valid workload output.',unit:'%',status:'PLANNED',target:'TARGET TO BE DEFINED AFTER BASELINE'},
    {id:'automatic-recovery',name:'Automatic recovery rate',definition:'Injected recoverable failures restored without manual action.',unit:'%',status:'PLANNED',target:'TARGET TO BE DEFINED AFTER BASELINE'},
    {id:'recovery-time',name:'Recovery time',definition:'Elapsed time from detected failure to restored useful workload.',unit:'s',status:'PLANNED',target:'TARGET TO BE DEFINED AFTER BASELINE'},
    {id:'work-energy',name:'Energy per workload unit',definition:'Electrical energy used per validated workload unit.',unit:'Wh/workload unit',status:'PLANNED',target:'TARGET TO BE DEFINED AFTER BASELINE'},
    {id:'power',name:'Power profile',definition:'Idle, average and peak electrical input.',unit:'W',status:'PLANNED',target:'BASELINE MEASUREMENT'},
    {id:'thermal',name:'Thermal history',definition:'Temperature, throttling, shutdown and recovery events.',unit:'°C and event count',status:'PLANNED',target:'MANUFACTURER-SAFE LIMITS'},
    {id:'data-integrity',name:'Data integrity',definition:'Completed jobs producing independently validated output.',unit:'%',status:'PLANNED',target:'TARGET TO BE DEFINED AFTER BASELINE'},
    {id:'communication-burden',name:'Communication burden',definition:'Health-telemetry bytes per hour of useful compute.',unit:'bytes/useful compute h',status:'PLANNED',target:'TARGET TO BE DEFINED AFTER BASELINE'},
    {id:'checkpoint-loss',name:'Checkpoint loss',definition:'Valid work lost following an interruption.',unit:'workload units',status:'PLANNED',target:'TARGET TO BE DEFINED AFTER BASELINE'},
  ],
  workPackages:[['WP1','System requirements','DESIGN'],['WP2','Ground test node','DESIGN'],['WP3','Autonomy software','DESIGN'],['WP4','Fault-injection harness','DESIGN'],['WP5','Long-duration test','DESIGN'],['WP6','Data analysis','DESIGN'],['WP7','Flight feasibility','CONDITIONAL'],['WP8','Hosted-payload partner selection','CONDITIONAL'],['WP9','Preliminary flight design','CONDITIONAL']].map(([id,name,status])=>({id,name,status:status as 'DESIGN'|'CONDITIONAL'})),
  researchDomains:['Autonomy','Compute','Power','Thermal','Network','Reliability','Servicing'],
  notRetired:['Launch economics','Large-scale orbital thermal architecture','Large solar arrays','Space manufacturing','Large-scale servicing'],
  partnerNeeds:{Compute:['GPU / accelerator','Embedded compute','Memory and storage'],Reliability:['Fault-tolerant computing','Radiation testing','Reliability engineering'],Power:['DC power systems','Battery systems','Power monitoring'],Thermal:['Electronics thermal engineering','Space thermal systems'],Space:['Hosted payload','Integration','Mission operations','Launch'],Software:['Distributed systems','Autonomy','Orchestration','Fault recovery'],Research:['Universities','Space research institutions']},
  lastReviewed:'2026-09-13',sourceIds:[],results:[],
}
