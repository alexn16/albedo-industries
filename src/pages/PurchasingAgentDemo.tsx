import { Link } from 'react-router-dom'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'

const sprintMailto = 'mailto:hello@albedo.industries?subject=FastSoftware%20Sprint%20request&body=Hi%20ALBEDO%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20FastSoftware%20Sprint%20for%20one%20internal%20workflow.'

const offers = [
  {
    supplier: 'Supplier A',
    material: 'Aluminium 5083 H32',
    thickness: '15 mm',
    quantity: '18 sheets',
    price: '4.80 €/kg',
    delivery: '3 weeks',
    status: 'Complete',
    missingInfo: 'None',
    risk: 'Low',
    action: 'Keep as balanced option',
  },
  {
    supplier: 'Supplier B',
    material: 'Aluminium 5083 H32',
    thickness: '15 mm',
    quantity: '18 sheets',
    price: '4.65 €/kg',
    delivery: '5 weeks',
    status: 'Missing certificate',
    missingInfo: 'Material certificate',
    risk: 'Medium',
    action: 'Request certificate before approval',
  },
  {
    supplier: 'Supplier C',
    material: 'Aluminium 5083 H32',
    thickness: '15 mm',
    quantity: '18 sheets',
    price: '4.95 €/kg',
    delivery: '2 weeks',
    status: 'Complete',
    missingInfo: 'None',
    risk: 'Low',
    action: 'Use if delivery is critical',
  },
]

const connections = [
  'Email inbox',
  'ERP or purchasing system',
  'Supplier database',
  'PDF and Excel documents',
  'Approval workflow',
  'Management dashboard',
]

const statusClass = (status: string) =>
  status === 'Complete'
    ? 'bg-green-50 text-green-700 border-green-100'
    : 'bg-amber-50 text-amber-700 border-amber-100'

const riskClass = (risk: string) =>
  risk === 'Low'
    ? 'bg-green-50 text-green-700'
    : 'bg-amber-50 text-amber-700'

export default function PurchasingAgentDemo() {
  const heroRef = useScrollReveal<HTMLDivElement>()
  const scenarioRef = useScrollReveal<HTMLElement>()
  const offersRef = useStaggerReveal<HTMLDivElement>()
  const analysisRef = useScrollReveal<HTMLElement>()
  const tableRef = useScrollReveal<HTMLElement>()
  const connectionsRef = useStaggerReveal<HTMLDivElement>()
  const ctaRef = useScrollReveal<HTMLElement>()

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div ref={heroRef} className="reveal max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-50 text-blue-700">
              FastSoftware Demo
            </span>
            <span className="text-sm text-zinc-400">Purchasing workflow</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-gradient">
            Purchasing Agent Demo
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed mb-8">
            A focused FastSoftware workflow for comparing supplier offers, spotting missing data and preparing purchasing decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={sprintMailto}
              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Request a FastSoftware Sprint
            </a>
            <Link
              to="/fastsoftware"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all"
            >
              Back to FastSoftware
            </Link>
          </div>
        </div>
      </section>

      <section ref={scenarioRef} className="reveal border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Scenario
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-xl text-zinc-600 leading-relaxed">
                A purchasing team receives supplier offers by email, PDF or Excel. Prices, delivery times, materials and conditions are spread across different documents. The agent helps organize the information into a structured decision view.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
                Mock Input
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Three supplier offers, normalized into one view.
              </h3>
            </div>
          </div>
          <div ref={offersRef} className="grid md:grid-cols-3 gap-5">
            {offers.map((offer) => (
              <div key={offer.supplier} className="reveal-item border border-zinc-200 rounded-xl p-5 bg-white hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <h4 className="font-semibold text-zinc-900">{offer.supplier}</h4>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${statusClass(offer.status)}`}>
                    {offer.status}
                  </span>
                </div>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4"><dt className="text-zinc-400">Material</dt><dd className="text-zinc-700 text-right">{offer.material}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-zinc-400">Thickness</dt><dd className="text-zinc-700">{offer.thickness}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-zinc-400">Quantity</dt><dd className="text-zinc-700">{offer.quantity}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-zinc-400">Price</dt><dd className="text-zinc-900 font-medium">{offer.price}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-zinc-400">Delivery</dt><dd className="text-zinc-700">{offer.delivery}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={analysisRef} className="reveal border-t border-zinc-100 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                Agent Analysis
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Best price</p>
                  <p className="text-zinc-200">Supplier B, but certificate is missing.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Fastest delivery</p>
                  <p className="text-zinc-200">Supplier C.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Lowest risk</p>
                  <p className="text-zinc-200">Supplier A or Supplier C.</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Recommended action</p>
                <p className="text-lg text-zinc-200 leading-relaxed">
                  Ask Supplier B for the missing certificate. If delivery is critical, prioritize Supplier C. If balance between price and risk matters, Supplier A is the safest option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={tableRef} className="reveal border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
              Decision Dashboard
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              A structured comparison for the purchasing decision.
            </h3>
          </div>
          <div className="overflow-x-auto border border-zinc-200 rounded-xl bg-white">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-500">Supplier</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-500">Price</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-500">Delivery</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-500">Missing info</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-500">Risk</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-500">Suggested action</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer) => (
                  <tr key={offer.supplier} className="border-b border-zinc-100 last:border-b-0">
                    <td className="px-4 py-3 font-medium text-zinc-900">{offer.supplier}</td>
                    <td className="px-4 py-3 text-zinc-600">{offer.price}</td>
                    <td className="px-4 py-3 text-zinc-600">{offer.delivery}</td>
                    <td className="px-4 py-3 text-zinc-600">{offer.missingInfo}</td>
                    <td className="px-4 py-3"><span className={`text-xs px-2 py-1 rounded-full font-medium ${riskClass(offer.risk)}`}>{offer.risk}</span></td>
                    <td className="px-4 py-3 text-zinc-600">{offer.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
              What This Could Connect To
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              The demo is static. The workflow can connect to real company systems later.
            </h3>
          </div>
          <div ref={connectionsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {connections.map((connection) => (
              <div key={connection} className="reveal-item border border-zinc-200 rounded-xl p-5 bg-white">
                <p className="font-medium text-zinc-900">{connection}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="reveal border-t border-zinc-100 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Start with one purchasing workflow.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              FastSoftware can begin with a single recurring purchasing process and expand into a broader internal tool over time.
            </p>
            <a
              href={sprintMailto}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors"
            >
              Request a FastSoftware Sprint
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
