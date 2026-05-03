'use client'

// ReservationsContactStrip — Two ways to reach the floor: live chat or phone
// Sits right under the hero so booking intent has no friction

import { motion, useReducedMotion } from 'framer-motion'
import PhoneLink from '@/components/ui/PhoneLink'
import { businessInfo } from '@/data/content'
import { MessageCircle, PhoneCall } from 'lucide-react'

export default function ReservationsContactStrip() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="bg-stage-noir px-4 pb-2 pt-2 sm:px-6 lg:px-8"
      aria-label="Two ways to reserve a room"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[24px] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.05),rgba(18,22,30,0.95))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.32)] md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="font-inter text-xs uppercase tracking-[0.28em] text-soft-white/55">
                Two Ways To Reserve
              </p>
              <h2 className="mt-2 font-clash text-[24px] font-bold tracking-[-0.03em] text-soft-white md:text-[30px]">
                Use the live chat or call us during open hours.
              </h2>
              <p className="mt-2 font-inter text-sm leading-relaxed text-cool-mist">
                Either one gets you straight to a real person. Open daily {businessInfo.hoursDisplay['Open Daily']}.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
              {/* Live chat note — chat widget lives bottom-right via layout */}
              <div className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-inter text-[13px] font-semibold uppercase tracking-[0.12em] text-soft-white">
                <MessageCircle className="h-4 w-4 text-neon-teal" aria-hidden="true" />
                Live Chat <span className="text-soft-white/55">(bottom-right)</span>
              </div>

              <PhoneLink
                source="reservations-contact-strip"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-neon-teal bg-neon-teal px-6 py-3 font-clash text-[13px] font-bold uppercase tracking-[0.08em] !text-logo-noir shadow-[0_0_24px_rgba(229,25,151,0.28)] hover:border-neon-teal-hover hover:bg-neon-teal-hover hover:!text-logo-noir"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call {businessInfo.phone}
              </PhoneLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
