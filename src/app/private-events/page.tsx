'use client'

// GC-2: Private Events page — 'use client' because InquiryForm uses useState
// Layout handles metadata + schema injection (server component)

import PrivateEventsHero from '@/components/private-events/PrivateEventsHero'
import InquiryForm from '@/components/private-events/InquiryForm'
import BenefitCards from '@/components/private-events/BenefitCards'
import OccasionStrip from '@/components/private-events/OccasionStrip'
import PartyStatsBar from '@/components/private-events/PartyStatsBar'
import PhoneLink from '@/components/ui/PhoneLink'
import TestimonialCarousel from '@/components/ui/TestimonialCarousel'
import { featuredReviews } from '@/data/content'

export default function PrivateEventsPage() {
  // Use group-experience-focused reviews for this page
  const groupReviews = featuredReviews.filter(r => r.contexts?.includes('groups'))

  return (
    <>
      {/* Hero + Overlapping Form */}
      <div className="relative">
        <PrivateEventsHero />

        {/* Overlapping inquiry form card — crosses hero/body boundary */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:max-w-xl md:-mt-24 relative">
            <InquiryForm />
          </div>
        </div>
      </div>

      {/* Spacer on mobile for form below hero */}
      <div className="h-8 md:h-0 bg-glass-surface" aria-hidden="true" />

      <BenefitCards />
      <OccasionStrip />
      <PartyStatsBar />

      {/* Testimonials focused on group experiences */}
      {groupReviews.length > 0 && (
        <section className="bg-stage-noir py-20" aria-label="What groups say about Glam Karaoke">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="menu-kicker mb-4">
                WHAT GROUPS SAY
              </p>
              <h2 className="menu-heading text-[34px] md:text-[46px]">
                Real Nights. Real People.
              </h2>
            </div>
            <TestimonialCarousel reviews={groupReviews} />
          </div>
        </section>
      )}

      {/* Final Inquiry CTA */}
      <section className="bg-glass-surface py-16 border-t border-white/[0.06]" aria-label="Contact us for private events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-clash font-semibold text-[24px] md:text-[32px] text-soft-white mb-3">
            Ready to book your night?
          </p>
          <p className="font-inter text-cool-mist text-base mb-6">
            We respond within 2 hours during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <PhoneLink
              source="private-events-final-cta"
              className="font-inter font-semibold text-xl min-h-[48px] inline-flex items-center"
            />
            <a
              href="#inquiry-form"
              className="font-inter font-semibold text-base text-cool-mist hover:text-soft-white transition-colors min-h-[44px] inline-flex items-center"
            >
              Or fill out the form above ↑
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
