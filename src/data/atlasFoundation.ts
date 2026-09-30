export type FoundationMetric={label:string;value:string|null;note:string}
export const foundationLinks={developRegion:'/atlas/partners',developSite:'/atlas/partners',partner:'mailto:alex@albedo-industries.com?subject=Atlas%20Foundation%20partnership'} as const
export const foundationMetrics:FoundationMetric[]=['People trained','Jobs created','Apprenticeships','Local suppliers','Local procurement','Partner institutions','Businesses supported','Students participating','Investment in training'].map(label=>({label,value:null,note:'Reported when a location programme is active and verified.'}))
export const foundationPillars=[
 ['Skills','Develop technical capabilities for infrastructure, energy and digital industries.',['Electrical systems','Cooling systems','Industrial maintenance','Networking and fibre','Data-centre operations','Renewable energy','Construction skills','Digital skills','AI infrastructure']],
 ['Employment','Create pathways into work generated directly and indirectly by Atlas projects.',['Construction','Operations','Maintenance','Security','Administration','Energy','Logistics','Technical services','Local support companies']],
 ['Education','Work with existing institutions rather than attempting to replace them.',['Vocational schools','Technical colleges','Universities','Secondary schools','Training centres','Apprenticeships','Certifications','Internships and STEM']],
 ['Local business','Help regional SMEs understand requirements and qualify for the Atlas supply chain.',['Construction','Electrical works','Mechanical services','Maintenance','Security','Catering','Logistics','Cleaning','Landscaping','Transport','Accommodation','Professional services']],
 ['Entrepreneurship','Encourage useful new businesses and services around the infrastructure cluster.',['Technical and energy services','Maintenance','Digital and AI businesses','Engineering','Logistics','Training providers','Local startups']],
 ['Regional growth','Connect Atlas investment to broader economic development with regional institutions.',['Complementary industries','Infrastructure ecosystem','Technology ecosystem','Regional development planning']],
] as const
