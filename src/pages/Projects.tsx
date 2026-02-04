import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/projects'

type FilterType = 'all' | 'Consumer' | 'B2B'
type StatusFilter = 'all' | 'Live' | 'Building' | 'Concept'

export default function Projects() {
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')

  // Separate parent products from child modules
  const parentProjects = projects.filter((p) => !p.parentSlug)
  const getChildModules = (parentSlug: string) =>
    projects.filter((p) => p.parentSlug === parentSlug)

  const filteredProjects = parentProjects.filter((project) => {
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    return matchesCategory && matchesStatus
  })

  const getStageDescription = (status: string) => {
    switch (status) {
      case 'Live':
        return 'In market, serving users'
      case 'Building':
        return 'Active development, early pilots'
      case 'Concept':
        return 'Research and validation'
      default:
        return ''
    }
  }

  const renderProjectCard = (project: Project, isModule = false) => (
    <div
      key={project.slug}
      className={`border border-zinc-200 rounded-lg hover:border-zinc-300 hover:shadow-sm transition-all ${
        isModule ? 'p-4 md:p-5 ml-4 md:ml-6 border-l-2 border-l-zinc-300' : 'p-6 md:p-8'
      }`}
    >
      <div className={`${isModule ? '' : 'md:flex md:items-start md:justify-between gap-8'}`}>
        <div className="flex-1">
          {/* Status and Category */}
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              project.status === 'Live'
                ? 'bg-green-50 text-green-700'
                : project.status === 'Building'
                ? 'bg-blue-50 text-blue-700'
                : 'bg-zinc-100 text-zinc-600'
            }`}>
              {project.status}
            </span>
            {!isModule && (
              <>
                <span className="text-sm text-zinc-400">{project.category}</span>
                <span className="text-xs text-zinc-400 hidden sm:inline">
                  {getStageDescription(project.status)}
                </span>
              </>
            )}
            {isModule && (
              <span className="text-xs text-zinc-400">Module</span>
            )}
          </div>

          {/* Name and Positioning */}
          <h2 className={`font-medium mb-2 ${isModule ? 'text-lg' : 'text-xl md:text-2xl'}`}>
            {project.name}
          </h2>
          <p className={`text-zinc-600 leading-relaxed ${isModule ? 'text-sm mb-3' : 'mb-4'}`}>
            {project.positioning}
          </p>

          {/* Capabilities */}
          {!isModule && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.capabilities.map((cap, i) => (
                <span
                  key={i}
                  className="text-xs text-zinc-500 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100"
                >
                  {cap}
                </span>
              ))}
            </div>
          )}

          {/* Who it's for (parent products only) */}
          {!isModule && (
            <p className="text-sm text-zinc-500 mb-4">
              <span className="font-medium text-zinc-600">For:</span>{' '}
              {project.targetUsers.split('.')[0]}.
            </p>
          )}
        </div>

        {/* Actions */}
        <div className={`flex gap-3 ${isModule ? 'mt-3' : 'flex-col md:items-end mt-4 md:mt-0'}`}>
          <Link
            to={project.dedicatedPage || `/projects/${project.slug}`}
            className={`inline-flex items-center justify-center bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors ${
              isModule ? 'px-4 py-2' : 'px-5 py-2.5'
            }`}
          >
            {isModule ? 'Details' : 'View details'}
          </Link>
          {!isModule && (
            <Link
              to={project.dedicatedPage || `/projects/${project.slug}#memo`}
              className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {project.dedicatedPage ? 'Learn more' : 'Read the memo'}
              <svg
                className="w-4 h-4 ml-1"
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
            </Link>
          )}
        </div>
      </div>
    </div>
  )

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

      {/* Filters */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">Category:</span>
              <div className="flex gap-1">
                {(['all', 'Consumer', 'B2B'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      categoryFilter === cat
                        ? 'bg-zinc-900 text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">Stage:</span>
              <div className="flex gap-1">
                {(['all', 'Live', 'Building', 'Concept'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      statusFilter === status
                        ? 'bg-zinc-900 text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {status === 'all' ? 'All' : status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="space-y-8">
            {filteredProjects.map((project) => {
              const childModules = getChildModules(project.slug)
              const hasModules = childModules.length > 0

              return (
                <div key={project.slug} className="space-y-3">
                  {/* Parent product card */}
                  {renderProjectCard(project)}

                  {/* Child modules */}
                  {hasModules && (
                    <div className="space-y-3">
                      <p className="text-xs text-zinc-400 uppercase tracking-wider ml-4 md:ml-6 mt-4">
                        Available modules (can be adopted separately)
                      </p>
                      {childModules.map((module) => renderProjectCard(module, true))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500">No projects match the selected filters.</p>
              <button
                onClick={() => {
                  setCategoryFilter('all')
                  setStatusFilter('all')
                }}
                className="text-sm text-blue-600 hover:text-blue-700 mt-2"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Approach */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Portfolio Approach
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                We take a portfolio approach to product development. Some products are live and
                generating revenue. Others are actively being built. A few remain in the concept
                stage, being refined until they're ready for development.
              </p>
              <p>
                This allows us to balance immediate operational needs with longer-term product
                exploration. Not every idea becomes a product, and not every product succeeds.
                The structure lets us learn and adjust without betting everything on a single outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stages Explained */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            Development Stages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-green-200 pl-4">
              <h3 className="font-medium text-zinc-900 mb-2">Live</h3>
              <p className="text-sm text-zinc-600">
                Product is in market, serving real users. Revenue-generating or on clear path
                to sustainability. Active maintenance and feature development.
              </p>
            </div>
            <div className="border-l-2 border-blue-200 pl-4">
              <h3 className="font-medium text-zinc-900 mb-2">Building</h3>
              <p className="text-sm text-zinc-600">
                Product is in active development. May have early pilots or beta users. Core
                features being built and validated. Not yet generally available.
              </p>
            </div>
            <div className="border-l-2 border-zinc-200 pl-4">
              <h3 className="font-medium text-zinc-900 mb-2">Concept</h3>
              <p className="text-sm text-zinc-600">
                Problem validated, solution being designed. User research in progress.
                May not proceed to development if assumptions don't hold.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
