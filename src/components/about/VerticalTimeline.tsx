'use client'

// VerticalTimeline — Chronological story beats with Framer Motion
// 'use client' for Framer Motion line draw + dot stagger animations
// Journalistic milestone beats from content.ts timeline[]

import { motion } from 'framer-motion'
import { timeline } from '@/data/content'

export default function VerticalTimeline() {
  return (
    <section className="bg-stage-noir py-20" aria-label="Glam Karaoke history">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16">
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
            OUR STORY
          </p>
          <h2 className="font-clash font-semibold text-[30px] md:text-[44px] text-soft-white leading-[1.1] tracking-[-0.01em]">
            How We Got Here
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="absolute left-5 top-0 bottom-0 w-px bg-neon-teal/20 origin-top"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="flex gap-8"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 w-10">
                  <div className="absolute left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-teal" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <p className="font-inter font-semibold text-neon-teal text-[11px] tracking-[0.12em] uppercase mb-2">
                    {item.year}
                  </p>
                  <p className="font-inter text-soft-white/90 text-base leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
