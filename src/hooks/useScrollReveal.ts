'use client'

// AP-039: useScrollReveal — adds 'in-view' class when element enters viewport
// Used as a CSS fallback; Framer Motion whileInView is the primary animation system

import { useEffect, useRef } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.15, once = true } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('in-view')
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return ref
}
