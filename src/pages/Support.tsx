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
            Need help with one of our products? We're here to assist. Choose the most
            relevant pathway below to get the fastest response.
          </p>
        </div>
      </section>

      {/* Support Pathways */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-8">
            How Can We Help?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* General Inquiries */}
            <div className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors">
              <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">General Inquiries</h3>
              <p className="text-sm text-zinc-600 mb-4">
                Questions about ALBEDO Industries, our approach, or anything that doesn't fit
                another category.
              </p>
              <a
                href="mailto:hello@albedo.industries"
                className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                hello@albedo.industries
              </a>
            </div>

            {/* Product Support */}
            <div className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Product Support</h3>
              <p className="text-sm text-zinc-600 mb-4">
                Technical issues, account questions, feature requests, or help using any
                of our products.
              </p>
              <a
                href="mailto:support@albedo.industries"
                className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                support@albedo.industries
              </a>
            </div>

            {/* Partnerships & Investors */}
            <div className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Partnerships & Investors</h3>
              <p className="text-sm text-zinc-600 mb-4">
                Business development, partnership proposals, or investment inquiries
                about ALBEDO or specific products.
              </p>
              <a
                href="mailto:partnerships@albedo.industries"
                className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                partnerships@albedo.industries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product-Specific Support */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-8">
            Product-Specific Support
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-white border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors"
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
                <div className="space-y-2">
                  <a
                    href={`mailto:support@albedo.industries?subject=${encodeURIComponent(`${project.name} Support Request`)}`}
                    className="block text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Email support
                  </a>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="block text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
                  >
                    View product details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bug Reporting */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Reporting Bugs
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-zinc-600 leading-relaxed mb-6">
                Found something that's not working correctly? We genuinely appreciate bug reports.
                Good bug reports help us improve faster. To help us investigate efficiently, please include:
              </p>
              <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 mb-8">
                <h3 className="font-medium mb-4">What to include in your bug report:</h3>
                <ul className="space-y-3 text-zinc-600">
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-3 font-medium">1.</span>
                    <span><strong className="text-zinc-900">Product & version</strong> - Which product, and the version number if visible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-3 font-medium">2.</span>
                    <span><strong className="text-zinc-900">What you were doing</strong> - The action you were trying to perform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-3 font-medium">3.</span>
                    <span><strong className="text-zinc-900">Expected vs actual</strong> - What should have happened vs what did happen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-3 font-medium">4.</span>
                    <span><strong className="text-zinc-900">Steps to reproduce</strong> - How we can recreate the issue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-3 font-medium">5.</span>
                    <span><strong className="text-zinc-900">Screenshots/recordings</strong> - Visual evidence if it helps explain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-3 font-medium">6.</span>
                    <span><strong className="text-zinc-900">Device & browser</strong> - Your operating system and browser version</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:bugs@albedo.industries"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
                >
                  Report via email
                </a>
                <a
                  href="https://github.com/albedo-industries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
                >
                  Report on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Response Times
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="border-l-2 border-green-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-1">Urgent issues</h3>
                  <p className="text-sm text-zinc-600">Within 24 hours</p>
                  <p className="text-xs text-zinc-400 mt-1">Include "Urgent" in subject line</p>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-1">General support</h3>
                  <p className="text-sm text-zinc-600">1-2 business days</p>
                  <p className="text-xs text-zinc-400 mt-1">Most inquiries</p>
                </div>
                <div className="border-l-2 border-zinc-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-1">Feature requests</h3>
                  <p className="text-sm text-zinc-600">Within 1 week</p>
                  <p className="text-xs text-zinc-400 mt-1">Acknowledgment + review</p>
                </div>
                <div className="border-l-2 border-zinc-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-1">Partnership inquiries</h3>
                  <p className="text-sm text-zinc-600">3-5 business days</p>
                  <p className="text-xs text-zinc-400 mt-1">Initial response</p>
                </div>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                We're a small team, and we read every message personally. During busy periods or
                product launches, response times may be slightly longer. We prioritize issues that
                affect your ability to use our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium mb-2">Looking for legal information?</h2>
              <p className="text-zinc-600">
                Review our privacy policy, terms of service, and security practices.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Terms of Service
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
