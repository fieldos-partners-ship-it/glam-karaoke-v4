'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { startTransition, useState } from 'react'
import TypographicHero, { type MenuTab } from '@/components/menu/TypographicHero'
import FoodMenuGrid from '@/components/menu/FoodMenuGrid'
import DrinkHorizontalScroll from '@/components/menu/DrinkHorizontalScroll'
import HappyHourBand from '@/components/menu/HappyHourBand'

export default function MenuExperience() {
  const [activeTab, setActiveTab] = useState<MenuTab>('food')
  const prefersReducedMotion = useReducedMotion()

  const handleTabChange = (tab: MenuTab) => {
    startTransition(() => {
      setActiveTab(tab)
    })
  }

  const panelMotion = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
      }

  return (
    <>
      <TypographicHero activeTab={activeTab} onTabChange={handleTabChange} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={panelMotion.initial}
          animate={panelMotion.animate}
          exit={panelMotion.exit}
          transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {activeTab === 'food' ? <FoodMenuGrid /> : null}
          {activeTab === 'drinks' ? <DrinkHorizontalScroll /> : null}
          {activeTab === 'happy-hour' ? (
            <HappyHourBand onViewDrinks={() => handleTabChange('drinks')} />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
