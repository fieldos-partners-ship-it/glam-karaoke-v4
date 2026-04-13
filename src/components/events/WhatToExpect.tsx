'use client'

// WhatToExpect — Progressive story beats revealed via scroll
// 'use client' for Framer Motion whileInView
// Three moments: Arrive → Rooms Open → Late Night

import { motion } from 'framer-motion'

const moments = [
  {
    time: 'Arrive Early',
    headline: 'Happy Hour hits until 8.',
    body: 'Get here before 8 and everything tastes better. Half-off select drinks, no cover, and rooms ready to go. Bulgogi nachos while you warm up.',
    image: '/images/ambiance-3.jpg',
    accent: 'text-neon-teal',
  },
  {
    time: 'Rooms Open',
    headline: 'The main stage goes live.',
    body: 'Pick your songs. Grab the tambourine. The professional sound system doesn\'t lie — you\'ll actually sound good in here. "Like a night out without the crowd watching you."',
    image: '/images/interior-2.jpg',
    accent: 'text-electric-violet',
  },
  {
    time: 'Late Night',
    headline: 'The crowd finds its voice.',
    body: 'DJ @loxs1ck takes the main stage at 9. Rooms stay open until close. Some nights go until 3 AM. Plan accordingly.',
    image: '/images/ambiance-4.jpg',
    accent: 'text-neon-teal',
  },
]

export default function WhatToExpect() {
  return (
    <section className="bg-glass-surface py-20" aria-label="What to expect on a DJ night">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
            THE NIGHT
          </p>
          <h2 className="font-clash font-semibold text-[30px] md:text-[44px] text-soft-white leading-[1.1] tracking-[-0.01em]">
            What to Expect
          </h2>
        </div>

        {/* Progressive story beats */}
        <div className="space-y-20">
          {moments.map((moment, i) => (
            <motion.div
              key={moment.time}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text */}
              <div className="flex-1">
                <p className={`font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3 ${moment.accent}`}>
                  {moment.time}
                </p>
                <h3 className="font-clash font-semibold text-[26px] md:text-[32px] text-soft-white leading-[1.15] mb-4">
                  {moment.headline}
                </h3>
                <p className="font-inter text-cool-mist text-base leading-relaxed">
                  {moment.body}
                </p>
              </div>

              {/* Step number — decorative */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full border border-neon-teal/30 flex items-center justify-center">
                <span className="font-clash font-bold text-3xl text-neon-teal/60">
                  {i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
