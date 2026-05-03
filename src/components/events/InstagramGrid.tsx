'use client'

// GlamGallery — Instagram-driven gallery with stagger reveal
// Filename retained as InstagramGrid for import-stability
// Pulls real @glamkaraoke post imagery downloaded from the IG profile

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import { social } from '@/data/content'
import { AtSign } from 'lucide-react'

const galleryImages = [
  { src: '/images/ig/ig-cutest-bartender.jpg', alt: 'Bartender at Glam Karaoke pouring drinks behind the bar' },
  { src: '/images/ig/ig-event-pockethaven.jpg', alt: 'Glam x PocketHaven Friday night TCG event flyer' },
  { src: '/images/ig/ig-dynamic-duo.jpg', alt: 'Glam Karaoke dynamic duo bartenders mid-shift' },
  { src: '/images/ig/ig-concert-night.jpg', alt: 'Late-night karaoke concert energy at Glam Karaoke' },
  { src: '/images/ig/ig-nye-party.jpg', alt: 'New Year\'s Eve party announcement at Glam Karaoke' },
  { src: '/images/ig/ig-aj-crown.jpg', alt: 'AJ from the Glam Karaoke crew with the karaoke crown — #glamily' },
  { src: '/images/ig/ig-nye-djs.jpg', alt: 'NYE house DJ night announcement at Glam Karaoke' },
  { src: '/images/ig/ig-candid-1.jpg', alt: 'Candid moment from a night at Glam Karaoke' },
  { src: '/images/ig/ig-aj-clothes.jpg', alt: 'Crew candid from Glam Karaoke' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export default function InstagramGrid() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-stage-noir py-20" aria-label="Glam Karaoke photo gallery from Instagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10"
        >
          <div>
            <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
              FROM THE FLOOR
            </p>
            <h2 className="font-clash font-semibold text-[30px] md:text-[44px] text-soft-white leading-[1.1] tracking-[-0.02em]">
              Real nights, real Glam.
            </h2>
            <p className="mt-3 font-inter text-cool-mist text-base max-w-xl">
              Pulled fresh from @{social.instagram}. For the latest event drops, follow the page.
            </p>
          </div>
          <CTAButton
            href={social.instagramUrl}
            variant="ghost"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AtSign className="h-4 w-4" aria-hidden="true" />
            Follow @{social.instagram}
          </CTAButton>
        </motion.div>

        {/* Mixed grid with stagger */}
        <motion.div
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
        >
          {galleryImages.map((img) => (
            <motion.a
              key={img.src}
              variants={itemVariants}
              href={social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[9/16] rounded-xl overflow-hidden group block bg-glass-surface"
              aria-label={`${img.alt} — view more on Instagram`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={90}
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-stage-noir/45 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-soft-white font-inter font-semibold text-sm inline-flex items-center gap-1.5">
                  <AtSign className="h-4 w-4" aria-hidden="true" />
                  View on Instagram
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
