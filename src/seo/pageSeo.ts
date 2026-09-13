export const SITE_URL = 'https://www.albedo-industries.com'
export const SOCIAL_IMAGE = `${SITE_URL}/albedo-social.svg`
export type SeoPage = { title: string; description: string; image?: string; noindex?: boolean; type?: 'website'|'article'; modified?: string }
const socialImages:Record<string,string>={
  'albedo-industries':'albedo-social.svg','project-atlas':'atlas-social.svg','albedo-orbital':'orbital-social.svg','albedo-display':'display-social.svg',fastsoftware:'fastsoftware-social.svg',
}
const image=(name:string)=>`${SITE_URL}/${socialImages[name]}`
const pages: Record<string, SeoPage> = {
  '/': { title: 'ALBEDO Industries — Data Center & AI Infrastructure Development', description: 'ALBEDO Industries advances early-stage data-center infrastructure through Project Atlas, supported by physical-interface research and operational software.', image:image('albedo-industries') },
  '/atlas': { title: 'Project Atlas — Data Center Development & AI Infrastructure', description: 'Project Atlas originates, validates, structures and advances selected data center sites through evidence-led development gates.', image:image('project-atlas') },
  '/atlas/partners': { title: 'Data Center Development Capital & Co-Development | Atlas', description: 'Review defined Project Atlas development gates for capital providers, co-developers, operators, site owners and infrastructure partners.', image:image('project-atlas') },
  '/atlas/research': { title: 'Data Center Site Research Library | Project Atlas', description: 'Source-backed Project Atlas research on power, land, fibre, cooling, planning and permitting, including active, under-study and closed records.', image:image('project-atlas') },
  '/orbital': { title: 'Albedo Orbital — Orbital Data Center & Space Compute Research', description: 'Albedo Orbital is pre-development research into autonomous compute, power, thermal, communications and other constraints beyond terrestrial grids.', image:image('albedo-orbital') },
  '/orbital/research': { title: 'Orbital Data Center Technical Research | Albedo Orbital', description: 'Research into power, thermal, launch, radiation, communications, autonomy and economic constraints for orbital compute.', image:image('albedo-orbital'), type:'article' },
  '/orbital/experiment-01': { title: 'Autonomous Compute Node Experiment | Albedo Orbital', description: 'A proposed terrestrial test of compute reliability, fault recovery, power, thermal behaviour and remote operations; hardware is not yet assembled.', image:image('albedo-orbital'), type:'article' },
  '/display': { title: 'Albedo Display — Persistent Data Center Operations Interface', description: 'A pre-prototype, low-power persistent display concept for data-center racks, maintenance, commissioning and critical infrastructure.', image:image('albedo-display') },
  '/display/invest': { title: 'Albedo Display Pilot & Strategic Partner Brief', description: 'Review Albedo Display’s open technical architecture, pilot validation plan, manufacturing questions and evidence-gated capital uses.', image:image('albedo-display') },
  '/fastsoftware': { title: 'FastSoftware — Operational Software & AI Systems', description: 'Focused operational software and human-reviewed AI workflows for procurement, documents, projects and reporting.', image:image('fastsoftware') },
  '/foreman': { title: 'Foreman — Construction Operations Software | FastSoftware', description: 'A building-stage construction operations system for projects, purchasing context, materials, warehouse and site workflows.', image:image('fastsoftware') },
  '/fastsoftware/purchasing-agent': { title: 'Purchasing Agent Demo — AI-Assisted Procurement', description: 'A transparent demonstration of supplier-offer comparison, missing-information checks and human-reviewed purchasing support.', image:image('fastsoftware') },
  '/projects': { title: 'Built & Researched — ALBEDO Industries Track Record', description: 'Explore selected ALBEDO software systems, product experiments and earlier research with explicit development-stage labels.', image:image('albedo-industries') },
  '/about': { title: 'About ALBEDO Industries & Founder Alex Velasco', description: 'ALBEDO Industries is an independent early-stage company led by Alex Velasco, with Project Atlas as its primary initiative.', image:image('albedo-industries') },
  '/privacy': { title: 'Privacy Notice | ALBEDO Industries', description: 'How the public ALBEDO Industries website handles information submitted through enquiries and site delivery.' },
  '/terms': { title: 'Website Terms | ALBEDO Industries', description: 'Terms for ALBEDO Industries public research, project information and demonstrations, including evidence-status limitations.' },
  '/security': { title: 'Website Security | ALBEDO Industries', description: 'A narrow, factual security statement for the public ALBEDO Industries website and responsible vulnerability reporting.' },
  '/updates': { title: 'Company Updates | ALBEDO Industries', description: 'Updates from ALBEDO Industries across Project Atlas, research, physical interfaces and operational software.' },
  '/support': { title: 'Contact & Project Enquiries | ALBEDO Industries', description: 'Contact ALBEDO Industries about Project Atlas, infrastructure partnerships, Albedo Display or operational software.' },
}
const aliases=new Set(['/infrastructure','/infrastructure/europe','/infrastructure/atlas','/infrastructure/atlas/partners','/infrastructure/funding','/infrastructure/atlas/research'])
export function seoForPath(pathname: string): SeoPage {
  if (pages[pathname]) return pages[pathname]
  if(aliases.has(pathname)) return {...pages['/atlas'],noindex:true}
  if (pathname.startsWith('/projects/')) return { title: 'ALBEDO Project Record | Built & Researched', description: 'A development-stage record from the ALBEDO Industries software lab and earlier project archive.' }
  if (pathname.startsWith('/infrastructure/')) return { title: 'Data Center Infrastructure Research | Project Atlas', description: 'Evidence-labelled Project Atlas research; no site, power, permits, financing or customer commitment is implied.', type:'article' }
  return { title: 'Page Not Found | ALBEDO Industries', description: 'The requested ALBEDO Industries page could not be found.', noindex:true }
}
