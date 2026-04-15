// /menu page — Korean-American Kitchen & Bar
// Server component
// AP-014: canonical via alternates

import type { Metadata } from 'next'
import { siteUrl } from '@/data/content'
import TypographicHero from '@/components/menu/TypographicHero'
import FoodMenuGrid from '@/components/menu/FoodMenuGrid'
import DrinkHorizontalScroll from '@/components/menu/DrinkHorizontalScroll'
import HappyHourBand from '@/components/menu/HappyHourBand'
import PhoneLink from '@/components/ui/PhoneLink'

export const metadata: Metadata = {
  title: 'Menu — Korean-American Kitchen & Bar | Glam Karaoke',
  description: 'Korean-American small plates, bulgogi nachos, kimchi fried rice, 16 soju flavors, and craft cocktails. Happy hour 5–8 PM Sun–Thu.',
  alternates: {
    canonical: `${siteUrl}/menu`,
  },
}

export default function MenuPage() {
  return (
    <>
      <TypographicHero />
      <FoodMenuGrid />
      <DrinkHorizontalScroll />
      <HappyHourBand />

      {/* Menu CTA */}
      <section className="bg-stage-noir py-16 border-t border-white/[0.06]" aria-label="Contact us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-clash font-bold text-[24px] md:text-[32px] text-soft-white tracking-[-0.02em] mb-3">
            Hungry? Thirsty? You know what to do.
          </p>
          <p className="text-cool-mist font-inter text-base mb-6">
            Call us to reserve your room and order ahead.
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
