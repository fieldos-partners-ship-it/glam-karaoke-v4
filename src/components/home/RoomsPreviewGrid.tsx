'use client'

// RoomsPreviewGrid — Bento grid of 3 room tiers
// Layout: Duo (small, top-left 5-col), Group (large, center 7-col), Party Suite (bottom full-width)
// AP-039: StaggerReveal wraps all cards with 60ms stagger
// AP-008: Neon Teal used only on price badges and "Most Popular" badge

import Image from 'next/image'
import { motion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import { rooms } from '@/data/content'
import { trackRoomsCTAClick } from '@/lib/analytics'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export default function RoomsPreviewGrid() {
  const [duo, group, partySuite] = rooms

  return (
    <section className="bg-stage-noir py-20 px-4 sm:px-6 lg:px-8" aria-label="Private karaoke rooms">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="menu-kicker mb-4">
            OUR ROOMS
          </p>
          <h2 className="menu-heading text-[36px] md:text-[52px]">
            Find Your Room. Bring Your People.
          </h2>
        </div>

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
        >
          {/* Duo Room — 5-col top-left */}
          <motion.div variants={cardVariants} className="md:col-span-5">
            <RoomCard room={duo} onClick={() => trackRoomsCTAClick(duo.id)} />
          </motion.div>

          {/* Group Room — 7-col center, elevated */}
          <motion.div variants={cardVariants} className="md:col-span-7">
            <RoomCard room={group} elevated onClick={() => trackRoomsCTAClick(group.id)} />
          </motion.div>

          {/* Party Suite — full width bottom */}
          <motion.div variants={cardVariants} className="md:col-span-12">
            <RoomCard room={partySuite} wide onClick={() => trackRoomsCTAClick(partySuite.id)} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface RoomCardProps {
  room: typeof rooms[0]
  elevated?: boolean
  wide?: boolean
  onClick?: () => void
}

function RoomCard({ room, elevated, wide, onClick }: RoomCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-glass-surface border border-white/[0.06] group
        ${elevated ? 'shadow-[0_0_0_1.5px_#E51997,0_8px_32px_rgba(0,0,0,0.5)]' : 'shadow-[0_4px_24px_rgba(0,0,0,0.4)]'}
        transition-all duration-200 hover:shadow-[0_0_0_1.5px_rgba(229,25,151,0.6),0_8px_32px_rgba(0,0,0,0.5)]
      `}
    >
      {/* Most Popular badge */}
      {room.mostPopular && (
        <div className="absolute top-4 right-4 z-10 bg-neon-teal text-stage-noir text-[11px] font-inter font-semibold px-3 py-1 rounded-full tracking-[0.08em] uppercase">
          Most Popular
        </div>
      )}

      {/* Image — 3:2 aspect ratio, hover scale */}
      <div className={`relative overflow-hidden ${wide ? 'aspect-[21/6] md:aspect-[16/5]' : 'aspect-[3/2]'}`}>
        <Image
          src={room.image}
          alt={`${room.name} — ${room.capacity} private karaoke room at Glam Karaoke`}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          sizes={wide ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
        />
      </div>

      {/* Card content */}
      <div className={`p-5 md:p-6 ${wide ? 'md:flex md:items-center md:gap-8 md:justify-between' : ''}`}>
        <div className={wide ? 'md:flex md:items-center md:gap-8' : ''}>
          <div>
            <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-1">
              {room.capacity}
            </p>
            <h3 className="font-clash font-semibold text-[22px] md:text-[28px] text-soft-white mb-2">
              {room.name}
            </h3>
            {/* AP-008: Neon Teal only on price badge */}
            <p className="text-neon-teal font-inter font-semibold text-lg mb-3">
              {room.priceDisplay}
            </p>
          </div>
          {/* Features — shown on wide card layout */}
          {wide && (
            <ul className="hidden md:flex flex-wrap gap-2">
              {room.features.slice(0, 4).map((feature) => (
                <li key={feature} className="text-cool-mist text-sm font-inter bg-stage-noir px-3 py-1 rounded-full">
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div onClick={onClick} className={wide ? 'mt-4 md:mt-0 md:flex-shrink-0' : 'mt-4'}>
          <CTAButton href="/rooms" variant="ghost" size="sm">
            Book This Room →
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
