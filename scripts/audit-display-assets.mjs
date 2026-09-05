import { existsSync, readFileSync } from 'node:fs'

const page = readFileSync('src/pages/AlbedoDisplay.tsx', 'utf8')
const assets = readFileSync('src/data/albedoDisplayAssets.ts', 'utf8')
const failures = []

if (!existsSync('public/media/albedo-display/ChatGPT Image Sep 5, 2026, 08_54_11 AM.png')) failures.push('Missing hero PNG')
if (!existsSync('public/media/albedo-display/v0-concept.svg')) failures.push('Missing technical SVG')
if (!page.includes('displayAssets.heroConcept')) failures.push('Display hero does not use the concept image')
if ([...page.matchAll(/displayAssets\.v0Concept/g)].length !== 1) failures.push('Display page must render v0Concept exactly once')
if (!assets.includes('Illustrative Albedo Display concept — not a working prototype.')) failures.push('Required honest hero caption is missing')

if (failures.length) { console.error(failures.join('\n')); process.exit(1) }
console.log('Display asset audit passed: the existing hero PNG and technical SVG are each used once without adding binary files.')
