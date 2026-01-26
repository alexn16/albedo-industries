import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Support() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Support
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Need help with one of our products? We're here to assist. Select your product
            below or reach out directly.
          </p>
        </div>
      </section>

      {/* Product Selector */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-8">
            Select a Product
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors"
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
                </div>
                <h3 className="text-lg font-medium mb-2">{project.name}</h3>
                <p className="text-sm text-zinc-500 mb-4">{project.tagline}</p>
                <a
                  href={`mailto:support@albedo.industries?subject=${encodeURIComponent(`${project.name} Support Request`)}`}
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Contact {project.name} Support
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
                General Inquiries
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                For questions about ALBEDO Industries, partnership opportunities, or anything
                that doesn't fit into product-specific support, reach out to our general inbox.
              </p>
              <a
                href="mailto:hello@albedo.industries"
                className="text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                hello@albedo.industries
              </a>
            </div>
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
                Product Support
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                For help with a specific product, including technical issues, account questions,
                or feature requests, please use the product-specific contact above or email
                our support team directly.
              </p>
              <a
                href="mailto:support@albedo.industries"
                className="text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                support@albedo.industries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bug Reporting */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
              Reporting Bugs
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Found something that's not working correctly? We genuinely appreciate bug reports.
              Good bug reports help us improve faster. When reporting an issue, please include:
            </p>
            <ul className="space-y-3 text-zinc-600 mb-8">
              <li className="flex items-start">
                <span className="text-zinc-400 mr-3">1.</span>
                <span>Which product you're using and the version if you know it</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 mr-3">2.</span>
                <span>What you were trying to do when the problem occurred</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 mr-3">3.</span>
                <span>What you expected to happen versus what actually happened</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 mr-3">4.</span>
                <span>Steps to reproduce the issue, if possible</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 mr-3">5.</span>
                <span>Screenshots or screen recordings if they help explain the problem</span>
              </li>
            </ul>
            <a
              href="mailto:bugs@albedo.industries"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
            >
              Report a Bug
            </a>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
              A Note on Response Times
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              We're a small team, and we read every message personally. Most emails receive
              a response within 1-2 business days. During busy periods or product launches,
              it may take slightly longer.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              We prioritize urgent issues affecting your ability to use our products. If
              something is critically broken, please include "Urgent" in your subject line
              and we'll do our best to respond quickly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ placeholder */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium mb-2">Looking for legal information?</h2>
              <p className="text-zinc-600">
                Review our privacy policy, terms of service, and security practices.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/privacy"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/security"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
