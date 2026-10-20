export const atlasSectionAliases: Record<string, string> = {
  overview: 'opportunities', pipeline: 'opportunities', process: 'model', validation: 'evidence',
  standard: 'evidence', partners: 'capital', about: 'contact', leadership: 'contact',
  footprint: 'opportunities', requirements: 'evidence', private: 'capital', research: 'evidence',
}
export const atlasSectionIds = ['opportunities', 'model', 'capital', 'evidence', 'contact'] as const
export type AtlasSectionId = (typeof atlasSectionIds)[number]
export function resolveAtlasSection(value: string | null): AtlasSectionId | null {
  if (!value) return null
  const resolved = atlasSectionAliases[value] || value
  return atlasSectionIds.includes(resolved as AtlasSectionId) ? resolved as AtlasSectionId : null
}
