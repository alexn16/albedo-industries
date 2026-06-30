import { Link } from 'react-router-dom'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'

const sprintMailto = 'mailto:albparking@gmail.com?subject=FastSoftware%20Sprint%20request&body=Hi%20ALBEDO%2C%0A%0AI%E2%80%99d%20like%20to%20discuss%20a%20FastSoftware%20Sprint%20for%20one%20internal%20workflow.%0A%0AThe%20process%20I%20want%20to%20improve%20is%3A%0A%0ACompany%20%2F%20team%3A%0A%0APreferred%20contact%20time%3A%0A%0AThanks.'

const sprintSteps = [
  {
    step: '01',
    title: 'Map the workflow',
    description: 'We identify the real process, the people involved, the data sources, the exceptions and the decisions that slow the team down.',
  },
  {
    step: '02',
    title: 'Build the first usable system',
    description: 'We ship a focused internal tool around one bottleneck instead of starting with a large platform migration.',
  },
  {
    step: '03',
    title: 'Add agents, dashboards and integrations',
    description: 'AI agents, document review, reporting, email/order automation and integrations are added where they remove real work.',
  },
  {
    step: '04',
    title: 'Improve with real users',
    description: 'The system is refined with the operators who use it, so the software follows the workflow instead of forcing a generic process.',
  },
]

const useCases = [
  {
    title: 'Purchasing Agent',
    description: 'Reads supplier emails, compares offers, flags missing information, tracks quotes and helps prepare purchasing decisions.',
  },
  {
    title: 'Lightweight ERP',
    description: 'Centralizes orders, suppliers, materials, tasks and internal status without forcing a company into a heavy ERP migration.',
  },
  {
    title: 'Invoice & Document Review',
    description: 'Extracts data from PDFs, checks mismatches, links documents to orders and highlights issues before they become manual rework.',
  },
  {
    title: 'Operations Dashboard',
    description: 'Shows stock, projects, deadlines, pending actions and risk signals in one place for management and operations teams.',
  },
  {
    title: 'Reporting Agent',
    description: 'Generates recurring updates for management from operational data, with human review before anything becomes official.',
  },
  {
    title: 'Custom Workflow Portal',
    description: 'Turns a specific internal process into a controlled app with roles, approvals, history and clear status for every step.',
  },
]

const audience = [
  'Industrial companies',
  'Construction companies',
  'Procurement teams',
  'Warehouses',
  'Operations teams',
  'SMEs replacing Excel-heavy workflows',
  'Companies that need AI but cannot use generic tools safely',
]

const differences = [
  'We start from the real workflow, not from a generic platform.',
  'We build small, useful systems first.',
  'We use AI agents only where they remove real work.',
  'We can connect software, documents, email and physical operations.',
  'We design for maintainability and iteration.',
]

