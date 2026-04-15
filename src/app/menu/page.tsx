// /menu page — Korean-American Kitchen & Bar
// Server component
// AP-014: canonical via alternates

import type { Metadata } from 'next'
import { siteUrl } from '@/data/content'
import MenuExperience from '@/components/menu/MenuExperience'
import PhoneLink from '@/components/ui/PhoneLink'

export const metadata: Metadata = {
  // P2-08: Lead with keyword, add location — was "Menu — Korean-American Kitchen & Bar | Glam Karaoke"
  title: 'Korean-American Kitchen & Bar — Glam Karaoke Annandale',
  description: 'Food, drinks, and cocktail board specials at Glam Karaoke in Annandale. Korean bar food, soju, beer, wine, and happy hour Sunday through Thursday.',
  alternates: {
    canonical: `${siteUrl}/menu`,
  },
  // P2-01: Per-page OG override
  openGraph: {
    title: 'Korean-American Kitchen & Bar — Glam Karaoke Annandale',
    description: 'Bulgogi nachos, kimchi fried rice, 16 soju flavors, and craft cocktails. Happy hour 5–8 PM Sunday through Thursday.',
    url: `${siteUrl}/menu`,
    images: [{ url: '/images/detail-5.jpg', width: 1200, height: 630, alt: 'Glam Karaoke Korean-American kitchen menu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korean-American Kitchen & Bar — Glam Karaoke Annandale',
    description: 'Bulgogi nachos, kimchi fried rice, 16 soju flavors, and craft cocktails. Happy hour 5–8 PM Sunday through Thursday.',
    images: ['/images/detail-5.jpg'],
  },
}

export default function MenuPage() {
  return (
    <>
      <MenuExperience />

      {/* Menu CTA */}
      <section className="bg-stage-noir py-16 border-t border-white/[0.06]" aria-label="Contact us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* P2-08: Specific benefit + framing so CTA has context at point of call */}
          <p className="font-clash font-bold text-[24px] md:text-[32px] text-soft-white tracking-[-0.02em] mb-3">
            Order from the room. Skip the wait.
          </p>
          <p className="text-cool-mist font-inter text-base mb-6">
            Call to reserve your room and we&apos;ll handle the rest — food, drinks, and all.
          </p>
          <PhoneLink
            source="menu-cta"
            className="font-inter font-semibold text-xl min-h-[44px] inline-flex items-center"
          />
        </div>
      </section>
    </>
  )
}
