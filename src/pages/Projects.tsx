import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Software products we're building, operating, or exploring. Each one addresses
            a real problem we've observed and aims to provide lasting value to its users.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="space-y-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group block border border-zinc-200 rounded-lg p-6 md:p-8 hover:border-zinc-300 hover:shadow-sm transition-all"
              >
                <div className="md:flex md:items-start md:justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        project.status === 'Live'
                          ? 'bg-green-50 text-green-700'
                          : project.status === 'Building'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-zinc-100 text-zinc-600'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-sm text-zinc-400">{project.category}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-zinc-600 transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-zinc-600 leading-relaxed mb-4 md:mb-0">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-zinc-400 group-hover:text-zinc-600 transition-colors">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Approach */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              We take a portfolio approach to product development. Some products are live and
              generating revenue. Others are actively being built. A few remain in the concept
              stage, being refined until they're ready for development.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              This allows us to balance immediate operational needs with longer-term product
              exploration. Not every idea becomes a product, and not every product succeeds.
              The structure lets us learn and adjust without betting everything on a single outcome.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
