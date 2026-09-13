export const atlasSectionAliases: Record<string,string>={process:'model',validation:'evidence',standard:'evidence',partners:'capital',about:'leadership'}
export const atlasSectionIds=['overview','pipeline','model','capital','evidence','footprint','requirements','private','research','leadership','contact'] as const
export type AtlasSectionId=(typeof atlasSectionIds)[number]
export function resolveAtlasSection(value:string|null):AtlasSectionId|null {if(!value)return null;const resolved=atlasSectionAliases[value]||value;return atlasSectionIds.includes(resolved as AtlasSectionId)?resolved as AtlasSectionId:null}
