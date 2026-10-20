import { useState, useSyncExternalStore, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { contactEmail, divisions } from '../data/divisions'

const subscribe = () => () => {}
const clientSnapshot = () => true
const serverSnapshot = () => false

const collaborations = ['Investors', 'Data center operators', 'Landowners', 'Industrial & development partners', 'Industrial partnership', 'Research & demonstrator', 'Prototype & manufacturing', 'Workflow evaluation', 'Other enquiry']

/** A local email composer, deliberately not a message-delivery endpoint. */
export default function EnquiryComposer() {
  const interactive = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot)
  const [query] = useSearchParams()
  const [division, setDivision] = useState(() => divisions.some(item => item.id === query.get('division')) ? query.get('division')! : '')
  const [collaboration, setCollaboration] = useState(() => collaborations.includes(query.get('collaboration') ?? '') ? query.get('collaboration')! : '')
  const [draft, setDraft] = useState('')
  const [status, setStatus] = useState('')
  const [emailHref, setEmailHref] = useState('')

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const divisionName = divisions.find(item => item.id === division)?.name ?? 'General enquiry'
    const message = `Hello Albedo,\n\nName: ${String(data.get('name')).trim()}\nCompany: ${String(data.get('company')).trim()}\nProfessional email: ${String(data.get('email')).trim()}\nDivision: ${divisionName}\nCollaboration: ${collaboration}\n\n${String(data.get('message')).trim()}\n`
    setDraft(message)
    setEmailHref(`mailto:${contactEmail}?subject=${encodeURIComponent(`${divisionName} — ${collaboration}`)}&body=${encodeURIComponent(message)}`)
    setStatus('Your draft is ready below. Nothing has been sent. Open it in your email app or copy it into your email service.')
  }
  async function copy(text: string, success: string) {
    try { await navigator.clipboard.writeText(text); setStatus(success) }
    catch { setStatus('Copy is unavailable in this browser. Select the address or draft below and copy it manually.') }
  }
  function changed() {
    // Never offer a stale draft after the visitor edits their information.
    setDraft(''); setEmailHref(''); setStatus('')
  }
  return <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
    <div><h3 className="text-2xl font-semibold">Prepare a focused enquiry.</h3><p id="enquiry-explanation" className="mt-4 leading-relaxed text-zinc-600">This tool prepares an email on your device. It does not submit a message, upload your details or save a draft on this website. You choose whether to send it through your email service.</p><p className="mt-4 text-sm leading-relaxed text-zinc-600">Start with non-confidential context. Please leave out financial records, identification documents and sensitive project details.</p><p className="mt-6 break-all font-semibold">{contactEmail}</p><button type="button" className="company-text-link mt-2" onClick={() => void copy(contactEmail, 'Email address copied.')}>Copy email address</button><p className="mt-6 text-sm leading-relaxed text-zinc-600">Albedo uses enquiries to assess and respond to your request. Read the <Link to="/privacy" className="underline underline-offset-4">privacy notice</Link> before emailing. No marketing subscription is created.</p></div>
    <form onSubmit={prepare} onChange={changed} aria-describedby="enquiry-explanation" className="enquiry-form"><noscript><p className="mb-5 text-sm">Email preparation needs JavaScript. Use the email address above to contact Albedo directly.</p></noscript><fieldset disabled={!interactive} className="grid min-w-0 gap-5 sm:grid-cols-2"><legend className="sr-only">Enquiry email details</legend>
      <label>Name <span className="font-normal">(required)</span><input name="name" autoComplete="name" required maxLength={100} pattern=".*\S.*" /></label>
      <label>Company <span className="font-normal">(required)</span><input name="company" autoComplete="organization" required maxLength={150} pattern=".*\S.*" /></label>
      <label className="sm:col-span-2">Professional email <span className="font-normal">(required)</span><input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>Division of interest<select name="division" required value={division} onChange={event => setDivision(event.target.value)}><option value="" disabled>Select a division</option>{divisions.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}<option value="general">General enquiry</option></select></label>
      <label>Type of collaboration<select name="collaboration" required value={collaboration} onChange={event => setCollaboration(event.target.value)}><option value="" disabled>Select a topic</option>{collaborations.map(item => <option key={item}>{item}</option>)}</select></label>
      <label className="sm:col-span-2">Short message <span className="font-normal">(required, up to 1,000 characters)</span><textarea name="message" rows={5} required minLength={20} maxLength={1000} placeholder="Your project or capability, relevant location and the next step you would find useful." /></label>
      <div className="sm:col-span-2"><button type="submit" className="company-button">Prepare enquiry email <span aria-hidden="true">→</span></button><p className="mt-3 text-xs leading-relaxed text-zinc-600">Nothing is sent when you select this button.</p></div>
      <p className="text-sm leading-relaxed sm:col-span-2" role="status" aria-live="polite">{status}</p>
      {draft && <div className="border border-zinc-300 bg-white p-5 sm:col-span-2"><label>Your email draft<textarea rows={12} value={draft} readOnly /></label><div className="company-actions mt-5"><a href={emailHref} className="company-button">Open email app</a><button type="button" className="company-text-link" onClick={() => void copy(draft, 'Draft copied. Paste it into your email service and send it to Albedo when ready.')}>Copy message</button></div><p className="mt-4 text-sm text-zinc-600">No email app configured? Copy the message and send it to {contactEmail} using your preferred email service.</p></div>}
    </fieldset></form>
  </div>
}
