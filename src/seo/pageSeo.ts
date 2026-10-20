export const SITE_URL = 'https://www.albedo-industries.com'
export const SOCIAL_IMAGE = `${SITE_URL}/albedo-social.png`
export type SeoPage = { title: string; description: string; image?: string; noindex?: boolean; type?: 'website'|'article'; modified?: string }
const socialImages:Record<string,string>={
  'albedo-industries':'albedo-social.png','project-atlas':'atlas-social.png','albedo-orbital':'orbital-social.png','albedo-display':'display-social.png',fastsoftware:'fastsoftware-social.png','albedo-robotics':'robotics-social.png',
}
const image=(name:string)=>`${SITE_URL}/${socialImages[name]}`
const pages: Record<string, SeoPage> = {
  '/': { title: 'Albedo Industries — Infrastructure & Emerging Technologies', description: 'Developing data center opportunities through Project Atlas, alongside autonomous construction, resilient computing, physical interfaces and practical software.', image:image('albedo-industries') },
  '/atlas': { title: 'Project Atlas — Data Center Opportunity Development', description: 'Project Atlas identifies, evaluates and advances potential data center development opportunities through evidence-led technical and commercial validation.', image:image('project-atlas') },
  '/atlas/foundation': { title: 'Atlas Foundation — Regional Development Through Infrastructure', description: 'Atlas Foundation works alongside Atlas infrastructure projects to build local skills, employment pathways, supplier capacity and long-term regional opportunity.', image:image('project-atlas') },
  '/atlas/foundation/programme': { title: 'Regional Development Programme | Atlas Foundation', description: 'A proposed Atlas Foundation framework for regional skills, local employment, supplier development and wider economic activity before, during and after an Atlas infrastructure project.', image:image('project-atlas') },
  '/atlas/foundation/locations': { title: 'Regional Development Plans | Atlas Foundation', description: 'The reusable Atlas Foundation framework for sourced, location-specific workforce, training, procurement and regional economic-development plans.', image:image('project-atlas') },
  '/atlas/partners': { title: 'Data Center Development Capital & Co-Development | Atlas', description: 'Review defined Project Atlas development gates for capital providers, co-developers, operators, site owners and infrastructure partners.', image:image('project-atlas') },
  '/atlas/research': { title: 'Data Center Site Research Library | Project Atlas', description: 'Source-backed Project Atlas research on power, land, fibre, cooling, planning and permitting, including active, under-study and closed records.', image:image('project-atlas') },
  '/robotics': { title: 'Albedo Robotics — Autonomous Construction Initiative', description: 'An emerging initiative exploring autonomous physical construction through industrial partnerships. Seeking machinery partners and potential pilot collaborators.', image:image('albedo-robotics') },
  '/orbital': { title: 'Albedo Orbital — Autonomous & Resilient Computing Research', description: 'Research into autonomous computing for future space applications, beginning with terrestrial experiments. Engineering and research collaborators sought.', image:image('albedo-orbital') },
  '/orbital/research': { title: 'Orbital Data Center Technical Research | Albedo Orbital', description: 'Research into power, thermal, launch, radiation, communications, autonomy and economic constraints for orbital compute.', image:image('albedo-orbital'), type:'article' },
  '/orbital/experiment-01': { title: 'Autonomous Compute Node Experiment | Albedo Orbital', description: 'A proposed terrestrial test of compute reliability, fault recovery, power, thermal behaviour and remote operations; hardware is not yet assembled.', image:image('albedo-orbital'), type:'article' },
  '/display': { title: 'Albedo Display — Affordable Physical Information Interfaces', description: 'A pre-prototype concept for affordable, persistent information displays across workplaces, everyday environments and physical AI interfaces. Technology remains open.', image:image('albedo-display') },
  '/display/invest': { title: 'Albedo Display Pilot & Strategic Partner Brief', description: 'Explore Albedo Display’s open display technology, affordability goals, prototype pathway and manufacturing questions. Technical partners and early investment sought.', image:image('albedo-display') },
  '/fastsoftware': { title: 'FastSoftware — Operational Software & AI Systems', description: 'Practical tools for procurement, documents and operations. Explore Foreman in development and a static purchasing demonstration with human-reviewed decision support.', image:image('fastsoftware') },
  '/foreman': { title: 'Foreman — Construction Operations Software | FastSoftware', description: 'A building-stage construction operations system for projects, purchasing context, materials, warehouse and site workflows.', image:image('fastsoftware') },
  '/fastsoftware/purchasing-agent': { title: 'Purchasing Agent Demo — AI-Assisted Procurement', description: 'A transparent demonstration of supplier-offer comparison, missing-information checks and human-reviewed purchasing support.', image:image('fastsoftware') },
  '/projects': { title: 'Built & Researched — ALBEDO Industries Track Record', description: 'Explore selected ALBEDO software systems, product experiments and earlier research with explicit development-stage labels.', image:image('albedo-industries') },
  '/about': { title: 'About ALBEDO Industries & Founder Alex Velasco', description: 'An independent early-stage company founded by Alex Velasco. Meet Project Atlas, Albedo Robotics, Orbital, Display and FastSoftware.', image:image('albedo-industries') },
  '/privacy': { title: 'Privacy Notice | ALBEDO Industries', description: 'How the public ALBEDO Industries website handles information submitted through enquiries and site delivery.' },
  '/terms': { title: 'Website Terms | ALBEDO Industries', description: 'Terms for ALBEDO Industries public research, project information and demonstrations, including evidence-status limitations.' },
  '/security': { title: 'Website Security | ALBEDO Industries', description: 'A narrow, factual security statement for the public ALBEDO Industries website and responsible vulnerability reporting.' },
  '/updates': { title: 'Company Updates | ALBEDO Industries', description: 'Updates from ALBEDO Industries across Project Atlas, research, physical interfaces and operational software.' },
  '/support': { title: 'Contact & Project Enquiries | ALBEDO Industries', description: 'Contact Albedo about investment, development opportunities, industrial robotics partnerships, computing research, display prototypes or business software.' },
}
const aliases=new Set(['/infrastructure','/infrastructure/europe','/infrastructure/atlas','/infrastructure/atlas/foundation','/infrastructure/atlas/partners','/infrastructure/funding','/infrastructure/atlas/research'])
export function seoForPath(pathname: string): SeoPage {
  pathname = pathname.replace(/\/+$/, '') || '/'
  if (pages[pathname]) return pages[pathname]
  if (pathname.startsWith('/atlas/foundation/locations/')) return { title: 'Location Development Plan | Atlas Foundation', description: 'A location-specific Atlas Foundation planning framework. Plans are published only with verified regional and project information.', image:image('project-atlas'), noindex:true }
  if(aliases.has(pathname)) return {...pages['/atlas'],noindex:true}
  if (pathname.startsWith('/projects/')) return { title: 'ALBEDO Project Record | Built & Researched', description: 'A development-stage record from the ALBEDO Industries software lab and earlier project archive.' }
  if (pathname.startsWith('/infrastructure/')) return { title: 'Data Center Infrastructure Research | Project Atlas', description: 'Evidence-labelled Project Atlas research; no site, power, permits, financing or customer commitment is implied.', type:'article' }
  return { title: 'Page Not Found | ALBEDO Industries', description: 'The requested ALBEDO Industries page could not be found.', noindex:true }
}
