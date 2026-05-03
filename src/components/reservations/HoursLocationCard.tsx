'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { businessInfo } from '@/data/content'
import CTAButton from '@/components/ui/CTAButton'
import PhoneLink from '@/components/ui/PhoneLink'
import { MapPin, Clock, PhoneCall } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export default function HoursLocationCard() {
  const hours = businessInfo.hoursDisplay
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-stage-noir px-4 pb-24 pt-12 sm:px-6 lg:px-8" aria-label="Hours and location">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-[30px] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.06),rgba(18,22,30,0.95))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.32)] md:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-teal/30 bg-neon-teal/10">
                <Clock className="h-5 w-5 text-neon-teal" aria-hidden="true" />
              </div>
              <div>
                <p className="menu-kicker mb-2">LATE-NIGHT HOURS</p>
                <h2 className="font-clash text-[34px] font-bold tracking-[-0.04em] text-soft-white md:text-[44px]">
                  Plan the call around your night.
                </h2>
              </div>
            </div>

            <dl className="space-y-3">
              {Object.entries(hours).map(([day, time]) => (
                <div key={day} className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                  <dt className="font-inter text-sm text-cool-mist">{day}</dt>
                  <dd className="font-inter text-sm font-semibold text-soft-white">{time}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-[24px] border border-neon-teal/20 bg-neon-teal/10 px-5 py-4">
              <p className="font-inter text-sm leading-relaxed text-neon-teal">
                <span className="font-semibold uppercase tracking-[0.12em]">Happy Hour:</span> {businessInfo.happyHour} — half-off select drinks before the night fully kicks in.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(24,18,24,0.95),rgba(11,14,19,0.98))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.32)] md:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-teal/30 bg-neon-teal/10">
                <MapPin className="h-5 w-5 text-neon-teal" aria-hidden="true" />
              </div>
              <div>
                <p className="menu-kicker mb-2">GET TO THE MIC</p>
                <h2 className="font-clash text-[34px] font-bold tracking-[-0.04em] text-soft-white md:text-[44px]">
                  Annandale, right off John Marr.
                </h2>
              </div>
            </div>

            <address className="not-italic font-inter text-[18px] leading-relaxed text-soft-white/84">
              {businessInfo.addressStreet}
              <br />
              {businessInfo.addressCity}, {businessInfo.addressState} {businessInfo.addressZip}
            </address>

            <p className="mt-4 font-inter text-sm leading-relaxed text-cool-mist">
              Roll in for a room, stay for drinks, and head upstairs or back out without losing the whole night to logistics.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <PhoneLink
                source="reservations-hours-location"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-neon-teal bg-neon-teal px-7 py-3 font-clash text-[14px] font-bold uppercase tracking-[0.08em] !text-logo-noir shadow-[0_0_24px_rgba(229,25,151,0.28)] hover:border-neon-teal-hover hover:bg-neon-teal-hover hover:!text-logo-noir"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call {businessInfo.phone}
              </PhoneLink>

              <CTAButton
                href={`https://www.google.com/maps/place/?q=place_id:${businessInfo.googlePlaceId}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="w-full"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Open in Maps
              </CTAButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
