import { useEffect, useRef } from 'react'

/**
 * Añade la clase 'visible' al elemento cuando entra en el viewport.
 * Usa data-delay="N" en el elemento para escalonar animaciones (N en ms).
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delay = el.dataset.delay || 0
          setTimeout(() => el.classList.add('visible'), Number(delay))
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
