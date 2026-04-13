'use client'

// GC-2: Private Events page — 'use client' because InquiryForm uses useState
// Layout handles metadata + schema injection (server component)

import PrivateEventsHero from '@/components/private-events/PrivateEventsHero'
import InquiryForm from '@/components/private-events/InquiryForm'
import BenefitCards from '@/components/private-events/BenefitCards'
import OccasionStrip from '@/components/private-events/OccasionStrip'
import PartyStatsBar from '@/components/private-events/PartyStatsBar'
import PhoneLink from '@/components/ui/PhoneLink'
import { featuredReviews } from '@/data/content'

export default function PrivateEventsPage() {
  // Use group-experience-focused reviews for this page
  const groupReviews = featuredReviews.filter(r => r.name === 'Marcus Williams' || r.name === 'Jenny Park')

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
              <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
                WHAT GROUPS SAY
              </p>
              <h2 className="font-clash font-semibold text-[28px] md:text-[38px] text-soft-white leading-[1.1] tracking-[-0.01em]">
                Real Nights. Real People.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {groupReviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-glass-surface rounded-2xl border border-white/[0.06] p-6"
                >
                  <blockquote className="font-inter text-soft-white/90 text-base leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  {/* AP-006: Full name attribution */}
                  <footer>
                    <p className="font-inter font-semibold text-soft-white text-sm">{review.name}</p>
                    <p className="font-inter text-cool-mist text-xs mt-0.5">{review.source} Review</p>
                  </footer>
                </div>
              ))}
            </div>
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
