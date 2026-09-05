export const displaySections = ['evidence', 'works', 'pilot', 'faq'] as const
export type DisplaySection = typeof displaySections[number]
export const resolveDisplaySection = (value: string | null): DisplaySection | null =>
  displaySections.includes(value as DisplaySection) ? value as DisplaySection : null
export const displaySectionHref = (section: DisplaySection) => `/display?section=${section}`
