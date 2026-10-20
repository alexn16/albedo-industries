export const displaySections = ['concept', 'uses', 'workflow', 'partners'] as const
export type DisplaySection = typeof displaySections[number]
const aliases: Record<string, DisplaySection> = { evidence: 'concept', works: 'workflow', pilot: 'partners', faq: 'partners' }
export const resolveDisplaySection = (value: string | null): DisplaySection | null => {
  if (!value) return null
  return aliases[value] ?? (displaySections.includes(value as DisplaySection) ? value as DisplaySection : null)
}
export const displaySectionHref = (section: DisplaySection) => `/display?section=${section}`
