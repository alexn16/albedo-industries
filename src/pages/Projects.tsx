import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/projects'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'

const basePath = import.meta.env.BASE_URL || '/'

type FilterType = 'all' | 'Consumer' | 'B2B'
type StatusFilter = 'all' | 'Live' | 'Building' | 'Concept'
type DivisionFilter = 'all' | Project['division']

export default function Projects() {
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [divisionFilter, setDivisionFilter] = useState<DivisionFilter>('all')

  const heroRef = useScrollReveal<HTMLDivElement>()
  const gridRef = useStaggerReveal<HTMLDivElement>()
  const approachRef = useScrollReveal<HTMLElement>()
  const stagesRef = useScrollReveal<HTMLElement>()

  // Separate parent products from child modules
  const parentProjects = projects.filter((p) => !p.parentSlug)
  const getChildModules = (parentSlug: string) =>
    projects.filter((p) => p.parentSlug === parentSlug)

  const filteredProjects = parentProjects.filter((project) => {
    const matchesDivision = divisionFilter === 'all' || project.division === divisionFilter
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    return matchesDivision && matchesCategory && matchesStatus
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
    <Link
      key={project.slug}
      to={project.dedicatedPage || `/projects/${project.slug}`}
      className={`block border border-zinc-200 rounded-2xl bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300 ${
        isModule ? 'p-4 md:p-5 ml-4 md:ml-6 border-l-2 border-l-zinc-300' : 'reveal-item p-6 md:p-8'
      }`}
    >
      <div className={`${isModule ? '' : 'md:flex md:items-start md:justify-between gap-8'}`}>
        <div className="flex-1">
          {/* Logo + Status row */}
          <div className="flex items-center gap-3 mb-3">
            {!isModule && project.logo && (
              <img
                src={`${basePath}${project.logo}`}
                alt=""
                className="h-7 object-contain"
                loading="lazy"
              />
            )}
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
                <span className="text-sm text-zinc-400">{project.division}</span>
                <span className="text-sm text-zinc-300">/</span>
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
              {project.capabilities.slice(0, 4).map((cap, i) => (
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
            <p className="text-sm text-zinc-500">
              <span className="font-medium text-zinc-600">For:</span>{' '}
              {project.targetUsers.split('.')[0]}.
            </p>
          )}
        </div>

        {/* Arrow indicator */}
        {!isModule && (
          <div className="hidden md:flex items-center mt-4 md:mt-0">
            <svg className="w-5 h-5 text-zinc-300 group-hover:text-zinc-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      {!isModule && (
        <div className={`h-0.5 -mx-6 md:-mx-8 -mb-6 md:-mb-8 mt-6 rounded-b-lg ${
          project.status === 'Live' ? 'bg-green-400' :
          project.status === 'Building' ? 'bg-blue-400' : 'bg-zinc-200'
        } opacity-40`} />
      )}
    </Link>
  )

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div ref={heroRef} className="reveal max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6 animate-fade-in text-gradient">
            Operating map
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed animate-fade-in animation-delay-100">
            ALBEDO systems grouped by the infrastructure line they strengthen: company software, mobility systems, local compute and selected experiments.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Division</span>
              <div className="flex gap-1 flex-wrap">
                {(['all', 'FastSoftware', 'Mobility Infrastructure', 'Albedo Nodes', 'Consumer / Experiments'] as const).map((division) => (
                  <button
                    key={division}
                    onClick={() => setDivisionFilter(division)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      divisionFilter === division
                        ? 'bg-zinc-900 text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {division === 'all' ? 'All' : division}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Category</span>
              <div className="flex gap-1 flex-wrap">
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
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Stage</span>
              <div className="flex gap-1 flex-wrap">
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
          <div ref={gridRef} className="space-y-8">
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
                  setDivisionFilter('all')
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

      {/* Operating Map */}
      <section ref={approachRef} className="reveal border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Operating Map
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                This page is an operating map of ALBEDO Industries. Each product is grouped by the infrastructure line it strengthens: company software, mobility systems, local compute or selected experiments.
              </p>
              <p>
                The structure makes the commercial line clear first: FastSoftware Sprints for operational systems. Mobility and Nodes then extend the same software discipline into physical access, EV charging, vehicle security and local compute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stages Explained */}
      <section ref={stagesRef} className="reveal border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            Development Stages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-green-400 pl-4">
              <h3 className="font-medium text-zinc-900 mb-2">Live</h3>
              <p className="text-sm text-zinc-600">
                Product is in market, serving real users. Revenue-generating or on clear path
                to sustainability. Active maintenance and feature development.
              </p>
            </div>
            <div className="border-l-2 border-blue-400 pl-4">
              <h3 className="font-medium text-zinc-900 mb-2">Building</h3>
              <p className="text-sm text-zinc-600">
                Product is in active development. May have early pilots or beta users. Core
                features being built and validated. Not yet generally available.
              </p>
            </div>
            <div className="border-l-2 border-zinc-300 pl-4">
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
