import { useRef, useState, type FormEvent } from 'react'

type Kind = 'capacity' | 'investor'

const customerTypes = ['Startup', 'Enterprise', 'Research', 'University', 'Public institution', 'Infrastructure provider', 'Other']
const serviceTypes = ['Rack colocation', 'Dedicated infrastructure', 'Managed AI compute', 'GPU capacity', 'Storage', 'Private cloud', 'Unsure / discuss requirements']
const partnerTypes = ['Infrastructure fund', 'Angel or private investor', 'Family office', 'Strategic industry partner', 'Energy partner', 'Landowner', 'Engineering or EPC partner', 'Equipment supplier', 'Public institution', 'Other']
const interestAreas = ['Project financing', 'Site development', 'Energy', 'Equipment', 'Construction', 'Operations', 'Customer introductions', 'Other']
const interestStrengths = ['General interest', 'Active requirement', 'Budget under review', 'Prepared to discuss an LOI', 'Existing procurement process']
const localRelationships = ['Landowner', 'Utility or energy partner', 'Fibre carrier', 'Engineering partner', 'EPC', 'Equipment supplier', 'Local authority', 'Capital partner', 'Other']
const contactUrl = 'mailto:alex@albedo-industries.com?subject=ALBEDO%20Compute%20Infrastructure%20interest'

