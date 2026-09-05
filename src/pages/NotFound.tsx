import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Page not found — ALBEDO Industries'
    return () => { document.title = previousTitle }
  }, [])

  return <main className="not-found" aria-labelledby="not-found-title">
    <p>404</p>
    <h1 id="not-found-title">Page not found.</h1>
    <p>The address may be incomplete or the page may have moved.</p>
    <Link to="/">Return to ALBEDO Industries</Link>
  </main>
}
