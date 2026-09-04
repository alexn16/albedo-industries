export type DisplayAssetStatus = 'concept' | 'prototype' | 'testing' | 'validated' | 'production-candidate'

export type DisplayAsset = {
  title: string
  date: string
  status: DisplayAssetStatus
  caption: string
  src: string
  technicalNotes?: string
}

export const displayAssets = {
  v0Concept: {
    title: 'Albedo Display V0 Concept Design',
    date: '2026-09-04',
    status: 'concept',
    caption: 'V0 concept design — current hardware hypothesis',
    src: '/media/albedo-display/v0-concept.svg',
    technicalNotes: 'Illustrative only. Screen technology, dimensions, enclosure and electronics remain subject to validation.',
  },
  earlierTechnicalStudy: {
    title: 'Earlier V0 technical study',
    date: '2026-09-04',
    status: 'concept',
    caption: 'Earlier architecture reference',
    src: '/media/albedo-display/v0-concept.svg',
    technicalNotes: 'Reference diagram retained for provenance; it is not the preferred public-facing concept.',
  },
} satisfies Record<string, DisplayAsset>

export const evidencePriority = [
  'Working prototype video',
  'Real prototype photos',
  'Real components / PCB',
  'CAD / technical renders',
  'Generic illustrations',
] as const