export default function ComputeInterestForm({ kind, candidate, fundingInterest = false, locale = 'en' }: { kind: Kind; candidate?: { id: string; slug: string; name: string; country: string; countryCode: string }; fundingInterest?: boolean; locale?: 'en' | 'es' }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const submissionLocked = useRef(false)
  const endpoint = (import.meta.env.VITE_COMPUTE_INTEREST_ENDPOINT as string | undefined)?.trim()
  const registrationOpen = Boolean(endpoint)
  const statusId = `${kind}-form-status`
  const inputClass = 'mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-zinc-900 focus:border-zinc-900 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500'
  const es = locale === 'es'
  const formCopy = es ? { why: 'Por qué lo pedimos', whyCapacity: 'Para saber si la demanda justifica profundizar en esta ubicación.', whyPartner: 'Para identificar suelo, energía, fibra, ingeniería o capital relevantes.', next: 'Qué ocurre después', nextBody: 'Revisaremos la información y, si encaja con el trabajo en curso, te contactaremos para concretar detalles.', use: 'Cómo se utiliza', useBody: 'Solo para estudiar interés no vinculante. No reserva capacidad, no inicia una operación y no garantiza respuesta.', soon: 'Registro próximamente disponible', soonBody: 'El formulario está visible, pero el envío online aún no está conectado. Escríbenos si quieres hablar de Atlas.', contact: 'Contactar con Albedo', fullName: 'Nombre y apellidos', workEmail: 'Email profesional', organization: 'Empresa u organización', country: 'País', customerType: 'Tipo de cliente', desiredService: 'Necesidad principal', rackRequirement: 'Necesidad aproximada de racks', powerRequirement: 'Potencia aproximada', startDate: 'Fecha objetivo', contractDuration: 'Duración orientativa', strength: 'Nivel de interés', loi: '¿Aceptarías hablar de una carta de interés no vinculante?', role: 'Rol', partnerType: 'Tipo de socio o inversor', investmentRange: 'Rango de inversión orientativo (opcional)', interestArea: 'Área de interés', experience: 'Experiencia relevante', involvement: 'Participación prevista', localRelationship: 'Relación local', message: kind === 'capacity' ? 'Necesidad de capacidad' : 'Mensaje', residency: 'Requisitos de residencia de datos', comments: 'Comentarios adicionales', consent: 'Autorizo a Albedo Industries a tratar esta información para responder a mi manifestación de interés no vinculante. Entiendo que puedo solicitar su eliminación.', buttonClosed: 'Registro próximamente', buttonSending: 'Enviando…', buttonCapacity: 'Enviar necesidad', buttonPartner: 'Enviar interés', successTitle: 'Hemos recibido tu información.', selectOne: 'Selecciona una opción', successBody: 'Atlas sigue en fase de estudio. Esto no implica reserva, contrato, inversión ni garantía de seguimiento.', error: 'No hemos podido enviar el formulario. Inténtalo de nuevo o contacta con Albedo.' } : null

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!endpoint || submissionLocked.current) return

    submissionLocked.current = true
    setStatus('sending')
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          consent: data.consent === 'accepted',
          willingToDiscussLoi: data.willingToDiscussLoi === 'Yes',
          notifyIfOfferOpens: data.notifyIfOfferOpens === 'Yes',
          leadType: kind === 'capacity' ? 'capacity_interest' : 'investor_partner_interest',
          sourcePage: candidate ? `/infrastructure/${candidate.country.toLowerCase()}/${candidate.slug}` : '/compute-infrastructure',
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
    } catch {
      submissionLocked.current = false
      setStatus('error')
    }
  }

  const Field = ({ label, name, type = 'text', required = true, defaultValue }: { label: string; name: string; type?: string; required?: boolean; defaultValue?: string }) => (
    <label className="block text-sm font-medium">
      {label}{required && <span aria-hidden="true"> *</span>}
      <input className={inputClass} name={name} type={type} required={required} defaultValue={defaultValue} />
    </label>
  )

  const Select = ({ label, name, options }: { label: string; name: string; options: string[] }) => (
    <label className="block text-sm font-medium">
      {label} *
      <select className={inputClass} name={name} required defaultValue="">
        <option value="" disabled>{formCopy?.selectOne ?? 'Select one'}</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  )

  return (
    <div className="mt-8">
      <div className="mb-6 grid gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-sm sm:grid-cols-3">
        <div><p className="font-medium">{formCopy?.why ?? 'Why we ask'}</p><p className="mt-1 text-zinc-600">{formCopy ? (kind === 'capacity' ? formCopy.whyCapacity : formCopy.whyPartner) : (kind === 'capacity' ? 'To test whether requirements justify deeper candidate research.' : 'To identify relevant capital, site, energy and delivery expertise.')}</p></div>
        <div><p className="font-medium">{formCopy?.next ?? 'What happens next'}</p><p className="mt-1 text-zinc-600">{formCopy?.nextBody ?? 'Albedo reviews submissions during research and may ask for clarification. No standard response time is promised.'}</p></div>
        <div><p className="font-medium">{formCopy?.use ?? 'How it is used'}</p><p className="mt-1 text-zinc-600">{formCopy?.useBody ?? 'For non-binding assessment and follow-up only—not approval, allocation or a transaction.'}</p></div>
      </div>
      {!registrationOpen && (
        <aside className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-5" role="status">
          <p className="font-semibold text-amber-950">{formCopy?.soon ?? 'Registration opening soon'}</p>
          <p className="mt-2 text-sm leading-relaxed text-amber-900">
            {formCopy?.soonBody ?? 'This form is available as a preview, but online registration is not yet connected and no information entered here will be stored.'}
          </p>
          <a className="mt-3 inline-flex text-sm font-medium text-amber-950 underline underline-offset-4" href={contactUrl}>
            {formCopy?.contact ?? 'Contact Albedo about compute infrastructure'}
          </a>
        </aside>
      )}

      <form onSubmit={submit} className="grid sm:grid-cols-2 gap-5" aria-label={formCopy ? (kind === 'capacity' ? 'Formulario de necesidad de capacidad' : 'Formulario de colaboración o financiación') : (kind === 'capacity' ? 'Capacity interest form' : 'Investor and partner interest form')} aria-describedby={statusId}>
        <fieldset disabled={!registrationOpen} className="contents">
          <legend className="sr-only">{formCopy ? (kind === 'capacity' ? 'Necesidad de capacidad' : 'Colaboración o financiación') : (kind === 'capacity' ? 'Capacity requirements' : 'Investment or partnership details')}</legend>
          <div className="absolute -left-[10000px]" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
          {candidate && <><input type="hidden" name="candidateId" value={candidate.id} /><input type="hidden" name="candidateSlug" value={candidate.slug} /><input type="hidden" name="countryCode" value={candidate.countryCode} /></>}
          {candidate && <div className="sm:col-span-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm"><span className="text-zinc-500">{formCopy ? 'Ubicación en estudio' : 'Preferred research candidate'}</span><p className="mt-1 font-medium">{candidate.id} · {candidate.name}, {candidate.country}</p></div>}
          <Field label={formCopy?.fullName ?? 'Full name'} name="fullName" />
          <Field label={formCopy?.workEmail ?? (kind === 'capacity' ? 'Work email' : 'Professional email')} name="email" type="email" />
          <Field label={formCopy?.organization ?? (kind === 'capacity' ? 'Company or organization' : 'Organization')} name="organization" />
          {kind === 'capacity' ? (
            <>
              <Field label={formCopy?.country ?? 'Country'} name="country" defaultValue={candidate?.country} />
              <Select label={formCopy?.customerType ?? 'Customer type'} name="customerType" options={customerTypes} />
              <Select label={formCopy?.desiredService ?? 'Desired service'} name="desiredService" options={serviceTypes} />
              <Field label={formCopy?.rackRequirement ?? 'Approximate rack requirement'} name="rackRequirement" />
              <Field label={formCopy?.powerRequirement ?? 'Approximate power requirement'} name="powerRequirement" required={false} />
              <Field label={formCopy?.startDate ?? 'Desired start date'} name="startDate" type="date" />
              <Field label={formCopy?.contractDuration ?? 'Contract-duration preference'} name="contractDuration" />
              {candidate && <><Select label={formCopy?.strength ?? 'Interest strength'} name="interestStrength" options={interestStrengths} /><Select label={formCopy?.loi ?? 'Willing to discuss a non-binding LOI'} name="willingToDiscussLoi" options={['No', 'Yes']} /></>}
            </>
          ) : (
            <>
              <Field label={formCopy?.role ?? 'Role'} name="role" />
              <Select label={formCopy?.partnerType ?? 'Investor or partner type'} name="partnerType" options={partnerTypes} />
              <Field label={formCopy?.investmentRange ?? 'Typical investment range (optional, non-binding)'} name="investmentRange" required={false} />
              <Select label={formCopy?.interestArea ?? 'Area of interest'} name="interestArea" options={interestAreas} />
              <Field label={formCopy?.experience ?? 'Relevant experience'} name="experience" />
              <Field label={formCopy?.involvement ?? 'Preferred involvement'} name="involvement" />
              {candidate && !fundingInterest && <Select label={formCopy?.localRelationship ?? 'Local relationship type'} name="localRelationshipType" options={localRelationships} />}
              {fundingInterest && <><Field label="Country of residence or establishment" name="investorCountry" required={false} defaultValue={candidate?.country}/><Select label="Investor self-identification" name="investorProfile" options={['Professional investor', 'Retail investor', 'Unsure']} /><Select label="Preferred instrument" name="preferredInstrument" options={['Equity', 'Project debt', 'Revenue participation', 'Unsure']} /><Select label="Preferred stage" name="preferredStage" options={['Research', 'Feasibility', 'Development', 'Construction', 'Unsure']} /><Select label="Notify me if a regulated offer opens" name="notifyIfOfferOpens" options={['No', 'Yes']} /></>}
            </>
          )}
          <label className="sm:col-span-2 text-sm font-medium">
            {formCopy?.message ?? (kind === 'capacity' ? 'Workload description' : 'Message')} *
            <textarea className={inputClass} rows={4} name="message" required />
          </label>
          {kind === 'capacity' && (
            <>
              <Field label={formCopy?.residency ?? 'Data residency requirements'} name="dataResidency" />
              <label className="sm:col-span-2 text-sm font-medium">{formCopy?.comments ?? 'Additional comments'}<textarea className={inputClass} rows={3} name="comments" /></label>
            </>
          )}
          <label className="sm:col-span-2 flex gap-3 text-sm text-zinc-600">
            <input type="checkbox" name="consent" value="accepted" required className="mt-1 size-4" />
            <span>{formCopy?.consent ?? 'I consent to Albedo Industries processing this information to respond to my non-binding expression of interest. I understand I may request deletion of my data.'} *</span>
          </label>
          {fundingInterest && <p className="sm:col-span-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">This form records non-binding interest only. It is not an investment application, subscription, offer or commitment.</p>}
        </fieldset>

        <div className="sm:col-span-2">
          <button disabled={!registrationOpen || status === 'sending'} className="rounded-lg bg-zinc-950 text-white px-6 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:bg-zinc-400">
            {!registrationOpen ? (formCopy?.buttonClosed ?? 'Registration opening soon') : status === 'sending' ? (formCopy?.buttonSending ?? 'Sending…') : kind === 'capacity' ? (formCopy?.buttonCapacity ?? 'Register demand') : (formCopy?.buttonPartner ?? 'Register investment or partnership interest')}
          </button>
        </div>

        <div id={statusId} className="sm:col-span-2 text-sm" role="status" aria-live="polite">
          {status === 'success' && (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950">
              <p className="font-semibold">{formCopy?.successTitle ?? 'Your non-binding registration has been received.'}</p>
              <p className="mt-2 leading-relaxed">{formCopy?.successBody ?? 'The project remains in assessment. No future capacity, investment or partnership is guaranteed, and Albedo may contact you for further information about your requirements or interest.'}</p>
            </div>
          )}
          {status === 'error' && <p className="text-red-700">{formCopy?.error ?? 'We could not submit your registration. No successful receipt has been recorded. Please try again or'} <a className="font-medium underline underline-offset-4" href={contactUrl}>{formCopy?.contact ?? 'contact Albedo'}</a>.</p>}
        </div>
      </form>
    </div>
  )
}
