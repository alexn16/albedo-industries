import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const generalMailto = 'mailto:albparking@gmail.com?subject=ALBEDO%20Industries%20inquiry&body=Hi%20ALBEDO%2C%0A%0AI%E2%80%99d%20like%20to%20get%20in%20touch%20about%20ALBEDO%20Industries.%0A%0ATopic%3A%0A%0ACompany%20%2F%20project%3A%0A%0AThanks.'
const fastSoftwareMailto = 'mailto:albparking@gmail.com?subject=FastSoftware%20Sprint%20request&body=Hi%20ALBEDO%2C%0A%0AI%E2%80%99d%20like%20to%20discuss%20a%20FastSoftware%20Sprint%20for%20one%20internal%20workflow.%0A%0AThe%20process%20I%20want%20to%20improve%20is%3A%0A%0ACompany%20%2F%20team%3A%0A%0APreferred%20contact%20time%3A%0A%0AThanks.'

const pathways = [
  {
    title: 'General inquiries',
    description: 'Questions about ALBEDO Industries, product direction, media, or anything that does not fit another category.',
    href: generalMailto,
    label: 'Contact ALBEDO',
  },
  {
    title: 'FastSoftware inquiries',
    description: 'Discuss a FastSoftware Sprint, a purchasing agent, a lightweight ERP, dashboards, document review, or an internal workflow.',
    href: fastSoftwareMailto,
    label: 'Request a sprint',
  },
  {
    title: 'Partnerships & strategic inquiries',
    description: 'Partnerships, investors, pilots, ALB Parking, mobility infrastructure, or Albedo Nodes conversations.',
    href: generalMailto,
    label: 'Start a conversation',
  },
]

export default function Support() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Support and contact
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed mb-8">
            Use the current ALBEDO contact email for FastSoftware, ALB Parking, partnerships and general inquiries while dedicated channels are being prepared.
          </p>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5">
            <p className="text-sm text-zinc-500 mb-2">Current contact email</p>
            <a href={generalMailto} className="text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
              albparking@gmail.com
            </a>
            <p className="text-sm text-zinc-500 mt-3">
              Dedicated ALBEDO Industries contact channels are being prepared. For now, use this email for FastSoftware, ALB Parking, partnerships and general inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
              Contact pathways
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Choose the closest topic. All messages currently route through the same temporary contact email.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {pathways.map((pathway) => (
              <div key={pathway.title} className="border border-zinc-200 rounded-2xl p-6 bg-white hover:border-zinc-300 hover:shadow-sm transition-all">
                <h3 className="text-lg font-medium mb-3">{pathway.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">{pathway.description}</p>
                <a href={pathway.href} className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
                  {pathway.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
              Product-specific questions
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              If your message is about a specific ALBEDO system, include the product name and the context you need help with.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.filter((project) => !project.parentSlug).map((project) => (
              <div key={project.slug} className="bg-white border border-zinc-200 rounded-2xl p-5 hover:border-zinc-300 transition-colors">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs text-zinc-400">{project.division}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    project.status === 'Live'
                      ? 'bg-green-50 text-green-700'
                      : project.status === 'Building'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-zinc-100 text-zinc-600'
                  }`}>{project.status}</span>
                </div>
                <h3 className="font-medium mb-2">{project.name}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{project.tagline}</p>
                <div className="flex items-center gap-4 text-sm">
                  <a href={generalMailto} className="font-medium text-zinc-900 hover:text-zinc-600 transition-colors">Email</a>
                  <Link to={project.dedicatedPage || `/projects/${project.slug}`} className="text-zinc-500 hover:text-zinc-900 transition-colors">Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                What to include
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'The product or workflow you are asking about',
                  'Company / project context',
                  'What you want to improve or clarify',
                  'Preferred contact time or response channel',
                ].map((item) => (
                  <div key={item} className="border border-zinc-200 rounded-xl p-4 bg-white">
                    <p className="text-sm text-zinc-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-zinc-600 leading-relaxed">
                ALBEDO is a small team. Clear context helps us route the message and respond with useful next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium mb-2">Looking for legal information?</h2>
              <p className="text-zinc-600">
                Review our privacy policy, terms of service, and security practices.
              </p>
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Terms of Service</Link>
              <Link to="/security" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Security</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
