'use client'

import { motion, useReducedMotion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import PhoneLink from '@/components/ui/PhoneLink'
import { businessInfo } from '@/data/content'
import { CalendarClock, MapPin, PhoneCall, Sparkle, Users } from 'lucide-react'

const stepContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const stepItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

const conciergeSteps = [
  {
    icon: Users,
    title: 'Tell us your crew',
    body: 'Share your headcount, celebration, and whether you want something intimate or all-out.',
  },
  {
    icon: CalendarClock,
    title: 'Name the night',
    body: 'We’ll check the best slot for your date, timing, and the room that fits your party.',
  },
  {
    icon: Sparkle,
    title: 'Lock the vibe',
    body: 'You get a real confirmation from the team instead of waiting around for a vague online request.',
  },
]

export default function CallConciergePanel() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-stage-noir px-4 py-10 sm:px-6 lg:px-8" aria-label="Call concierge">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(22,18,31,0.94),rgba(11,14,19,0.98))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.42)] md:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(229,25,151,0.18),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_32%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="menu-kicker mb-4">CALL CONCIERGE</p>
              <h2 className="menu-heading mb-4 text-[40px] md:text-[54px]">Fastest way to lock your room.</h2>
              <p className="menu-subtext-bright mb-6 text-[18px] md:text-[20px]">
                Call the floor with your room size and timing. We&apos;ll match the room, confirm the slot, and keep the whole thing human and fast.
              </p>

              <div className="mb-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="font-inter text-xs uppercase tracking-[0.28em] text-soft-white/50">When To Call</p>
                <p className="mt-2 font-clash text-[28px] font-bold tracking-[-0.04em] text-soft-white">
                  Call from 5 PM – 2 AM
                </p>
                <p className="mt-2 font-inter text-sm leading-relaxed text-cool-mist">
                  (During open hours.) Weekend prime-time slots move fastest, so calling earlier in the night helps.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PhoneLink
                  source="reservations-concierge-primary"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-neon-teal bg-neon-teal px-7 py-3 font-clash text-[14px] font-bold uppercase tracking-[0.08em] !text-logo-noir shadow-[0_0_24px_rgba(229,25,151,0.28)] hover:border-neon-teal-hover hover:bg-neon-teal-hover hover:!text-logo-noir"
                >
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  Call {businessInfo.phone}
                </PhoneLink>

                <CTAButton
                  href={`https://www.google.com/maps/place/?q=place_id:${businessInfo.googlePlaceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost-light"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </CTAButton>
              </div>
            </div>

            <motion.div
              initial={reduceMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stepContainerVariants}
              className="grid gap-4 md:grid-cols-3"
            >
              {conciergeSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    variants={stepItemVariants}
                    className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neon-teal/35 bg-neon-teal/10">
                        <Icon className="h-5 w-5 text-neon-teal" aria-hidden="true" />
                      </div>
                      <span className="font-inter text-xs uppercase tracking-[0.28em] text-soft-white/35">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mb-3 font-clash text-[24px] font-bold tracking-[-0.04em] text-soft-white">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm leading-relaxed text-cool-mist">
                      {step.body}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