export default function FastSoftware() {
  const heroRef = useScrollReveal<HTMLDivElement>()
  const problemRef = useScrollReveal<HTMLElement>()
  const solutionRef = useScrollReveal<HTMLElement>()
  const sprintRef = useScrollReveal<HTMLElement>()
  const stepsRef = useStaggerReveal<HTMLDivElement>()
  const useCasesRef = useStaggerReveal<HTMLDivElement>()
  const audienceRef = useScrollReveal<HTMLElement>()
  const whyRef = useScrollReveal<HTMLElement>()
  const ctaRef = useScrollReveal<HTMLElement>()

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div ref={heroRef} className="reveal max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-50 text-blue-700">
              Albedo FastSoftware
            </span>
            <span className="text-sm text-zinc-400">Operational software + AI agents</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-gradient">
            Custom company software, delivered in weeks.
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed mb-5">
            Albedo FastSoftware builds lightweight ERPs, internal dashboards and AI agents around the way your company already works — without traditional software timelines.
          </p>
          <p className="text-sm text-zinc-500 mb-8">
            For companies still running critical operations through Excel, email, WhatsApp and disconnected tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={sprintMailto}
              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Request a FastSoftware Sprint
            </a>
            <a
              href="#use-cases"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all"
            >
              Explore use cases
            </a>
          </div>
        </div>
      </section>

      <section ref={problemRef} className="reveal border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                The Problem
              </h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                Most operations are still held together by spreadsheets.
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Many companies manage purchasing, stock, orders, invoices, reporting and project tracking across Excel, emails, PDFs, WhatsApp and disconnected systems. The work gets done, but visibility is delayed and the same manual steps repeat every day.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Information lives in too many places.',
                  'ERP projects are slow and expensive.',
                  'Teams repeat manual work every day.',
                  'Management lacks real-time visibility.',
                  'AI tools are not adapted to the company workflow.',
                ].map((item) => (
                  <div key={item} className="border border-zinc-200 rounded-lg p-4 bg-white">
                    <p className="text-sm text-zinc-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={solutionRef} className="reveal border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                The Solution
              </h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                FastSoftware builds the missing operational layer.
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                We design and build focused internal systems that connect data, automate repetitive work and add AI agents where they create real operational leverage.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Lightweight ERP-style tools', 'Purchasing dashboards', 'Stock and project tracking', 'Email/order automation', 'Invoice and document review', 'Reporting agents', 'Custom workflows'].map((capability) => (
                  <span key={capability} className="text-sm text-zinc-600 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg">
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={sprintRef} className="reveal border-t border-zinc-100 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
              FastSoftware Sprint
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              A focused build cycle to turn one operational bottleneck into a working internal tool.
            </h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Designed for weeks, not months. Start with one workflow, prove the system with real users and expand only after the first version is useful.
            </p>
          </div>
          <div ref={stepsRef} className="grid md:grid-cols-4 gap-4">
            {sprintSteps.map((item) => (
              <div key={item.step} className="reveal-item border border-white/10 rounded-xl p-5 bg-white/5">
                <span className="text-xs font-medium text-zinc-400">{item.step}</span>
                <h4 className="font-medium text-white mt-3 mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
              Use Cases
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Concrete systems for daily operations.
            </h3>
          </div>
          <div ref={useCasesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((item) => (
              <div key={item.title} className="reveal-item border border-zinc-200 rounded-xl p-5 bg-white hover:shadow-sm transition-shadow">
                <h4 className="font-medium text-zinc-900 mb-3">{item.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                {item.title === 'Purchasing Agent' && (
                  <Link
                    to="/fastsoftware/purchasing-agent"
                    className="inline-flex mt-4 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    View demo
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">
                Example workflow
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                See a Purchasing Agent workflow
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                Explore a static example of how FastSoftware can compare supplier offers, detect missing information and prepare a structured purchasing decision.
              </p>
            </div>
            <Link
              to="/fastsoftware/purchasing-agent"
              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors shrink-0"
            >
              View Purchasing Agent Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Start Small
              </h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                Start with one workflow.
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                You do not need to replace your ERP or rebuild your company software. Start with one manual workflow, one recurring report, one purchasing process or one document review flow. FastSoftware turns that into a working internal tool and expands only when it proves useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={audienceRef} className="reveal border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Who It Is For
              </h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
                Built for companies with real operations.
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {audience.map((item) => (
                  <div key={item} className="flex items-center border border-zinc-200 rounded-lg p-4 bg-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 mr-3 shrink-0" />
                    <span className="text-sm text-zinc-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={whyRef} className="reveal border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Why ALBEDO
              </h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
                Why FastSoftware is different.
              </h3>
              <div className="space-y-4">
                {differences.map((item) => (
                  <div key={item} className="flex items-start">
                    <span className="mt-2 mr-3 h-1.5 w-1.5 rounded-full bg-zinc-900 shrink-0" />
                    <p className="text-zinc-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="reveal border-t border-zinc-100 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Start with one workflow.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-4">
              Choose one repetitive process, one manual report or one operational bottleneck. We turn it into a working internal system and expand from there.
            </p>
            <p className="text-sm text-zinc-500 mb-8">
              Current contact: <a href={sprintMailto} className="text-zinc-300 hover:text-white transition-colors">albparking@gmail.com</a>. Dedicated ALBEDO contact channels are being prepared.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={sprintMailto}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors"
              >
                Request a FastSoftware Sprint
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/10 transition-all"
              >
                View all ALBEDO systems
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
