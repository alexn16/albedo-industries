/** Public positioning shared across the company pages. Stages are not delivery claims. */
export const divisions = [
  { id: 'atlas', name: 'Project Atlas', category: 'Data center infrastructure', stage: 'Origination & validation', purpose: 'Identify, evaluate and advance potential data center development opportunities.', route: '/atlas', partner: 'Development capital, operators, developers and landowners.', label: 'Primary commercial initiative' },
  { id: 'robotics', name: 'Albedo Robotics', category: 'Autonomous construction', stage: 'Initiative in development', purpose: 'Explore physical infrastructure construction through industrial robotics partnerships.', route: '/robotics', partner: 'Equipment manufacturers, construction specialists and pilot collaborators.', label: 'New division' },
  { id: 'orbital', name: 'Albedo Orbital', category: 'Advanced computing research', stage: 'Research / pre-development', purpose: 'Research autonomous, resilient computing for potential future space applications.', route: '/orbital', partner: 'Engineering teams, research institutions and early-stage investors.', label: 'Research' },
  { id: 'display', name: 'Albedo Display', category: 'Physical information interfaces', stage: 'Pre-prototype', purpose: 'Explore affordable, persistent information displays for physical environments and AI.', route: '/display', partner: 'Technical partners, manufacturers and prototype collaborators.', label: 'Product exploration' },
  { id: 'software', name: 'FastSoftware', category: 'Operational software & practical AI', stage: 'Building & demonstrations', purpose: 'Develop focused tools for procurement, documents and operational workflows.', route: '/fastsoftware', partner: 'Businesses with a defined workflow to improve.', label: 'Software development' },
] as const

export const contactEmail = 'alex@albedo-industries.com'
export function enquiryHref(topic: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent('Hello Albedo,\n\nName and organisation:\nArea of interest:\nRelevant project or requirement:\nProposed next step:\n\n')}`
}
