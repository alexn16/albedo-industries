import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'

const basePath = import.meta.env.BASE_URL || '/'

// Featured projects shown on homepage (parent projects only, with media)
const featuredSlugs = ['alb-parking', 'foreman', 'germet', 'ardyn-fitness']
const featured = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean) as typeof projects

// All parent projects for the portfolio grid
const parentProjects = projects.filter((p) => !p.parentSlug)

export default function Home() {
  const showcaseRef = useStaggerReveal<HTMLDivElement>()
  const modelRef = useScrollReveal<HTMLElement>()
  const signalsRef = useStaggerReveal<HTMLDivElement>()
  const ctaRef = useScrollReveal<HTMLElement>()

  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 animate-fade-in text-gradient">
            Real systems for<br />real infrastructure.
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl animate-fade-in animation-delay-100">
            ALBEDO Industries builds software that turns overlooked assets into working
            infrastructure. Urban parking. Fitness decisions. Global supply chains. Construction operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in animation-delay-200">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Explore projects
            </Link>
            <a
              href="mailto:hello@albedo.industries?subject=Partnership Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ─── Featured Projects Showcase ─── */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
              What We're Building
            </h2>
            <Link
              to="/projects"
              className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-1"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div ref={showcaseRef} className="grid md:grid-cols-2 gap-6">
            {featured.map((project) => (
              <Link
                key={project.slug}
                to={project.dedicatedPage || `/projects/${project.slug}`}
                className="reveal-item group relative block rounded-xl border border-zinc-200 overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Card header with logo or accent */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {project.logo && (
                        <img
                          src={`${basePath}${project.logo}`}
                          alt=""
                          className="h-8 object-contain"
                          loading="lazy"
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-medium group-hover:text-zinc-600 transition-colors">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${
                      project.status === 'Live'
                        ? 'bg-green-50 text-green-700'
                        : project.status === 'Building'
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-zinc-100 text-zinc-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {project.positioning}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.capabilities.slice(0, 3).map((cap, i) => (
                      <span key={i} className="text-xs text-zinc-400 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Bottom accent line */}
                <div className={`h-0.5 ${
                  project.status === 'Live' ? 'bg-green-400' :
                  project.status === 'Building' ? 'bg-blue-400' : 'bg-zinc-300'
                } transition-all duration-300 opacity-50 group-hover:opacity-100`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Operating Model ─── */}
      <section ref={modelRef} className="reveal border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            How We Work
          </h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Build internally</h3>
              <p className="text-zinc-600 leading-relaxed">
                All products originate from problems we've identified and validated. We don't
                take outside projects or build for others. Every line of code serves our
                portfolio.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Ship iteratively</h3>
              <p className="text-zinc-600 leading-relaxed">
                We favor working software over perfect plans. Get something useful into
                people's hands quickly, then refine based on how they actually use it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Run independently</h3>
              <p className="text-zinc-600 leading-relaxed">
                Each product operates with its own identity, user base, and business model.
                They share infrastructure and learnings, but succeed or fail on their own
                merits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Current Signals ─── */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            Current Signals
          </h2>
          <div ref={signalsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'ALB Parking', status: 'Live', color: 'border-green-400', signal: 'Booking + QR access in initial markets. Charging Wall in development.' },
              { name: 'Foreman', status: 'In pilot', color: 'border-blue-400', signal: 'Core + PDA modules with 15 construction teams.' },
              { name: 'Germet', status: 'Building', color: 'border-blue-400', signal: 'Component modeling and supplier comparison in pilot.' },
              { name: 'Ardyn Fitness', status: 'Building', color: 'border-blue-400', signal: 'Closed beta. Equipment library and daily workout engine.' },
              { name: 'Aperta', status: 'In pilot', color: 'border-blue-400', signal: '8 restaurant partners onboarded.' },
              { name: 'Alphaclaim', status: 'Building', color: 'border-blue-400', signal: 'Brief generation and delivery system.' },
            ].map((item) => (
              <div key={item.name} className={`reveal-item p-5 rounded-lg border border-zinc-100 border-l-2 ${item.color} bg-white hover:shadow-sm transition-shadow`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-zinc-900">{item.name}</p>
                  <span className="text-xs text-zinc-400">{item.status}</span>
                </div>
                <p className="text-sm text-zinc-500">{item.signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Portfolio Overview ─── */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
              Full Portfolio
            </h2>
            <Link
              to="/projects"
              className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {parentProjects.map((project) => (
              <Link
                key={project.slug}
                to={project.dedicatedPage || `/projects/${project.slug}`}
                className="group block p-5 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${
                    project.status === 'Live' ? 'bg-green-400' :
                    project.status === 'Building' ? 'bg-blue-400' : 'bg-zinc-300'
                  }`} />
                  <span className="text-xs text-zinc-400">{project.category}</span>
                </div>
                <h3 className="font-medium mb-1 group-hover:text-zinc-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {project.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section ref={ctaRef} className="reveal border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Work with us
            </h2>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              We're selectively open to partnerships, investment conversations, and
              collaboration with operators who share our values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:partnerships@albedo.industries?subject=Partnership Inquiry"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                Partner with us
              </a>
              <a
                href="mailto:hello@albedo.industries?subject=Demo Request"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all"
              >
                Request a demo
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
