import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Projects
          </Link>
        </div>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
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
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            {project.name}
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            {project.tagline}
          </p>
          {(project.website || project.app) && (
            <div className="flex gap-4 mt-8">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
                >
                  Visit Website
                </a>
              )}
              {project.app && (
                <a
                  href={project.app}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
                >
                  Get the App
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                The Problem
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Our Solution
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                What Makes It Different
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.differentiator}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Who It's For
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.targetUsers}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Where We're Headed
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium mb-2">Questions about {project.name}?</h2>
              <p className="text-zinc-600">
                We're happy to discuss this product in more detail.
              </p>
            </div>
            <Link
              to="/support"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-white transition-colors whitespace-nowrap"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
