import type { ReactNode } from 'react'

export default function DivisionSection({ id, eyebrow, title, intro, children, dark = false }: {
  id?: string; eyebrow: string; title: string; intro?: string; children: ReactNode; dark?: boolean
}) {
  return <section id={id} className={`division-section ${dark ? 'division-section--dark' : ''}`}>
    <div className="company-container">
      <p className="company-eyebrow">{eyebrow}</p>
      <h2 className="company-heading">{title}</h2>
      {intro && <p className="company-intro">{intro}</p>}
      <div className="mt-10 md:mt-14">{children}</div>
    </div>
  </section>
}
