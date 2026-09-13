export const SITE_URL = 'https://www.albedo-industries.com'
export const SOCIAL_IMAGE = `${SITE_URL}/albedo-social.svg`
export type SeoPage = { title: string; description: string; image?: string; noindex?: boolean }
const pages: Record<string, SeoPage> = {
  '/': { title: 'ALBEDO Industries — Data Center & AI Infrastructure Development', description: 'ALBEDO Industries advances early-stage data-center infrastructure through Project Atlas and researches longer-term orbital compute, alongside physical interfaces and operational software.' },
  '/atlas': { title: 'Project Atlas — Data Center Development & AI Infrastructure', description: 'Project Atlas identifies, validates, structures and advances early-stage data center and AI infrastructure opportunities across selected international markets.' },
  '/atlas/partners': { title: 'Data Center Development Capital & Co-Development | Project Atlas', description: 'Work with Project Atlas on evidence-led data center development opportunities, development capital, operator requirements and infrastructure co-development.' },
  '/atlas/research': { title: 'Data Center Site Research & Infrastructure Due Diligence | Project Atlas', description: 'Review Project Atlas research into power, land, fibre, cooling, planning, permitting and execution conditions for early-stage data center sites.' },
  '/orbital': { title: 'Albedo Orbital — Orbital Data Centers & Space Compute Research', description: 'Albedo Orbital is ALBEDO Industries’ research initiative exploring autonomous compute, orbital data centers, power, thermal management, communications and infrastructure beyond traditional terrestrial grids.', image: `${SITE_URL}/orbital-social.svg` },
  '/orbital/research': { title: 'Orbital Data Center Research — Technical Bottlenecks | Albedo Orbital', description: 'Research into the power, thermal, launch, radiation, communications, autonomy and economic constraints that must be solved for large-scale orbital AI compute and data centers.', image: `${SITE_URL}/orbital-social.svg` },
  '/orbital/experiment-01': { title: 'Albedo Orbital Experiment 01 — Autonomous Compute Node', description: 'A proposed terrestrial and later hosted-orbit test program designed to measure autonomous compute reliability, fault recovery, power management, communications and intervention burden.', image: `${SITE_URL}/orbital-social.svg` },
  '/display': { title: 'Albedo Display — Persistent Displays for Data Center Infrastructure', description: 'Albedo Display is a pre-prototype persistent physical information interface designed for low-power operation around data-center racks, maintenance and commissioning.' },
  '/display/invest': { title: 'Albedo Display Strategic Brief — Data Center Persistent Displays', description: 'Strategic partner brief for Albedo Display, a pre-prototype persistent operational display concept for data centers and critical infrastructure.' },
  '/fastsoftware': { title: 'FastSoftware — Operational Software & AI Systems | ALBEDO Industries', description: 'FastSoftware builds focused operational software, internal tools and AI-assisted workflows around real company processes, from procurement and documents to projects and reporting.' },
  '/foreman': { title: 'Foreman — Construction Operations Software | FastSoftware', description: 'Foreman is a building-stage construction operations software project covering projects, purchasing context, materials, warehouse and site workflows.' },
  '/fastsoftware/purchasing-agent': { title: 'Purchasing Agent Demo — AI-Assisted Procurement | FastSoftware', description: 'A transparent FastSoftware demonstration of supplier-offer comparison, missing-information checks and human-reviewed purchasing decision support.' },
  '/about': { title: 'About ALBEDO Industries — AI & Data Center Infrastructure', description: 'Learn about Project Atlas, Albedo Orbital, Albedo Display and FastSoftware, and ALBEDO Industries’ evidence-led approach to AI infrastructure.' },
}
export function seoForPath(pathname: string): SeoPage {
  if (pages[pathname]) return pages[pathname]
  if (pathname.startsWith('/infrastructure/')) return { title: 'AI Infrastructure Research | Project Atlas', description: 'Public, evidence-labelled Project Atlas research into an early-stage AI and data-center infrastructure candidate. Research does not imply site, power or permit control.' }
  return { title: 'ALBEDO Industries', description: 'Building the physical layer of AI through data-center development, persistent infrastructure interfaces and operational software.' }
}
