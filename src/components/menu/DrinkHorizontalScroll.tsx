'use client'

// DrinkHorizontalScroll — Horizontal scroll drink highlight cards
// 'use client' for Framer Motion entrance animation
// Second horizontal scroll moment on the site — unique to /menu

import { motion } from 'framer-motion'
import { menuCategories } from '@/data/content'

const drinkHighlights = [
  { name: 'Yogurt Soju Pitcher', tagline: 'The crowd favorite', price: 35, highlight: true },
  { name: 'Soju Collection', tagline: '16 flavors to explore', price: null, highlight: false },
  { name: 'Craft Cocktails', tagline: "Tonight's rotating specials", price: 14, highlight: false },
  { name: 'Draft Beer', tagline: 'Korean & domestic on tap', price: 8, highlight: false },
  { name: 'Wine', tagline: 'House red & white by the glass', price: 10, highlight: false },
  { name: 'Happy Hour', tagline: '5–8 PM Sun–Thu', price: null, highlight: true },
]

export default function DrinkHorizontalScroll() {
  // Also pull drinks from content for reference
  const drinksCategory = menuCategories.find(c => c.id === 'drinks')

  return (
    <section className="bg-glass-surface py-20 overflow-hidden" aria-label="Drinks menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
          DRINKS
        </p>
        <h2 className="font-clash font-semibold text-[30px] md:text-[40px] text-soft-white leading-[1.1] tracking-[-0.01em]">
          Full Bar. 16 Soju Flavors.
        </h2>
        {drinksCategory && (
          <p className="text-cool-mist font-inter text-base mt-3">
            {drinksCategory.items[0]?.description}
          </p>
        )}
      </div>

      {/* Horizontal scroll — bleeds to edges on mobile */}
      <div className="pl-4 sm:pl-6 lg:pl-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <div className="scroll-container flex gap-4 pb-4 pr-4 sm:pr-6">
          {drinkHighlights.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className={`flex-shrink-0 w-56 md:w-64 rounded-2xl p-6 border
                ${drink.highlight
                  ? 'bg-stage-noir border-neon-teal/40'
                  : 'bg-stage-noir/60 border-white/[0.06]'
                }`}
            >
              <h3 className="font-clash font-semibold text-xl text-soft-white mb-1">
                {drink.name}
              </h3>
              <p className="text-cool-mist font-inter text-sm mb-4">
                {drink.tagline}
              </p>
              {drink.price !== null && (
                <p className="text-neon-teal font-inter font-semibold text-lg">
                  ${drink.price}
                </p>
              )}
              {drink.highlight && drink.price === null && (
                <p className="text-neon-teal font-inter font-semibold text-sm">
                  Half-off select drinks
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
