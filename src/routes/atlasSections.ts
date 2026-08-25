export const atlasSectionAliases: Record<string,string>={model:'overview',process:'validation',standard:'evidence',about:'leadership'}
export const atlasSectionIds=['overview','pipeline','validation','research','evidence','partners','leadership'] as const
export type AtlasSectionId=(typeof atlasSectionIds)[number]

export function resolveAtlasSection(value:string|null):AtlasSectionId|null {
  if(!value)return null
  const resolved=atlasSectionAliases[value] || value
  return atlasSectionIds.includes(resolved as AtlasSectionId) ? resolved as AtlasSectionId : null
}
