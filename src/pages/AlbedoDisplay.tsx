import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DisplayAssetFigure from '../components/display/DisplayAssetFigure'
import { displayAssets } from '../data/albedoDisplayAssets'
import { displaySectionHref, displaySections, resolveDisplaySection, type DisplaySection } from '../routes/displaySections'

const pilotEmail = 'alex@albedo-industries.com'

type PilotFields = {
  name: string
  email: string
  organisation: string
  role: string
  useCase: string
  quantity: string
  timeline: string
  notes: string
  website: string
}

const emptyFields: PilotFields = { name: '', email: '', organisation: '', role: '', useCase: '', quantity: '', timeline: '', notes: '', website: '' }

function useDisplayMetadata() {
  useEffect(() => {
    const title = 'Albedo Display — A phone-powered display for persistent information'
    const description = 'Albedo Display is a phone-powered concept for calm, persistent workplace information. Apply to help test the first operational pilot.'
    const canonical = 'https://www.albedo-industries.com/#/display'
    const image = 'https://www.albedo-industries.com/media/albedo-display/ChatGPT%20Image%20Sep%205%2C%202026%2C%2008_54_11%20AM.png'
    const upsert = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null
      if (!element) { element = document.createElement(attributes.rel ? 'link' : 'meta'); document.head.appendChild(element) }
      Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
    }
    document.title = title
    upsert('meta[name="description"]', { name: 'description', content: description })
    upsert('link[rel="canonical"]', { rel: 'canonical', href: canonical })
    upsert('meta[property="og:title"]', { property: 'og:title', content: title })
    upsert('meta[property="og:description"]', { property: 'og:description', content: description })
    upsert('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsert('meta[property="og:image"]', { property: 'og:image', content: image })
    upsert('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsert('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsert('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
    const jsonLd = document.createElement('script')
    jsonLd.type = 'application/ld+json'; jsonLd.dataset.displayMetadata = 'true'
    jsonLd.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Product', name: 'Albedo Display', description, brand: { '@type': 'Organization', name: 'Albedo Industries', url: 'https://www.albedo-industries.com/' }, url: canonical })
    document.head.appendChild(jsonLd)
    return () => {
      jsonLd.remove()
      document.title = 'ALBEDO Industries — Intelligent infrastructure for software, mobility and compute'
      upsert('meta[name="description"]', { name: 'description', content: 'ALBEDO Industries develops practical software, mobility and local-compute systems and originates selected international opportunities for AI infrastructure.' })
      upsert('link[rel="canonical"]', { rel: 'canonical', href: 'https://www.albedo-industries.com/' })
      upsert('meta[property="og:title"]', { property: 'og:title', content: 'ALBEDO Industries' })
      upsert('meta[property="og:description"]', { property: 'og:description', content: 'Software, mobility, local compute and evidence-led origination of selected AI infrastructure opportunities.' })
      upsert('meta[property="og:url"]', { property: 'og:url', content: 'https://www.albedo-industries.com/' })
      upsert('meta[property="og:image"]', { property: 'og:image', content: 'https://www.albedo-industries.com/favicon.svg' })
    }
  }, [])
}

function PilotForm() {
  const [fields, setFields] = useState<PilotFields>(emptyFields)
  const [errors, setErrors] = useState<Partial<Record<keyof PilotFields, string>>>({})
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'fallback'>('idle')
  const summaryRef = useRef<HTMLDivElement>(null)
  const set = (field: keyof PilotFields, value: string) => setFields(current => ({ ...current, [field]: value }))
  const validate = () => {
    const next: typeof errors = {}
    if (!fields.name.trim()) next.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) next.email = 'Enter a valid work email.'
    if (!fields.organisation.trim()) next.organisation = 'Enter your organisation.'
    if (!fields.role.trim()) next.role = 'Enter your role.'
    if (!fields.useCase.trim()) next.useCase = 'Describe the information you need to keep visible.'
    if (!fields.quantity) next.quantity = 'Choose an expected quantity.'
    if (!fields.timeline) next.timeline = 'Choose a target timeline.'
    return next
  }
  const mailto = () => {
    const subject = encodeURIComponent(`Albedo Display pilot — ${fields.organisation || fields.name}`)
    const body = encodeURIComponent(`Name: ${fields.name}\nWork email: ${fields.email}\nOrganisation: ${fields.organisation}\nRole: ${fields.role}\nUse case: ${fields.useCase}\nExpected quantity: ${fields.quantity}\nTimeline: ${fields.timeline}\nNotes: ${fields.notes}`)
    return `mailto:${pilotEmail}?subject=${subject}&body=${body}`
  }
  const submit = async (event: FormEvent) => {
    event.preventDefault()
    if (fields.website) return
    const next = validate(); setErrors(next)
    if (Object.keys(next).length) { requestAnimationFrame(() => summaryRef.current?.focus()); return }
    const endpoint = import.meta.env.VITE_DISPLAY_PILOT_ENDPOINT as string | undefined
    if (!endpoint) { setState('fallback'); return }
    setState('sending')
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...fields, website: undefined }) })
      if (!response.ok) throw new Error('Submission failed')
      setState('success'); setFields(emptyFields)
    } catch { setState('fallback') }
  }
  if (state === 'success') return <div className="ad-formstate" role="status" tabIndex={-1}><p className="ad-kicker">APPLICATION RECEIVED</p><h3>Thank you. We will review the fit and reply by email.</h3></div>
  return <form className="ad-pilotform" onSubmit={submit} noValidate>
    {Object.keys(errors).length > 0 && <div className="ad-errors" ref={summaryRef} role="alert" tabIndex={-1}><b>Please check the highlighted fields.</b><p>{Object.values(errors)[0]}</p></div>}
    {state === 'fallback' && <div className="ad-errors" role="status"><b>The online form is not connected.</b><p>Your details have not been sent. <a href={mailto()}>Open a pre-filled email instead</a>.</p></div>}
    <div className="ad-honeypot" hidden aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={fields.website} onChange={e => set('website', e.target.value)} /></label></div>
    <Field label="Name" id="pilot-name" error={errors.name}><input id="pilot-name" autoComplete="name" value={fields.name} onChange={e => set('name', e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'pilot-name-error' : undefined} /></Field>
    <Field label="Work email" id="pilot-email" error={errors.email}><input id="pilot-email" type="email" autoComplete="email" value={fields.email} onChange={e => set('email', e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'pilot-email-error' : undefined} /></Field>
    <Field label="Organisation" id="pilot-organisation" error={errors.organisation}><input id="pilot-organisation" autoComplete="organization" value={fields.organisation} onChange={e => set('organisation', e.target.value)} aria-invalid={!!errors.organisation} aria-describedby={errors.organisation ? 'pilot-organisation-error' : undefined} /></Field>
    <Field label="Role" id="pilot-role" error={errors.role}><input id="pilot-role" autoComplete="organization-title" value={fields.role} onChange={e => set('role', e.target.value)} aria-invalid={!!errors.role} aria-describedby={errors.role ? 'pilot-role-error' : undefined} /></Field>
    <Field label="Use case" id="pilot-use" error={errors.useCase} wide><textarea id="pilot-use" rows={3} placeholder="What should remain visible, and where?" value={fields.useCase} onChange={e => set('useCase', e.target.value)} aria-invalid={!!errors.useCase} aria-describedby={errors.useCase ? 'pilot-use-error' : undefined} /></Field>
    <Field label="Expected quantity" id="pilot-quantity" error={errors.quantity}><select id="pilot-quantity" value={fields.quantity} onChange={e => set('quantity', e.target.value)} aria-invalid={!!errors.quantity} aria-describedby={errors.quantity ? 'pilot-quantity-error' : undefined}><option value="">Select a range</option><option>1–5</option><option>6–20</option><option>21–50</option><option>More than 50</option><option>Not sure yet</option></select></Field>
    <Field label="Target timeline" id="pilot-timeline" error={errors.timeline}><select id="pilot-timeline" value={fields.timeline} onChange={e => set('timeline', e.target.value)} aria-invalid={!!errors.timeline} aria-describedby={errors.timeline ? 'pilot-timeline-error' : undefined}><option value="">Select timing</option><option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option><option>Exploring only</option></select></Field>
    <Field label="Notes (optional)" id="pilot-notes" wide><textarea id="pilot-notes" rows={3} value={fields.notes} onChange={e => set('notes', e.target.value)} /></Field>
    <div className="ad-formfooter"><p>By applying, you agree that Albedo Industries may use these details to respond to your enquiry. Read our <Link to="/privacy">privacy notice</Link>.</p><button disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Apply for a pilot'}</button></div>
  </form>
}

function Field({ label, id, error, wide, children }: { label: string, id: string, error?: string, wide?: boolean, children: React.ReactNode }) {
  return <div className={`ad-field${wide ? ' ad-field--wide' : ''}`}><label htmlFor={id}>{label}</label>{children}{error && <span id={`${id}-error`} className="ad-field__error">{error}</span>}</div>
}

function Section({ id, kicker, title, children, dark = false }: { id: string, kicker: string, title: string, children: React.ReactNode, dark?: boolean }) {
  return <section id={id} className={`ad-section ${dark ? 'ad-dark' : ''}`}><div className="ad-wrap"><p className="ad-kicker">{kicker}</p><h2 tabIndex={-1}>{title}</h2>{children}</div></section>
}

function DisplaySectionLink({ section, children, className, onSelect }: { section: DisplaySection, children: React.ReactNode, className?: string, onSelect?: () => void }) {
  return <Link to={displaySectionHref(section)} className={className} onClick={event => {
    onSelect?.()
    if (event.detail === 0) requestAnimationFrame(() => document.querySelector<HTMLElement>(`#${section} h2`)?.focus({ preventScroll: true }))
  }}>{children}</Link>
}

function ProductNavigation() {
  const location = useLocation()
  const selected = resolveDisplaySection(new URLSearchParams(location.search).get('section'))
  const [active, setActive] = useState<DisplaySection | null>(selected)
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible && displaySections.includes(visible.target.id as DisplaySection)) setActive(visible.target.id as DisplaySection)
    }, { rootMargin: '-20% 0px -60%', threshold: [0, .25, .6] })
    displaySections.forEach(id => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent | PointerEvent) => {
      if (event instanceof KeyboardEvent && event.key === 'Escape') { setOpen(false); buttonRef.current?.focus() }
      if (event instanceof PointerEvent && menuRef.current && !menuRef.current.contains(event.target as Node) && event.target !== buttonRef.current) setOpen(false)
    }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', close)
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', close) }
  }, [open])
  const sectionLink = (section: DisplaySection, label: string) => <DisplaySectionLink section={section} onSelect={() => { setOpen(false); setActive(section) }}><span aria-current={(active ?? selected) === section ? 'location' : undefined}>{label}</span></DisplaySectionLink>
  return <nav className="ad-productnav" aria-label="Albedo Display">
    <Link className="ad-productnav__brand" to="/display" aria-current="page">ALBEDO DISPLAY</Link>
    <button ref={buttonRef} className="ad-productnav__toggle" aria-expanded={open} aria-controls="display-product-menu" onClick={() => setOpen(value => !value)}>Menu</button>
    <div ref={menuRef} id="display-product-menu" className={open ? 'is-open' : ''}>
      <div className="ad-productnav__sections">{sectionLink('works', 'How it works')}{sectionLink('evidence', 'Current status')}{sectionLink('pilot', 'Pilot')}{sectionLink('faq', 'FAQ')}</div>
      <div className="ad-productnav__routes"><Link to="/display/invest">Investor brief</Link><Link to="/" aria-label="Albedo Industries — company home">Albedo Industries <span aria-hidden="true">↗</span></Link></div>
    </div>
  </nav>
}

