import { useEffect, useRef } from 'react'

/**
 * Adds a scroll-triggered reveal animation to an element.
 * When the element enters the viewport, it receives the 'revealed' class
 * which triggers CSS animations defined in index.css.
 *
 * Usage:
 *   const ref = useScrollReveal<HTMLDivElement>()
 *   <div ref={ref} className="reveal">...</div>
 *
 * Variants (add as additional classes):
 *   .reveal          — fade up (default)
 *   .reveal-left     — slide in from left
 *   .reveal-right    — slide in from right
 *   .reveal-scale    — scale up from 95%
 */
export function useScrollReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}

/**
 * Observes multiple children of a container for staggered reveal.
 * Each child with class 'reveal-item' will be revealed with a delay
 * based on its index.
 */
export function useStaggerReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = container.querySelectorAll('.reveal-item')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('revealed')
            }, i * 80)
          })
          observer.unobserve(container)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [options])

  return ref
}
