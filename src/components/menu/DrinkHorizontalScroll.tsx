'use client'

// DrinkHorizontalScroll — data-driven drinks grid with light motion
// 'use client' kept for Framer Motion entrance animation

import { motion } from 'framer-motion'
import { businessInfo, menuCategories } from '@/data/content'

export default function DrinkHorizontalScroll() {
  const drinksCategory = menuCategories.find(c => c.id === 'drinks')

  if (!drinksCategory) {
    return null
  }

  return (
    <section className="bg-glass-surface py-20" aria-label="Drinks menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-neon-teal font-inter font-medium text-[12px] tracking-[0.2em] uppercase mb-3">
              DRINKS
            </p>
            <h2 className="font-clash font-bold text-[30px] md:text-[40px] text-soft-white leading-[1.04] tracking-[-0.03em]">
              Full Bar. 16 Soju Flavors.
            </h2>
            <p className="text-cool-mist font-inter text-base mt-3">
              From flavored soju pitchers to late-night cocktails, every drink is easy to browse at a glance.
            </p>
          </div>

          <div className="rounded-3xl border border-neon-teal/25 bg-stage-noir px-5 py-4 shadow-[0_18px_46px_rgba(0,0,0,0.18)] lg:max-w-sm">
            <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.16em] uppercase">
              Happy Hour
            </p>
            <p className="mt-2 font-clash font-bold text-[24px] leading-[1.02] tracking-[-0.03em] text-soft-white">
              {businessInfo.happyHour}
            </p>
            <p className="mt-2 text-cool-mist font-inter text-sm leading-relaxed">
              Half-off select drinks before the main stage heats up.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {drinksCategory.items.map((drink, i) => {
            const isFeatureCard = i === 0

            return (
              <motion.article
                key={drink.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.42,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className={`flex h-full flex-col rounded-[28px] border p-6 shadow-[0_18px_42px_rgba(0,0,0,0.18)] ${
                  isFeatureCard
                    ? 'border-neon-teal/35 bg-stage-noir'
                    : 'border-white/[0.08] bg-stage-noir/80'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-inter font-semibold text-[21px] uppercase tracking-[0.06em] text-soft-white">
                      {drink.name}
                    </h3>
                    {isFeatureCard && (
                      <span className="mt-3 inline-flex items-center rounded-full border border-neon-teal/30 bg-neon-teal/10 px-3 py-1 text-[11px] font-inter font-semibold uppercase tracking-[0.14em] text-neon-teal">
                        16 Flavors
                      </span>
                    )}
                  </div>

                  {drink.price !== null ? (
                    <p className="shrink-0 font-inter font-semibold text-lg uppercase tracking-[0.08em] text-neon-teal">
                      ${drink.price}
                    </p>
                  ) : (
                    <span className="shrink-0 rounded-full border border-white/12 px-3 py-1 text-[10px] font-inter font-semibold uppercase tracking-[0.14em] text-cool-mist">
                      Ask In Venue
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm font-inter leading-relaxed text-cool-mist">
                  {drink.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[11px] font-inter font-semibold uppercase tracking-[0.14em] text-soft-white/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-teal" aria-hidden="true" />
                  Perfect for room service and late-night rounds
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
