'use client'

// DJNightsTeaser — Horizontal scroll section with DJ event date cards
// 'use client' required: Framer Motion
// AP-039: whileInView animations with verified observer
// GC-N: Horizontal scroll bleeds to mobile edges via -mx-4 px-4

import CTAButton from '@/components/ui/CTAButton'
import PhoneLink from '@/components/ui/PhoneLink'
import { motion } from 'framer-motion'

// Static upcoming Friday event cards — client manages actual dates
const upcomingEvents = [
  { id: 'fri-1', date: 'FRI', dateNumber: '18', month: 'APR', title: 'DJ Night', dj: '@loxs1ck', time: '9 PM – Close' },
  { id: 'fri-2', date: 'FRI', dateNumber: '25', month: 'APR', title: 'DJ Night', dj: '@loxs1ck', time: '9 PM – Close' },
  { id: 'fri-3', date: 'FRI', dateNumber: '02', month: 'MAY', title: 'DJ Night', dj: '@loxs1ck', time: '9 PM – Close' },
]

export default function DJNightsTeaser() {
  // bg-glass-surface restores Noir→Glass→Noir rhythm per UI_DIRECTION section rhythm strategy
  return (
    <section className="bg-glass-surface py-20 overflow-hidden" aria-label="DJ nights and events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-10"
        >
          <p className="menu-kicker mb-4">
            DJ NIGHTS + EVENTS
          </p>
          <h2 className="menu-heading text-[36px] md:text-[52px]">
            Every Friday. DJ @loxs1ck.
          </h2>
          <p className="menu-subtext mt-4 max-w-lg text-[19px]">
            Doors open at 5 PM. Happy hour until 8. DJ hits the main stage at 9.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll container — bleeds to edges on mobile */}
      <div className="pl-4 sm:pl-6 lg:pl-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <div className="scroll-container flex gap-4 pb-4 pr-4 sm:pr-6">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="flex-shrink-0 w-64 md:w-72 bg-glass-surface rounded-2xl p-6 border border-white/[0.06]"
            >
              {/* Large date number */}
              <div className="mb-4">
                <span className="font-clash font-bold text-[64px] md:text-[72px] text-neon-teal leading-none">
                  {event.dateNumber}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-inter font-semibold text-[11px] tracking-[0.18em] uppercase text-cool-mist">
                    {event.date}
                  </span>
                  <span className="font-inter font-semibold text-[11px] tracking-[0.18em] uppercase text-cool-mist">
                    {event.month}
                  </span>
                </div>
              </div>

              {/* Event info */}
              <h3 className="font-clash font-bold text-[24px] text-soft-white mb-1 tracking-[-0.02em]">
                {event.title}
              </h3>
              <p className="text-neon-teal font-inter font-semibold text-[15px] uppercase tracking-[0.12em] mb-1">
                {event.dj}
              </p>
              <p className="text-cool-mist font-inter text-[15px] tracking-[0.03em] mb-5">
                {event.time}
              </p>

              {/* RSVP CTA */}
              <PhoneLink
                source={`dj-teaser-${event.id}`}
                className="inline-flex items-center gap-2 font-inter font-semibold text-[15px] uppercase tracking-[0.12em] min-h-[44px]"
              >
                RSVP: Call Us →
              </PhoneLink>
            </motion.div>
          ))}
        </div>
      </div>

      {/* See all events link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <CTAButton href="/events" variant="ghost" size="sm">
          See All Events →
        </CTAButton>
      </div>
    </section>
  )
}
