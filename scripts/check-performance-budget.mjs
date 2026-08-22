import { gzipSync } from 'node:zlib'
import { readdirSync, readFileSync } from 'node:fs'

const assets = readdirSync('dist/assets')
const initialScript = readFileSync('dist/index.html', 'utf8').match(/src="\/assets\/([^"]+\.js)"/)?.[1]
if (!initialScript) throw new Error('Could not identify the initial script')
const gzip = file => gzipSync(readFileSync(`dist/assets/${file}`)).byteLength
const initialBytes = gzip(initialScript)
const largest = assets.filter(file => file.endsWith('.js')).map(file => [file, gzip(file)]).sort((a, b) => b[1] - a[1])[0]
console.log(`Initial JavaScript: ${(initialBytes / 1024).toFixed(2)} KiB gzip (${initialScript})`)
console.log(`Largest JavaScript chunk: ${(largest[1] / 1024).toFixed(2)} KiB gzip (${largest[0]})`)
if (initialBytes > 100 * 1024 || largest[1] > 150 * 1024) process.exitCode = 1
