import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 animate-fade-in">
            Real systems for real infrastructure.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed animate-fade-in animation-delay-100">
            ALBEDO Industries builds software that turns overlooked assets into working infrastructure.
            Urban parking. Daily fitness decisions. Global supply chain visibility.
            We focus on clarity, measurable impact, and long-term value.
          </p>
        </div>
      </section>

      {/* What We Are Section */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Why This Matters
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                Cities have unused parking that could reduce traffic. Fitness apps assume perfect lives
                instead of adapting to real constraints. Global sourcing teams juggle spreadsheets
                to coordinate complex products across continents.
              </p>
              <p>
                ALBEDO builds the systems layer that makes these problems tractable. We don't add
                more complexity — we make existing assets and workflows more visible, more accessible,
                and more useful. Each product operates independently but shares a focus on structured,
                accountable systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Model Section */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            Operating Model
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
              <h3 className="text-lg font-medium mb-3">Run as independent products</h3>
              <p className="text-zinc-600 leading-relaxed">
                Each product operates with its own identity, user base, and business model.
                They share infrastructure and learnings, but succeed or fail on their own
                merits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Why Now
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                The cost of building and distributing software has dropped significantly.
                Cloud infrastructure, open-source tooling, and modern frameworks mean small
                teams can build products that previously required large organizations.
              </p>
              <p>
                At the same time, many categories remain underserved by thoughtful software.
                Enterprise solutions are often bloated and expensive. Consumer apps optimize
                for engagement over utility. There's room for focused products that do fewer
                things well and respect their users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
              Current Portfolio
            </h2>
            <Link
              to="/projects"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group block bg-white border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    project.status === 'Live'
                      ? 'bg-green-50 text-green-700'
                      : project.status === 'Building'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-zinc-100 text-zinc-600'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-zinc-400">{project.category}</span>
                </div>
                <h3 className="text-lg font-medium mb-2 group-hover:text-zinc-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.capabilities.slice(0, 2).map((cap, i) => (
                    <span key={i} className="text-xs text-zinc-400 bg-zinc-50 px-2 py-0.5 rounded">
                      {cap}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signals Section */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            Current Signals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-l-2 border-green-200 pl-4">
              <p className="text-sm text-zinc-400 mb-1">ALB Parking</p>
              <p className="font-medium text-zinc-900">Live</p>
              <p className="text-sm text-zinc-500 mt-1">Booking + QR access in initial markets. Charging Wall in development.</p>
            </div>
            <div className="border-l-2 border-blue-200 pl-4">
              <p className="text-sm text-zinc-400 mb-1">Ardyn Fitness</p>
              <p className="font-medium text-zinc-900">Building</p>
              <p className="text-sm text-zinc-500 mt-1">Closed beta. Equipment library and daily workout engine.</p>
            </div>
            <div className="border-l-2 border-blue-200 pl-4">
              <p className="text-sm text-zinc-400 mb-1">Germet</p>
              <p className="font-medium text-zinc-900">Building</p>
              <p className="text-sm text-zinc-500 mt-1">Component modeling and supplier comparison in pilot.</p>
            </div>
            <div className="border-l-2 border-blue-200 pl-4">
              <p className="text-sm text-zinc-400 mb-1">Foreman</p>
              <p className="font-medium text-zinc-900">In pilot</p>
              <p className="text-sm text-zinc-500 mt-1">Testing with 15 construction teams</p>
            </div>
            <div className="border-l-2 border-blue-200 pl-4">
              <p className="text-sm text-zinc-400 mb-1">Aperta</p>
              <p className="font-medium text-zinc-900">In pilot</p>
              <p className="text-sm text-zinc-500 mt-1">8 restaurant partners onboarded</p>
            </div>
            <div className="border-l-2 border-blue-200 pl-4">
              <p className="text-sm text-zinc-400 mb-1">Alphaclaim</p>
              <p className="font-medium text-zinc-900">Building</p>
              <p className="text-sm text-zinc-500 mt-1">Brief generation and delivery system</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Work with us
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              We're selectively open to partnerships, investment conversations, and
              collaboration with operators who share our values. If you're building
              something meaningful or want to learn more about what we're doing,
              we'd like to hear from you.
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
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-white transition-colors"
              >
                Request a demo
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
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
