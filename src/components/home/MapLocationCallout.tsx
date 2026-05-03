'use client'

// MapLocationCallout — Themed location card with embedded Google map
// iframe loads lazily, no API key required

import { motion, useReducedMotion } from 'framer-motion'
import { businessInfo } from '@/data/content'
import PhoneLink from '@/components/ui/PhoneLink'
import CTAButton from '@/components/ui/CTAButton'
import { MapPin, PhoneCall, Clock } from 'lucide-react'

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(businessInfo.address)}&output=embed`
const directionsHref = `https://www.google.com/maps/place/?q=place_id:${businessInfo.googlePlaceId}`

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export default function MapLocationCallout() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="bg-stage-noir px-4 py-20 sm:px-6 lg:px-8"
      aria-label="Find Glam Karaoke in Annandale"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch"
        >
          {/* Info column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center rounded-[30px] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.06),rgba(18,22,30,0.95))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.32)] md:p-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-teal/30 bg-neon-teal/10">
                <MapPin className="h-5 w-5 text-neon-teal" aria-hidden="true" />
              </div>
              <p className="font-inter text-xs uppercase tracking-[0.28em] text-soft-white/55">FIND US</p>
            </div>

            <h2 className="font-clash text-[34px] font-bold tracking-[-0.04em] text-soft-white md:text-[44px]">
              Annandale, right off John Marr.
            </h2>

            <address className="mt-5 not-italic font-inter text-[18px] leading-relaxed text-soft-white/85">
              {businessInfo.addressStreet}
              <br />
              {businessInfo.addressCity}, {businessInfo.addressState} {businessInfo.addressZip}
            </address>

            <div className="mt-4 inline-flex items-center gap-2 font-inter text-sm text-cool-mist">
              <Clock className="h-4 w-4 text-neon-teal" aria-hidden="true" />
              Open daily {businessInfo.hoursDisplay['Open Daily']}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink
                source="home-map-callout"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-neon-teal bg-neon-teal px-7 py-3 font-clash text-[14px] font-bold uppercase tracking-[0.08em] !text-logo-noir shadow-[0_0_24px_rgba(229,25,151,0.28)] hover:border-neon-teal-hover hover:bg-neon-teal-hover hover:!text-logo-noir"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call {businessInfo.phone}
              </PhoneLink>

              <CTAButton
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost-light"
                size="lg"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </CTAButton>
            </div>
          </motion.div>

          {/* Map column */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-stage-noir shadow-[0_28px_90px_rgba(0,0,0,0.46)] aspect-[4/3] lg:aspect-auto lg:min-h-[440px]"
          >
            <iframe
              src={mapEmbedSrc}
              title="Glam Karaoke location — 4369 John Marr Drive, Annandale VA"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0, colorScheme: 'normal' }}
            />
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[30px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-[linear-gradient(180deg,rgba(11,14,19,0.45),transparent)]"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
