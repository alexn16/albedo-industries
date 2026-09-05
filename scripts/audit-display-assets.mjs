import { existsSync, readFileSync } from 'node:fs'

const page = readFileSync('src/pages/AlbedoDisplay.tsx', 'utf8')
const assets = readFileSync('src/data/albedoDisplayAssets.ts', 'utf8')
const styles = readFileSync('src/index.css', 'utf8')
const loader = readFileSync('src/components/RouteLoading.tsx', 'utf8')
const app = readFileSync('src/App.tsx', 'utf8')
const failures = []

if (!existsSync('public/media/albedo-display/ChatGPT Image Sep 5, 2026, 08_54_11 AM.png')) failures.push('Missing hero PNG')
if (!existsSync('public/media/albedo-display/v0-concept.svg')) failures.push('Missing technical SVG')
if (!page.includes('displayAssets.heroConcept')) failures.push('Display hero does not use the concept image')
if ([...page.matchAll(/displayAssets\.v0Concept/g)].length !== 1) failures.push('Display page must render v0Concept exactly once')
if (!assets.includes('Illustrative Albedo Display concept — not a working prototype.')) failures.push('Required honest hero caption is missing')
if (loader.includes('PROJECT ATLAS')) failures.push('Shared route loader must not contain project-specific Atlas branding')
if (!loader.includes('role="status"') || !loader.includes('aria-atomic="true"')) failures.push('Route loader must expose one concise atomic status')
if (!app.includes('key={`${location.pathname}${location.search}`}')) failures.push('Route transitions must replace stale suspended content')
if (!page.includes('ad-button ad-button--primary')) failures.push('Display primary CTAs must use the shared explicit button variant')
if (!styles.includes('.ad-landing .ad-button:link,.ad-landing .ad-button:visited')) failures.push('Button link and visited states must be explicit')
if (!styles.includes('--surface-light:') || !styles.includes('--text-primary-dark:')) failures.push('Display semantic colour tokens are missing')

const hex = value => value.match(/[\da-f]{2}/gi).map(part => Number.parseInt(part, 16) / 255)
const luminance = value => hex(value).map(channel => channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4).reduce((sum, channel, index) => sum + channel * [.2126, .7152, .0722][index], 0)
const contrast = (foreground, background) => { const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a); return (values[0] + .05) / (values[1] + .05) }
for (const [label, foreground, background] of [
  ['light primary', '#171815', '#f3f2ed'], ['light secondary', '#555650', '#f3f2ed'],
  ['dark primary', '#f5f5f0', '#171815'], ['dark secondary', '#b8b9b3', '#171815'],
  ['primary button', '#f5f5f0', '#171815'], ['primary hover', '#171815', '#d9ff43'],
]) if (contrast(foreground, background) < 4.5) failures.push(`${label} contrast is below 4.5:1`)

if (failures.length) { console.error(failures.join('\n')); process.exit(1) }
console.log('Display audit passed: distinct assets, route loading, semantic colours and primary button contrast are protected.')
