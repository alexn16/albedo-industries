import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import MarketBrief from '../components/MarketBrief'
import BeatFlowListen from '../components/BeatFlowListen'

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
          <p className="text-xl text-zinc-600 leading-relaxed mb-2">
            {project.tagline}
          </p>
          <p className="text-lg text-zinc-500">
            {project.positioning}
          </p>

          {/* Disclaimer for Alphaclaim */}
          {project.disclaimer && (
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <span className="font-medium">Note:</span> {project.disclaimer}
              </p>
            </div>
          )}

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

      {/* Alphaclaim Market Brief Section */}
      {project.slug === 'alphaclaim' && (
        <section className="border-t border-zinc-100 bg-zinc-50/50">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  Today's Brief
                </h2>
              </div>
              <div className="md:col-span-2">
                <MarketBrief />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BeatFlow Listen Section */}
      {project.slug === 'beatflow' && (
        <section className="border-t border-zinc-100 bg-zinc-50/50">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  Listen
                </h2>
              </div>
              <div className="md:col-span-2">
                <BeatFlowListen />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Problem */}
      <section id="memo" className="border-t border-zinc-100">
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

      {/* Key Features (for projects that have them, like Aperta) */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="border-t border-zinc-100">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  Key Features
                </h2>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-4">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start text-zinc-600">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Differentiator */}
      <section className={`border-t border-zinc-100 ${project.keyFeatures ? 'bg-zinc-50/50' : ''}`}>
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

      {/* Target Users & Use Cases */}
      <section className={`border-t border-zinc-100 ${project.keyFeatures ? '' : 'bg-zinc-50/50'}`}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Who It's For
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                {project.targetUsers}
              </p>
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
                Key Use Cases
              </h3>
              <ul className="space-y-3">
                {project.useCases.map((useCase, i) => (
                  <li key={i} className="flex items-start text-zinc-600">
                    <span className="text-zinc-400 mr-3">-</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Business Model
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.businessModel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Distribution
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.distribution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Roadmap
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-8">
                <div className="border-l-2 border-green-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-2">Now</h3>
                  <p className="text-zinc-600">{project.roadmap.now}</p>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-2">Next</h3>
                  <p className="text-zinc-600">{project.roadmap.next}</p>
                </div>
                <div className="border-l-2 border-zinc-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-2">Later</h3>
                  <p className="text-zinc-600">{project.roadmap.later}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charging Wall (for ALB Parking only) */}
      {project.chargingWall && (
        <section className="border-t border-zinc-100 bg-zinc-50/50">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  Hardware Innovation
                </h2>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium text-zinc-900 mb-4">
                  {project.chargingWall.headline}
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                  {project.chargingWall.description}
                </p>
                <p className="text-sm text-zinc-500 italic">
                  {project.chargingWall.note}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trust & Safety */}
      <section className={`border-t border-zinc-100 ${!project.chargingWall ? 'bg-zinc-50/50' : ''}`}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Trust & Security
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.trustAndSafety}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Note (for BeatFlow) */}
      {project.ethicsNote && (
        <section className="border-t border-zinc-100">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  Ethics & Approach
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {project.ethicsNote}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vision */}
      <section className={`border-t border-zinc-100 ${project.ethicsNote ? 'bg-zinc-50/50' : ''}`}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Long-term Vision
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

      {/* Links & Resources */}
      <section className={`border-t border-zinc-100 ${project.ethicsNote ? '' : 'bg-zinc-50/50'}`}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Links & Resources
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg hover:border-zinc-300 hover:bg-white transition-all group"
                  >
                    <div>
                      <p className="font-medium text-zinc-900">Website</p>
                      <p className="text-sm text-zinc-500">Visit product site</p>
                    </div>
                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                <a
                  href={`mailto:hello@albedo.industries?subject=Demo Request: ${project.name}`}
                  className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg hover:border-zinc-300 hover:bg-white transition-all group"
                >
                  <div>
                    <p className="font-medium text-zinc-900">Request Demo</p>
                    <p className="text-sm text-zinc-500">Schedule a walkthrough</p>
                  </div>
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href={`mailto:investors@albedo.industries?subject=Investor Deck Request: ${project.name}`}
                  className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg hover:border-zinc-300 hover:bg-white transition-all group"
                >
                  <div>
                    <p className="font-medium text-zinc-900">Investor Deck</p>
                    <p className="text-sm text-zinc-500">Request detailed materials</p>
                  </div>
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
                <Link
                  to="/support"
                  className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg hover:border-zinc-300 hover:bg-white transition-all group"
                >
                  <div>
                    <p className="font-medium text-zinc-900">Support</p>
                    <p className="text-sm text-zinc-500">Get help with {project.name}</p>
                  </div>
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium mb-2">Questions about {project.name}?</h2>
              <p className="text-zinc-600">
                We're happy to discuss this product in more detail.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={`mailto:hello@albedo.industries?subject=Question about ${project.name}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors whitespace-nowrap"
              >
                Get in touch
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-colors whitespace-nowrap"
              >
                View all projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
