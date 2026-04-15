'use client'

// RoomTierComparison — 3 room cards side-by-side desktop, stacked mobile
// 'use client' for Framer Motion
// Group card elevated with teal ring + Most Popular badge
// AP-039: stagger animation on card entry

import Image from 'next/image'
import { motion } from 'framer-motion'
import PhoneLink from '@/components/ui/PhoneLink'
import { rooms } from '@/data/content'
import { Check } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export default function RoomTierComparison() {
  return (
    <section className="bg-stage-noir py-20" aria-label="Room tiers and pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className={`relative rounded-2xl overflow-hidden bg-glass-surface border flex flex-col
                ${room.mostPopular
                  ? 'border-neon-teal shadow-[0_0_0_2px_#E51997,0_12px_40px_rgba(0,0,0,0.5)] md:scale-[1.02]'
                  : 'border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
                }`}
            >
              {/* Most Popular badge */}
              {room.mostPopular && (
                <div className="absolute top-4 right-4 z-10 bg-neon-teal text-stage-noir text-[11px] font-inter font-semibold px-3 py-1 rounded-full tracking-[0.08em] uppercase">
                  Most Popular
                </div>
              )}

              {/* Room image — 3:2 */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <div className="w-full h-full group-hover:scale-[1.03] transition-transform duration-[350ms]">
                  <Image
                    src={room.image}
                    alt={`${room.name} — ${room.capacity} private karaoke room at Glam Karaoke`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-cool-mist font-inter text-sm mb-1">{room.capacity}</p>
                <h2 className="font-clash font-semibold text-[26px] text-soft-white mb-1">
                  {room.name}
                </h2>
                <p className="text-neon-teal font-inter font-semibold text-xl mb-5">
                  {room.priceDisplay}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6 flex-1">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-cool-mist font-inter text-sm">
                      <Check className="w-4 h-4 text-neon-teal mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Check Availability CTA */}
                <PhoneLink
                  source={`rooms-card-${room.id}`}
                  className="inline-flex items-center justify-center min-h-[44px] font-inter font-semibold text-sm bg-transparent border border-neon-teal rounded-full px-6 py-3 hover:bg-neon-teal/10 transition-colors duration-150 text-neon-teal"
                >
                  Check Availability
                </PhoneLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
