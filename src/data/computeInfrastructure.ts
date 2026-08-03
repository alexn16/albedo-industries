export const regions = [
  { name: 'Galicia', note: 'Primary area of study', criteria: ['Grid and substation access', 'Renewable-energy availability', 'Industrial land and planning', 'Fiber connectivity', 'Climate and cooling water needs', 'Transport and maintenance access'] },
  { name: 'Northern Spain', note: 'Alternative candidate area', criteria: ['Credible power route', 'Industrial ecosystem', 'Resilient fiber routes', 'Planning and environmental fit'] },
]

export const developmentGates = [
  ['Demand assessment', 'In progress'], ['Candidate-site shortlist', 'In progress'], ['Energy-route verification', 'In progress'],
  ['Preliminary technical design', 'Not started'], ['Commercial commitments', 'Not started'], ['Legal and financing structure', 'Not started'],
  ['Site control', 'Not started'], ['Permits and grid process', 'Not started'], ['Construction decision', 'Not started'], ['Commissioning', 'Not started'],
] as const

export const services = ['Rack colocation', 'Dedicated racks', 'Private AI compute', 'Managed GPU infrastructure', 'Storage and database infrastructure', 'Private cloud or sovereign workloads', 'Startup and research capacity', 'Enterprise hosting']

export const projectUpdates = [
  {
    title: 'Demand validation begins',
    date: '3 August 2026',
    dateTime: '2026-08-03',
    status: 'Assessment update',
    body: 'Albedo has opened non-binding registration for future customers, investors and infrastructure partners. Registrations will inform assessment only and do not guarantee capacity, participation or project delivery.',
  },
]
