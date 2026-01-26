import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 animate-fade-in">
            Building focused products for real-world problems.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed animate-fade-in animation-delay-100">
            ALBEDO Industries is an independent startup company that builds and operates
            multiple software products across consumer and B2B sectors, with a focus on
            clarity, usability, and long-term value.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            How We Work
          </h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Solve real problems</h3>
              <p className="text-zinc-600 leading-relaxed">
                Every product starts with a genuine frustration we've experienced ourselves
                or observed repeatedly in others. We don't build solutions looking for problems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Ship and improve</h3>
              <p className="text-zinc-600 leading-relaxed">
                We favor working software over perfect plans. Get something useful into
                people's hands quickly, then refine based on how they actually use it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Think in decades</h3>
              <p className="text-zinc-600 leading-relaxed">
                We're not optimizing for a quick exit. We want to build products that
                remain useful and companies that remain independent for the long haul.
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
              Our Projects
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
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {project.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement Section */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed mb-8">
              We're a small team focused on building useful software. No venture funding,
              no growth-at-all-costs mentality. Just products we believe in, built carefully
              over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                Learn more about us
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
              >
                Explore our projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
