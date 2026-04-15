'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import PhoneLink from '@/components/ui/PhoneLink'
import { businessInfo } from '@/data/content'
import { MapPin, PhoneCall, Sparkles } from 'lucide-react'
import DiscoBall from '@/components/reservations/DiscoBall'

const quickHits = [
  '12 private rooms',
  'Walk-ins welcome when available',
  'Call to lock prime-time slots',
]

export default function ReservationsHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-stage-noir px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36" aria-label="Call to reserve a private karaoke room">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(229,25,151,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="menu-kicker mb-4">CALL TO RESERVE</p>
          <h1 className="menu-heading mb-5 text-[52px] md:text-[82px]">
            Cue the lights.
            <br />
            Call your room in.
          </h1>

          <p className="menu-subtext-bright max-w-2xl text-[19px] md:text-[22px]">
            Tell us your crew size and timing. We&apos;ll match the room, confirm the slot, and get you into the Glam night you actually want without making you wait on a silent submission.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneLink
              source="reservations-hero-primary"
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

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {quickHits.map((hit) => (
              <div key={hit} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-neon-teal" aria-hidden="true" />
                  <span className="font-inter text-[11px] uppercase tracking-[0.24em] text-soft-white/38">Night note</span>
                </div>
                <p className="font-inter text-sm font-medium text-soft-white/82">{hit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[500px] lg:min-h-[620px]"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
        >
          <div className="absolute right-0 top-0 z-20 lg:right-8">
            <DiscoBall />
          </div>

          <div className="relative z-10 mx-auto max-w-[420px] pt-28 sm:pt-32 lg:ml-6 lg:max-w-[460px] lg:pt-44">
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(24,18,24,0.95))] p-4 shadow-[0_34px_90px_rgba(0,0,0,0.46)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,rgba(229,25,151,0.12))]" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10">
                <Image
                  src="/images/interior-2.jpg"
                  alt="Guests at Glam Karaoke near the bar and private rooms"
                  fill
                  sizes="(min-width: 1024px) 36rem, 90vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,17,0.08),rgba(10,12,17,0.64))]" />

                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-4 py-2 backdrop-blur">
                  <p className="font-inter text-[11px] uppercase tracking-[0.26em] text-soft-white/82">Real venue. Real host.</p>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                  <div className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 backdrop-blur">
                    <p className="font-inter text-[11px] uppercase tracking-[0.24em] text-soft-white/45">Tonight&apos;s energy</p>
                    <p className="font-clash text-[24px] font-bold tracking-[-0.04em] text-soft-white">12 private rooms</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 backdrop-blur">
                    <p className="font-inter text-[11px] uppercase tracking-[0.24em] text-soft-white/45">Fastest reserve path</p>
                    <p className="font-inter text-sm font-semibold text-soft-white">Call the floor directly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
