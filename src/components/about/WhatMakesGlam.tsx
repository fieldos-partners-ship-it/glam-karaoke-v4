'use client'

// WhatMakesGlam — 2x2 pillars card grid with staggered reveal

import { motion, useReducedMotion } from 'framer-motion'
import { DoorOpen, Mic, UtensilsCrossed, Wine } from 'lucide-react'

const pillars = [
  {
    icon: DoorOpen,
    title: 'Private Rooms',
    body: '12 private rooms with professional-grade sound, club lighting, and a dual karaoke system. No strangers. Just your group.',
  },
  {
    icon: Mic,
    title: 'Live Main Stage',
    body: 'The only Annandale venue with a live main stage. DJ nights on the main stage. The full venue becomes your stage on private bookings.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Korean-American Kitchen',
    body: 'Real food made for sharing — bulgogi nachos, kimchi fried rice, tteok-bokki, and rotating specials. Order from your room.',
  },
  {
    icon: Wine,
    title: 'Full Bar · 16 Soju Flavors',
    body: 'Craft cocktails, yogurt soju pitchers, draft beer, and 16 soju flavors. Happy hour 5–8 PM Sunday through Thursday.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export default function WhatMakesGlam() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-glass-surface py-20" aria-label="What makes Glam Karaoke unique">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
            THE GLAM DIFFERENCE
          </p>
          <h2 className="font-clash font-semibold text-[30px] md:text-[40px] text-soft-white leading-[1.1] tracking-[-0.01em]">
            Four Things Nobody Else Has
          </h2>
        </motion.div>

        <motion.div
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                variants={cardVariants}
                className="bg-stage-noir rounded-2xl border border-white/[0.06] p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-teal/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-neon-teal" aria-hidden="true" />
                </div>
                <h3 className="font-clash font-semibold text-xl text-soft-white mb-3">
                  {pillar.title}
                </h3>
                <p className="font-inter text-cool-mist text-base leading-relaxed">
                  {pillar.body}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
