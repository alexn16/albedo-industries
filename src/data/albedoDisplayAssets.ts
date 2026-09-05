export type DisplayAssetStatus = 'concept' | 'prototype' | 'testing' | 'validated' | 'production-candidate'

export type DisplayAsset = {
  title: string
  date: string
  status: DisplayAssetStatus
  caption: string
  src: string
  width?: number
  height?: number
  alt: string
  sizes?: string
  technicalNotes?: string
}

export const displayAssets = {
  heroConcept: {
    title: 'Albedo Display illustrative concept',
    date: '2026-09-05',
    status: 'concept',
    caption: 'Illustrative Albedo Display concept — not a working prototype.',
    src: '/media/albedo-display/ChatGPT%20Image%20Sep%205%2C%202026%2C%2008_54_11%20AM.png',
    width: 1536,
    height: 1024,
    alt: 'Concept sheet showing a black Albedo Display from the front, side and back, with an exploded enclosure, electronic components, block diagram and dimensions',
    sizes: '(max-width: 800px) calc(100vw - 60px), (max-width: 1280px) 52vw, 610px',
  },
  v0Concept: {
    title: 'Albedo Display V0 Concept Design',
    date: '2026-09-04',
    status: 'concept',
    caption: 'V0 concept design — current hardware hypothesis',
    src: '/media/albedo-display/v0-concept.svg',
    alt: 'Albedo Display V0 concept sheet showing the proposed black 4.3-inch device with a next-task screen, plus side, rear and component views',
    sizes: '(max-width: 800px) calc(100vw - 40px), 52vw',
    technicalNotes: 'Illustrative only. Architecture, components, dimensions and enclosure remain subject to validation.',
  },
} satisfies Record<string, DisplayAsset>

export const evidencePriority = [
  'Working prototype video',
  'Real prototype photos',
  'Real components / PCB',
  'CAD / technical renders',
  'Generic illustrations',
] as const
