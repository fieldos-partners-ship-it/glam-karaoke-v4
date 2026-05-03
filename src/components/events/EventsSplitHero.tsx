'use client'

// EventsInstagramHero — Instagram-first event update CTA hero
// Filename retained as EventsSplitHero for import-stability; exports the same default

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import PhoneLink from '@/components/ui/PhoneLink'
import { businessInfo, social } from '@/data/content'
import { AtSign, PhoneCall } from 'lucide-react'

export default function EventsSplitHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden bg-stage-noir px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-32 lg:pt-36"
      aria-label="Follow Glam Karaoke on Instagram for event updates"
    >
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo-10.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,19,0.92),rgba(11,14,19,0.96))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(229,25,151,0.22),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(78,210,255,0.18),transparent_36%)]" />
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <p className="menu-kicker mb-6">DJ NIGHTS + EVENTS</p>
        <h1 className="menu-heading mb-6 text-[52px] md:text-[88px]">
          The lineup lives on Instagram.
        </h1>
        <p className="menu-subtext-bright mx-auto mb-10 max-w-2xl text-[19px] md:text-[22px]">
          DJ nights, themed parties, holiday energy — every drop goes up on @{social.instagram} first. Follow the page so you never miss the night you would&apos;ve loved.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton
            href={social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            <AtSign className="h-5 w-5" aria-hidden="true" />
            Follow @{social.instagram}
          </CTAButton>
          <PhoneLink
            source="events-hero"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-soft-white/70 bg-transparent px-8 py-3.5 font-inter text-[14px] font-semibold uppercase tracking-[0.12em] text-soft-white hover:border-soft-white hover:bg-white/10"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Call {businessInfo.phone}
          </PhoneLink>
        </div>

        <p className="mt-10 font-inter text-[12px] uppercase tracking-[0.24em] text-soft-white/45">
          Open daily {businessInfo.hoursDisplay['Open Daily']}
        </p>
      </motion.div>
    </section>
  )
}
