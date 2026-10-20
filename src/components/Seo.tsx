import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { divisions } from '../data/divisions'
import { seoForPath, SITE_URL, SOCIAL_IMAGE } from '../seo/pageSeo'
const setMeta = (selector: string, attribute: string, value: string) => {
  let node = document.head.querySelector(selector)
  if (!node) { node = document.createElement(selector.startsWith('link') ? 'link' : 'meta'); const match = selector.match(/\[(.+?)="(.+?)"\]/); if (match) node.setAttribute(match[1], match[2]); document.head.appendChild(node) }
  node.setAttribute(attribute, value)
}
export default function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const page = seoForPath(pathname); const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
    document.title = page.title
    setMeta('meta[name="description"]', 'content', page.description); setMeta('meta[name="robots"]', 'content', page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'); setMeta('link[rel="canonical"]', 'href', canonical)
    for (const [selector, value] of [['meta[property="og:title"]', page.title], ['meta[property="og:description"]', page.description], ['meta[property="og:url"]', canonical], ['meta[property="og:type"]', page.type ?? 'website'], ['meta[property="og:image"]', page.image ?? SOCIAL_IMAGE], ['meta[name="twitter:card"]', 'summary_large_image'], ['meta[name="twitter:title"]', page.title], ['meta[name="twitter:description"]', page.description], ['meta[name="twitter:image"]', page.image ?? SOCIAL_IMAGE]]) setMeta(selector, 'content', value)
    document.querySelectorAll('script[data-site-structured-data]').forEach(node => node.remove())
    const graph: Record<string, unknown>[] = [{ '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: page.title, description: page.description, isPartOf: { '@id': `${SITE_URL}/#website` } }]
    if (pathname === '/') graph.unshift({ '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'ALBEDO Industries', url: `${SITE_URL}/`, email:'alex@albedo-industries.com', description: 'An independent early-stage company developing data center opportunities through Project Atlas, with emerging initiatives in autonomous construction, resilient computing, physical interfaces and operational software.', knowsAbout: ['Data-center development', 'AI infrastructure', 'Power and grid diligence', 'Autonomous construction research', 'Orbital compute research', 'Persistent operational displays', 'Operational software'], logo: `${SITE_URL}/favicon.svg`, founder: { '@type': 'Person', '@id':`${SITE_URL}/about#alex-velasco`, name: 'Alex Velasco', jobTitle:'Founder', founderOf:{'@id':`${SITE_URL}/#organization`} }, contactPoint:{'@type':'ContactPoint',contactType:'business enquiries',email:'alex@albedo-industries.com'} }, { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'ALBEDO Industries', url: `${SITE_URL}/`, publisher: { '@id': `${SITE_URL}/#organization` } })
    if (pathname === '/') graph.push({ '@type': 'ItemList', name: 'Albedo Industries divisions', itemListElement: divisions.map((division, index) => ({ '@type': 'ListItem', position: index + 1, name: division.name, url: SITE_URL + division.route, description: `${division.purpose} Stage: ${division.stage}.` })) })
    if (pathname.startsWith('/atlas') || pathname === '/fastsoftware') graph.push({ '@type': 'Service', name: pathname === '/fastsoftware' ? 'FastSoftware operational software development' : 'Project Atlas data center development', provider: { '@id': `${SITE_URL}/#organization` }, description: page.description, areaServed: 'International', url: canonical })
    const script = document.createElement('script'); script.type = 'application/ld+json'; script.dataset.siteStructuredData = 'true'; script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }); document.head.appendChild(script)
  }, [pathname])
  return null
}
