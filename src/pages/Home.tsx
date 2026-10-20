import ArrowUpRight from '../components/ArrowUpRight'
import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo'
import { atlasPipeline } from '../data/atlasPipeline'
import { divisions, enquiryHref } from '../data/divisions'

const opportunity = atlasPipeline.find(item => item.publication.homepageFeatured)

export default function Home() {
  return <article>
    <section className="hero-video-section company-hero relative isolate flex min-h-[88svh] items-center overflow-hidden bg-[radial-gradient(circle_at_70%_30%,#3f3f46_0%,#18181b_45%,#09090b_80%)] text-white">
      <HeroVideo src="/media/ALBEDO - INDUSTRIES/weryai_5bb6aefbba19268f1e7c90c34015e82f.mp4" className="object-[60%_50%] sm:object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
      <div className="company-container relative w-full py-24 md:py-32">
        <p className="company-eyebrow text-amber-200">Independent thinking. Physical progress.</p>
        <h1 className="company-hero-title max-w-4xl">Building the infrastructure of tomorrow.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-200">Albedo Industries develops infrastructure opportunities and explores emerging technologies across data centers, autonomous construction, physical AI interfaces and advanced computing.</p>
        <div className="company-actions mt-9">
          <Link to="/#divisions" className="company-button company-button--light">Explore our projects <ArrowUpRight /></Link>
          <Link to="/support#partnerships" className="company-button company-button--outline-light">Partner with us</Link>
          <Link to="/support" className="company-text-link text-white">Contact Albedo <span aria-hidden="true">→</span></Link>
        </div>
        <div className="mt-14 border-t border-white/25 pt-5 md:mt-20"><p className="text-sm text-zinc-300"><span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />Project Atlas leads our commercial development. Our emerging initiatives advance through research and validation.</p><p className="mt-3 text-xs text-zinc-300">Illustrative infrastructure imagery.</p></div>
      </div>
    </section>

    <section className="division-section bg-[#f3f2ed]">
      <div className="company-container grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div><p className="company-eyebrow">Our focus today</p><h2 className="company-heading">Infrastructure starts with a credible opportunity.</h2></div>
        <div className="lg:pt-8"><p className="text-lg leading-relaxed text-zinc-600">Our principal initiative, Project Atlas, identifies and evaluates potential data center locations. We seek development capital and experienced partners to move suitable opportunities through defined technical and commercial gates.</p><p className="mt-5 leading-relaxed text-zinc-600">Alongside this work, we are exploring how automation, physical interfaces and resilient computing could improve the way infrastructure is built and operated.</p><Link to="/about" className="company-text-link mt-6">About Albedo Industries <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <section id="divisions" className="division-section">
      <div className="company-container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="company-eyebrow">Five divisions. One direction.</p><h2 className="company-heading">From opportunity<br />to possibility.</h2></div><p className="max-w-sm text-sm leading-relaxed text-zinc-600">Each initiative has a distinct purpose and development stage. Research and concepts are presented separately from demonstrated capabilities.</p></div>
        <div className="division-grid mt-12">
          {divisions.map((division, index) => <article key={division.id} className={`division-card division-card--${division.id}`}>
            <div className="division-card__visual" aria-hidden="true">
              {division.id === 'atlas' ? <div className="atlas-lines">{Array.from({ length: 8 }, (_, i) => <span key={i} />)}</div> : division.id === 'robotics' ? <img src="/media/robotics/autonomous-construction.webp" srcSet="/media/robotics/autonomous-construction-640.webp 640w, /media/robotics/autonomous-construction-960.webp 960w, /media/robotics/autonomous-construction.webp 1536w" sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1023px) 50vw, 560px" alt="" width="1536" height="1024" loading="lazy" decoding="async" /> : division.id === 'display' ? <img src="/media/albedo-display/v0-concept.svg" alt="" width="1200" height="820" loading="lazy" decoding="async" /> : division.id === 'orbital' ? <div className="orbital-rings"><i /><i /><i /><span /></div> : <div className="software-lines"><span>01 / INPUT</span><span>02 / STRUCTURE</span><span>03 / HUMAN REVIEW</span></div>}
              <span className="division-card__number">0{index + 1}</span>
            </div>
            <div className="division-card__body"><p className="company-eyebrow">{division.label}</p><h3 className="text-3xl font-semibold tracking-tight">{division.name}</h3><p className="mt-2 text-sm font-medium text-zinc-600">{division.category}</p><p className="mt-5 leading-relaxed text-zinc-600">{division.purpose}</p><p className="division-stage mt-6">{division.stage}</p><Link to={division.route} className="company-text-link mt-6">Explore {division.id === 'software' ? 'FastSoftware' : division.name.replace('Albedo ', '')} <ArrowUpRight /></Link></div>
          </article>)}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-zinc-500">Division visuals are illustrative. Robotics imagery is an AI-generated concept; Display imagery shows a design hypothesis. Neither documents a completed Albedo project or working product.</p>
      </div>
    </section>

    <section className="division-section division-section--dark">
      <div className="company-container"><p className="company-eyebrow">Project Atlas · Primary commercial initiative</p><h2 className="company-heading max-w-4xl">Better information.<br />A clearer development decision.</h2><p className="company-intro">Atlas brings opportunity origination, preliminary screening and local coordination to potential data center projects. The next commitment depends on the evidence.</p>
        {opportunity && <article className="mt-12 border-y border-zinc-700 py-8"><div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]"><div><p className="company-eyebrow">Featured opportunity · {opportunity.market}</p><h3 className="mt-3 text-3xl font-semibold">{opportunity.name}</h3><p className="mt-3 text-sm text-zinc-300">{opportunity.stage} · {opportunity.evidence}</p></div><div><p className="text-xl font-medium">{opportunity.scale}</p><p className="mt-4 text-sm leading-relaxed text-zinc-300">Next gate: {opportunity.nextMilestone}. Land, power allocation, permits, financing and customers are not represented as secured for Atlas.</p><p className="mt-4 text-xs text-zinc-400">Public record last reviewed: {opportunity.lastReviewed}.</p></div></div></article>}
        <div className="company-actions mt-8"><Link to="/atlas" className="company-button company-button--light">Explore Project Atlas <ArrowUpRight /></Link><Link to="/atlas/partners" className="company-text-link text-white">Development & investment partnerships <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <section className="division-section bg-amber-200"><div className="company-container"><p className="company-eyebrow">Investors · Industrial partners · Businesses</p><h2 className="company-heading max-w-4xl">Bring a site, a capability<br />or a practical challenge.</h2><p className="company-intro">Explore a defined development opportunity, contribute technical expertise or discuss a workflow that could work better. We will start with the project, the evidence and a useful next step.</p><div className="company-actions mt-9"><Link to="/support#partnerships" className="company-button">Partner with us <ArrowUpRight /></Link><a href={enquiryHref('Albedo Industries — general enquiry')} className="company-text-link">Contact Albedo <span aria-hidden="true">→</span></a></div></div></section>
  </article>
}
