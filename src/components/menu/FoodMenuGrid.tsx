// FoodMenuGrid — Categorized food menu with editorial photo breaks
// Server component — no interactivity

import Image from 'next/image'
import { menuCategories } from '@/data/content'

export default function FoodMenuGrid() {
  return (
    <section className="bg-stage-noir py-16" aria-label="Food menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {menuCategories.filter(cat => cat.id !== 'drinks').map((category, catIndex) => (
          <div key={category.id} className="mb-16 last:mb-0">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-clash font-bold text-[26px] md:text-[32px] text-soft-white tracking-[-0.02em]">
                {category.name}
              </h2>
              <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
            </div>

            {/* Editorial layout — items left, photography right (alternating) */}
            <div className={`grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 ${catIndex % 2 === 1 ? 'lg:grid-cols-[320px_1fr]' : ''}`}>
              {/* Menu items */}
              <div className={`space-y-4 ${catIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 py-4 border-b border-white/[0.06] last:border-0"
                  >
                    <div className="flex-1">
                      <h3 className="font-inter font-semibold text-[18px] text-soft-white mb-1 tracking-[0.03em]">
                        {item.name}
                      </h3>
                      <p className="font-inter text-cool-mist text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-neon-teal font-inter font-semibold text-base tracking-[0.04em]">
                      {item.price !== null ? `$${item.price}` : ''}
                    </div>
                  </div>
                ))}
              </div>

              {/* Editorial photo */}
              {category.image && (
                <div className={`relative rounded-2xl overflow-hidden ${catIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative h-64 lg:h-full min-h-[240px]">
                    <Image
                      src={category.image}
                      alt={`${category.name} at Glam Karaoke`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
