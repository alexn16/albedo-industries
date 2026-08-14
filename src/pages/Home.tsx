import { Link } from 'react-router-dom'

const activities=[
  {title:'FastSoftware',body:'Focused internal tools, operational systems and practical AI agents delivered around real company workflows.',to:'/fastsoftware'},
  {title:'Mobility Infrastructure',body:'Parking, access, EV charging and vehicle-security systems for operators, communities and private sites.',to:'/projects/alb-parking'},
  {title:'Local AI & Compute',body:'Private local AI systems and distributed-compute research for controlled workloads and company data.',to:'/projects/albedo-nodes'},
]

function DivisionCard({ division }: { division: (typeof divisions)[number] }) {
  return (
    <Link to={division.to} className="reveal-item group block rounded-xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
      <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3">{division.name}</p>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-zinc-600 transition-colors">{division.title}</h3>
      <p className="text-sm font-medium text-zinc-700 mb-4">{division.subtitle}</p>
      <p className="text-sm text-zinc-500 leading-relaxed mb-5">{division.description}</p>
      <ul className="space-y-2">
        {division.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start text-sm text-zinc-600">
            <span className="mt-2 mr-3 h-1.5 w-1.5 rounded-full bg-zinc-900 shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
    </Link>
  )
}

function ProductPill({ project }: { project: Project }) {
  return (
    <Link to={project.dedicatedPage || `/projects/${project.slug}`} className="group block rounded-lg border border-zinc-200 bg-white p-4 hover:border-zinc-300 hover:shadow-sm transition-all">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h4 className="font-medium group-hover:text-zinc-600 transition-colors">{project.name}</h4>
        <span className="text-xs text-zinc-400 shrink-0">{project.status}</span>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">{project.tagline}</p>
    </Link>
  )
}

export default function Home() {
  const divisionsRef = useStaggerReveal<HTMLDivElement>()
  const systemsRef = useStaggerReveal<HTMLDivElement>()
  const modelRef = useScrollReveal<HTMLElement>()
  const ctaRef = useScrollReveal<HTMLElement>()
  return (
    <div>
      <section className="hero-video-section relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <video className="hero-video absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="auto">
          <source src={`${basePath}media/ALBEDO - INDUSTRIES/weryai_5bb6aefbba19268f1e7c90c34015e82f.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.08] mb-6 animate-fade-in text-white">
            Intelligent infrastructure for software, mobility and compute.
          </h1>
          <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto animate-fade-in animation-delay-100">
            Albedo builds practical software and mobility systems, and independently originates and validates selected international locations for AI infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center animate-fade-in animation-delay-200">
            <Link to="/infrastructure/atlas" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors">Explore Project Atlas</Link>
            <Link to={{pathname:'/',hash:'#divisions'}} className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all">Explore Albedo</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[1.3fr_.7fr] gap-12 items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[.2em] text-amber-200 mb-4">PROJECT ATLAS · AI INFRASTRUCTURE</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Finding viable locations for the next generation of AI infrastructure.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">Atlas researches power, land, connectivity and development conditions across selected international locations. The strongest candidates advance through evidence-led validation with local partners, operators and investors.</p>
          </div>
          <div>
            <div className="flex flex-col gap-3"><Link to="/infrastructure/atlas" className="rounded-lg bg-white text-center text-zinc-950 px-5 py-3 text-sm font-medium">Explore Project Atlas</Link><Link to="/infrastructure/atlas/partners" className="rounded-lg border border-zinc-700 px-5 py-3 text-center text-sm font-medium hover:border-zinc-500">Discuss investment or partnership</Link></div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[.2em] text-zinc-400 mb-4">Investment &amp; partnerships</p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Capital follows evidence.</h2>
            <p className="mt-5 text-zinc-600 leading-relaxed">Atlas is speaking with operators, investors and infrastructure partners who can help validate selected locations. No investment offer is currently open.</p>
          </div>
          <Link to="/infrastructure/atlas/partners" className="shrink-0 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white">Discuss a partnership</Link>
        </div>
      </section>

      <section id="divisions" className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">Three divisions</h2>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">Three practical lines: company software, mobility hardware systems and local compute.</p>
          </div>
          <div ref={divisionsRef} className="grid md:grid-cols-3 gap-6">
            {divisions.map((division) => <DivisionCard key={division.title} division={division} />)}
          </div>
        </div>
      </section>

  <section className="bg-zinc-950 text-white"><div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.35fr_.65fr] md:items-end md:py-20"><div><p className="text-xs font-semibold tracking-[.2em] text-amber-200">PROJECT ATLAS · AI INFRASTRUCTURE</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Finding viable locations for the next generation of AI infrastructure.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">Project Atlas originates and validates selected international opportunities through evidence on power, land, connectivity, permitting and demand.</p></div><div className="flex flex-col gap-3"><Link to="/infrastructure/atlas" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 hover:bg-zinc-100">Explore Project Atlas</Link><Link to="/infrastructure/atlas/partners" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-center text-sm font-semibold hover:bg-white/10">Discuss investment or partnership</Link></div></div></section>

  <section className="border-t border-zinc-200"><div className="mx-auto max-w-5xl px-6 py-16 md:py-20"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Other Albedo activities</p><h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Focused systems for software, mobility and local compute.</h2></div><Link to="/projects" className="text-sm font-semibold underline decoration-amber-500 underline-offset-4">View the complete portfolio</Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{activities.map(activity=><Link to={activity.to} className="group rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400" key={activity.title}><h3 className="text-xl font-semibold">{activity.title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600">{activity.body}</p><span className="mt-6 inline-flex text-sm font-semibold group-hover:translate-x-1 motion-safe:transition-transform">Learn more →</span></Link>)}</div></div></section>

  <section className="border-t border-zinc-800 bg-zinc-950 text-white"><div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-2xl font-semibold">Start with the opportunity or requirement.</h2><p className="mt-2 max-w-2xl text-sm text-zinc-400">Talk to Albedo about Atlas, operational software, mobility infrastructure or local AI systems.</p></div><a href="mailto:alex@albedo-industries.com?subject=Albedo%20Industries%20conversation" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950">Start a conversation</a></div></section>
</div>}
