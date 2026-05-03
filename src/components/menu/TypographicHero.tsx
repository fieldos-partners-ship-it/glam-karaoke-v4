'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { menuExperience } from '@/data/content'

export type MenuTab = 'food' | 'drinks' | 'happy-hour'

interface TypographicHeroProps {
  activeTab: MenuTab
  onTabChange: (tab: MenuTab) => void
}

const tabs: Array<{ id: MenuTab; label: string }> = [
  { id: 'food', label: 'Food' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'happy-hour', label: 'Happy Hour' },
]

export default function TypographicHero({
  activeTab,
  onTabChange,
}: TypographicHeroProps) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const reduceMotion = useReducedMotion()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
      return
    }

    event.preventDefault()

    const lastIndex = tabs.length - 1
    let nextIndex = index

    if (event.key === 'ArrowRight') {
      nextIndex = index === lastIndex ? 0 : index + 1
    }

    if (event.key === 'ArrowLeft') {
      nextIndex = index === 0 ? lastIndex : index - 1
    }

    if (event.key === 'Home') {
      nextIndex = 0
    }

    if (event.key === 'End') {
      nextIndex = lastIndex
    }

    const nextTab = tabs[nextIndex]
    onTabChange(nextTab.id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="bg-stage-noir pt-28 md:pt-36 pb-12 md:pb-14" aria-label="Glam Karaoke menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="menu-kicker mb-4">
            THE MENU
          </p>

          <h1 className="font-clash font-extrabold text-[48px] md:text-[72px] text-soft-white leading-[0.92] tracking-[-0.05em] mb-4 max-w-4xl">
            {menuExperience.heroTitle}
          </h1>

          <p className="font-inter font-medium text-[18px] md:text-[24px] text-soft-white/70 tracking-[0.03em] max-w-4xl mb-10">
            {menuExperience.heroSupport.split('·').map((chunk, index, array) => (
              <span key={chunk.trim()}>
                {chunk.trim()}
                {index < array.length - 1 ? <span className="mx-3 text-neon-teal">+</span> : null}
              </span>
            ))}
          </p>
        </motion.div>

        <div
          role="tablist"
          aria-label="Browse menu sections"
          className="flex flex-wrap gap-3"
        >
          {tabs.map((tab, index) => {
            const isActive = tab.id === activeTab

            return (
              <button
                key={tab.id}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                id={`menu-tab-${tab.id}`}
                type="button"
                role="tab"
                tabIndex={isActive ? 0 : -1}
                aria-selected={isActive}
                aria-controls={`menu-panel-${tab.id}`}
                onClick={() => onTabChange(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`inline-flex min-h-[44px] items-center rounded-full border px-5 py-2.5 font-inter text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal focus-visible:ring-offset-2 focus-visible:ring-offset-stage-noir ${
                  isActive
                    ? 'border-neon-teal bg-neon-teal text-stage-noir shadow-[0_0_24px_rgba(229,25,151,0.24)]'
                    : 'border-white/15 bg-transparent text-soft-white/72 hover:border-white/30 hover:text-soft-white'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
