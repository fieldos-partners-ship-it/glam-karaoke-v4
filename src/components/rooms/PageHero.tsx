'use client'

// PageHero — Static photo hero for /rooms page
// 55vh height, shorter than homepage to signal data-forward page

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

interface PageHeroProps {
  eyebrow?: string
  title: string
  backgroundImage: string
  backgroundAlt: string
  height?: string
}

export default function PageHero({
  eyebrow,
  title,
  backgroundImage,
  backgroundAlt,
  height = 'h-[55vh]',
}: PageHeroProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="scale-[1.04] object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Directional overlay — darker edges, brighter center, subtle pink/blue club wash */}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,17,23,0.9)_0%,rgba(14,17,23,0.56)_24%,rgba(14,17,23,0.38)_50%,rgba(14,17,23,0.62)_76%,rgba(14,17,23,0.88)_100%),radial-gradient(circle_at_18%_18%,rgba(229,25,151,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(110,150,255,0.14),transparent_28%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        {eyebrow && (
          <p className="menu-kicker mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="menu-heading text-[42px] md:text-[64px]">
          {title}
        </h1>
      </motion.div>
    </section>
  )
}
