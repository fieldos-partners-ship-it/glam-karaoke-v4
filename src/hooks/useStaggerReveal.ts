'use client'

// AP-039: useStaggerReveal — adds 'in-view' to direct children with staggered delay
// Used as a CSS fallback; Framer Motion StaggerReveal component is the primary system

import { useEffect, useRef } from 'react'

interface UseStaggerRevealOptions {
  threshold?: number
  staggerMs?: number
  once?: boolean
}

export function useStaggerReveal<T extends HTMLElement>(
  options: UseStaggerRevealOptions = {}
) {
  const { threshold = 0.1, staggerMs = 60, once = true } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = Array.from(container.children) as HTMLElement[]
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * staggerMs}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child) => child.classList.add('in-view'))
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            children.forEach((child) => child.classList.remove('in-view'))
          }
        })
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [threshold, staggerMs, once])

  return ref
}