export default function AlbedoDisplay() {
  useDisplayMetadata()
  return <article className="ad-page ad-landing">
    <ProductNavigation />
    <header className="ad-hero"><div className="ad-wrap ad-hero__grid"><div className="ad-hero__copy"><span className="ad-status">Concept · component validation</span><p className="ad-kicker">PHONE-POWERED · PERSISTENT · FOCUSED</p><h1>A simple display for information that should stay visible.</h1><p className="ad-lede">Albedo Display is a proposed small screen for workplace instructions and status. Your phone creates the update, Bluetooth sends it, and the display keeps it in view.</p><div className="ad-actions"><DisplaySectionLink section="pilot">Apply for a pilot</DisplaySectionLink><DisplaySectionLink className="secondary" section="works">See how it works</DisplaySectionLink></div><p className="ad-hero__secondary">Exploring the project? <Link to="/display/invest">Read the investor brief</Link>.</p></div><div className="ad-hero__product"><DisplayAssetFigure asset={displayAssets.heroConcept} className="ad-hero__asset" priority /><div className="ad-screen-tabs" aria-label="Example display states"><span>Room status</span><span>Next task</span><span>Operational alert</span></div></div></div></header>
    <Section id="evidence" kicker="01 / CURRENT STATUS" title="The concept is ready for its first physical test."><div className="ad-proofgrid"><div><span className="ad-status">DOCUMENTED · 04 SEP 2026</span><h3>Architecture and payload plan</h3><p>A phone-to-Bluetooth-to-display architecture, component shortlist and prototype plan are documented. They have not yet been demonstrated on a physical device.</p><b>Next: assemble and measure the first component build.</b></div><div><span className="ad-status">SELECTED FOR TESTING · 04 SEP 2026</span><h3>Prototype components</h3><p>A 4.3-inch screen and ESP32-S3-class controller are candidates for testing, not production selections.</p><b>Next: record refresh, transfer and power results.</b></div><div><span className="ad-status">NOT YET EVIDENCED</span><h3>Demand and manufacturing</h3><p>There are no validated pilots, supplier quotes or production claims. A design partner will help define the first useful workflow.</p><b>Next: agree one measurable pilot brief.</b></div></div><div className="ad-hardware"><div><p className="ad-kicker">HARDWARE CONCEPT</p><h3>Current enclosure and component hypothesis</h3><p>The full concept sheet keeps the proposed front, side, rear and component arrangement visible for scrutiny.</p></div><DisplayAssetFigure asset={displayAssets.v0Concept} showNotes /></div><details className="ad-limitations"><summary>What remains uncertain</summary><p>User value, onboarding, screen choice, power, enclosure, unit economics and manufacturability remain open. Detailed assumptions, cost ranges and stop conditions live in the <Link to="/display/invest">investor brief</Link>.</p></details></Section>
    <Section id="works" kicker="02 / HOW IT WORKS" title="One update. Three simple steps." dark><div className="ad-steps">{[['01','Choose','A person or approved phone service prepares a short, useful update.'],['02','Send','The phone formats it and transfers it locally over Bluetooth.'],['03','Keep visible','The dedicated screen holds the current instruction or status at the point of work.']].map(step => <div key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></div>)}</div><p className="ad-widecopy">The proposed V0 has no camera, microphone or local AI. The phone supplies interaction and connectivity; the endpoint is intended only to render constrained information.</p></Section>
    <Section id="use-case" kicker="03 / FIRST WORKFLOW" title="Start with operational handovers."><div className="ad-usecase"><div><p className="ad-intro">The first test focuses on a shared workplace where one changing instruction needs to remain visible without a TV, tablet or printed replacement.</p><h3>What a pilot should learn</h3><ul><li>Do people notice and act on the displayed state?</li><li>Can an operator update it without training or friction?</li><li>Does the screen replace an existing workaround?</li></ul></div><div className="ad-statecards">{[['NEXT TASK','Prepare Room 2','Due 14:00'],['ROOM STATUS','Ready for guest','Checked 13:42'],['ACTION NEEDED','Restock towels','Owner · Housekeeping']].map(item => <div key={item[0]}><small>{item[0]}</small><strong>{item[1]}</strong><span>{item[2]}</span></div>)}</div></div></Section>
    <Section id="pilot" kicker="04 / DESIGN-PARTNER PILOT" title="Bring one workflow worth keeping in view."><div className="ad-pilotoffer"><div><p className="ad-intro">We are looking for operations or hospitality teams willing to define a narrow test before hardware decisions are fixed.</p><dl><div><dt>Good fit</dt><dd>One repeated status, task or instruction in a shared physical location.</dd></div><div><dt>You receive</dt><dd>A jointly scoped validation plan and updates on prototype progress.</dd></div><div><dt>We measure</dt><dd>Setup friction, update reliability, repeated use and whether the display replaces a workaround.</dd></div><div><dt>Timing</dt><dd>Set with the design partner after component validation; no deployment date is promised.</dd></div></dl></div><PilotForm /></div></Section>
    <Section id="faq" kicker="05 / ROADMAP + FAQ" title="Validate usefulness before scale." dark><div className="ad-roadmap"><div><span>NOW</span><b>Component build</b><p>Assemble, connect and measure.</p></div><div><span>NEXT</span><b>Workflow prototype</b><p>Test setup and useful updates with target users.</p></div><div><span>THEN</span><b>Design-partner pilot</b><p>Proceed only if the evidence supports it.</p></div></div><div className="ad-faq">{[['Does it work without a phone?','The current concept depends on a nearby phone for creating and sending updates. Offline behaviour has not yet been selected.'],['How is it powered?','The V0 architecture proposes USB-C power. Battery operation is outside the current test scope.'],['Does it listen or record?','The proposed display has no camera or microphone. Any phone-side AI or data handling would require a defined product and privacy review.'],['Can I buy one?','Not yet. This is a pre-prototype project seeking design partners, not a product offer.']].map(item => <details key={item[0]}><summary>{item[0]}</summary><p>{item[1]}</p></details>)}</div></Section>
    <Section id="final" kicker="06 / NEXT STEP" title="Help define the first useful screen."><div className="ad-final"><DisplaySectionLink section="pilot">Apply for a pilot</DisplaySectionLink><p>Investor or manufacturing partner? <Link to="/display/invest">Review the investor brief</Link> or <a href={`mailto:${pilotEmail}?subject=Albedo%20Display%20partner%20enquiry`}>contact the project</a>.</p></div></Section>
  </article>
}
