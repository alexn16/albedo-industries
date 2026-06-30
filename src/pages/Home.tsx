import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/projects'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'

const basePath = import.meta.env.BASE_URL || '/'

const divisions = [
  {
    title: 'FastSoftware',
    name: 'Albedo FastSoftware',
    subtitle: 'Internal tools delivered in weeks, not months.',
    description:
      'FastSoftware Sprints turn real company workflows into lightweight ERP tools, purchasing agents, operations dashboards and reporting agents that teams can use quickly.',
    bullets: ['Lightweight ERP systems', 'Purchasing and reporting agents', 'Stock and operations dashboards', 'Email, order and invoice automation', 'FastSoftware Sprint delivery'],
    to: '/fastsoftware',
  },
  {
    title: 'Mobility Infrastructure',
    name: 'ALB Mobility Infrastructure',
    subtitle: 'Smart parking, EV charging, access and vehicle security.',
    description:
      'ALB Parking handles reservations, access control, camera verification and dashboards for private spaces, communities and small parking operators. EV Guardian adds charging and vehicle-security monitoring.',
    bullets: ['Parking reservations and rental', 'Access control and camera verification', 'Owner and community dashboards', 'EV socket and consumption monitoring', 'Vehicle security mobile alerts'],
    to: '/projects/alb-parking',
  },
  {
    title: 'Albedo Nodes',
    name: 'Albedo Nodes',
    subtitle: 'Local AI boxes and future distributed compute.',
    description:
      'We are developing compact local AI boxes for private agents, document processing, storage and edge compute. Later, node owners may connect unused capacity to a future distributed compute network.',
    bullets: ['Local AI boxes', 'Private company agents', 'Document processing and storage', 'Office and edge compute', 'Future node capacity marketplace'],
    to: '/projects/albedo-nodes',
  },
]

const divisionGroups = [
  { title: 'FastSoftware', description: 'Commercially available sprints for internal tools, ERP-style systems and practical AI agents.', slugs: ['fastsoftware', 'foreman', 'germet', 'aperta', 'alphaclaim'] },
  { title: 'Mobility Infrastructure', description: 'Smart parking, EV charging, access control and vehicle security.', slugs: ['alb-parking'] },
  { title: 'Future infrastructure', description: 'Local AI boxes and distributed compute research.', slugs: ['albedo-nodes'] },
  { title: 'Consumer / experiments', description: 'Focused consumer systems and product explorations.', slugs: ['ardyn-fitness', 'beatflow'] },
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
            Custom software, smart parking and local AI boxes for company infrastructure.
          </h1>
          <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto animate-fade-in animation-delay-100">
            We build operational software for companies, parking access and EV charging systems, vehicle security tools, and local compute nodes for private AI workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center animate-fade-in animation-delay-200">
            <a href="#divisions" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors">Explore the divisions</a>
            <a href="mailto:hello@albedo.industries?subject=ALBEDO Inquiry" className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all">Contact ALBEDO</a>
          </div>
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

      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">Current systems and products</h2>
              <p className="text-lg text-zinc-600 max-w-2xl">Products are organized by the infrastructure line they support, so the portfolio reads as an operating map instead of a list of apps.</p>
            </div>
            <Link to="/projects" className="hidden sm:inline text-sm text-zinc-400 hover:text-zinc-900 transition-colors">View all</Link>
          </div>
          <div ref={systemsRef} className="grid md:grid-cols-2 gap-6">
            {divisionGroups.map((group) => {
              const groupProjects = group.slugs.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean) as Project[]
              return (
                <div key={group.title} className="reveal-item rounded-xl border border-zinc-200 bg-white p-6">
                  <h3 className="text-lg font-semibold mb-2">{group.title}</h3>
                  <p className="text-sm text-zinc-500 mb-5">{group.description}</p>
                  <div className="space-y-3">{groupProjects.map((project) => <ProductPill key={project.slug} project={project} />)}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section ref={modelRef} className="reveal border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">How we work</h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div><h3 className="text-lg font-medium mb-3">Build deployable systems</h3><p className="text-zinc-600 leading-relaxed">We start from operational bottlenecks and turn them into tools, hardware-connected workflows or local compute deployments.</p></div>
            <div><h3 className="text-lg font-medium mb-3">Ship iteratively</h3><p className="text-zinc-600 leading-relaxed">We favor useful deployments, measured workflows and continuous refinement over long speculative software cycles.</p></div>
            <div><h3 className="text-lg font-medium mb-3">Connect physical and digital assets</h3><p className="text-zinc-600 leading-relaxed">Parking spaces, EV chargers, access systems, company data and compute capacity become controllable infrastructure.</p></div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="reveal border-t border-zinc-100 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Build infrastructure with ALBEDO</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">Start with a FastSoftware Sprint for an internal tool, or talk to us about parking access, EV charging control, vehicle security or local AI compute pilots.</p>
            <a href="mailto:partnerships@albedo.industries?subject=ALBEDO Infrastructure Inquiry" className="inline-flex items-center justify-center px-6 py-3 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors">Start a conversation</a>
          </div>
        </div>
      </section>
    </div>
  )
}
