// /contact page — Full NAP, PhoneLink, hours, maps placeholder, canonical
// P1-01 SEO: dedicated crawlable contact page with complete NAP
// Canonicalized, BreadcrumbList schema in layout.tsx

import type { Metadata } from 'next'
import PhoneLink from '@/components/ui/PhoneLink'
import CTAButton from '@/components/ui/CTAButton'
import { businessInfo, siteUrl } from '@/data/content'

export const metadata: Metadata = {
  title: 'Contact Glam Karaoke — Annandale, VA | (571) 378-0910',
  description: 'Contact Glam Karaoke at 4369 John Marr Dr, Annandale, VA 22003. Call (571) 378-0910 to reserve a room. Open Daily 5 PM–2 AM.',
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Glam Karaoke — Annandale, VA',
    description: 'Call (571) 378-0910 or visit us at 4369 John Marr Dr, Annandale, VA 22003. Open nightly for private karaoke rooms, DJ nights, and Korean-American food.',
    url: `${siteUrl}/contact`,
    images: [{ url: '/images/storefront-1.jpg', width: 1200, height: 630, alt: 'Glam Karaoke exterior — 4369 John Marr Dr, Annandale VA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Glam Karaoke — Annandale, VA',
    description: 'Call (571) 378-0910 or visit us at 4369 John Marr Dr, Annandale, VA 22003.',
    images: ['/images/storefront-1.jpg'],
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-glass-surface pt-40 pb-16 border-b border-white/[0.06]" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="menu-kicker mb-4">CONTACT</p>
          {/* H1: P1-01 — crawlable heading with venue name */}
          <h1 id="contact-heading" className="menu-heading mb-4 text-[42px] md:text-[64px]">
            Contact Glam Karaoke
          </h1>
          <p className="menu-subtext-bright max-w-xl text-[19px] md:text-[22px]">
            Call to reserve a room, ask about private events, or just find out what&apos;s going on tonight.
          </p>
        </div>
      </section>

      {/* Contact content grid */}
      <section className="bg-stage-noir py-16" aria-label="Contact details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left — NAP + hours */}
            <div className="space-y-10">
              {/* Phone */}
              <div>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-neon-teal mb-3">
                  CALL US
                </p>
                <PhoneLink
                  source="contact-page-primary"
                  className="font-clash font-bold text-[32px] md:text-[40px] text-soft-white hover:text-neon-teal transition-colors duration-150 block min-h-[48px]"
                />
                <p className="text-cool-mist font-inter text-sm mt-2">
                  Best way to reserve a room — we&apos;ll match you to the right fit fast.
                </p>
              </div>

              {/* Address */}
              <div>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-neon-teal mb-3">
                  FIND US
                </p>
                <address className="not-italic text-soft-white font-inter text-lg leading-relaxed">
                  {businessInfo.addressStreet}<br />
                  {businessInfo.addressCity}, {businessInfo.addressState} {businessInfo.addressZip}
                </address>
                <a
                  href={`https://www.google.com/maps/place/?q=place_id:${businessInfo.googlePlaceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neon-teal font-inter font-semibold text-sm mt-3 hover:text-neon-teal-hover transition-colors duration-150 min-h-[44px]"
                  aria-label="Open Glam Karaoke in Google Maps"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-neon-teal mb-3">
                  HOURS
                </p>
                <dl className="space-y-2">
                  {Object.entries(businessInfo.hoursDisplay).map(([day, hours]) => (
                    <div key={day} className="flex justify-between gap-4 font-inter text-base max-w-xs">
                      <dt className="text-cool-mist">{day}</dt>
                      <dd className="text-soft-white font-semibold">{hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-neon-teal text-sm font-inter font-semibold mt-4">
                  Happy Hour: {businessInfo.happyHour}
                </p>
              </div>
            </div>

            {/* Right — map embed placeholder + CTA */}
            <div className="space-y-8">
              {/* Google Maps embed — placeholder until client provides API key */}
              {/* MAP_TODO: Replace iframe src with:
                  https://www.google.com/maps/embed/v1/place?key=[GOOGLE_MAPS_EMBED_API_KEY]&q=place_id:ChIJT5fw6AWzt4kR_11B3_sLbXo
                  Requires Google Maps Embed API key from client */}
              <div
                className="rounded-2xl overflow-hidden bg-glass-surface border border-white/[0.06] h-64 flex items-center justify-center"
                aria-label="Glam Karaoke location map placeholder"
              >
                <div className="text-center px-4">
                  <p className="text-cool-mist font-inter text-sm mb-3">
                    4369 John Marr Dr, Annandale, VA 22003
                  </p>
                  <a
                    href={`https://www.google.com/maps/place/?q=place_id:${businessInfo.googlePlaceId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neon-teal font-inter font-semibold text-sm hover:text-neon-teal-hover transition-colors duration-150 min-h-[44px]"
                    aria-label="View Glam Karaoke on Google Maps"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              {/* Reserve CTA */}
              <div className="bg-glass-surface rounded-2xl border border-white/[0.06] p-8 text-center">
                <p className="font-clash font-bold text-[24px] md:text-[30px] text-soft-white mb-3 leading-tight">
                  Ready to book your room?
                </p>
                <p className="text-cool-mist font-inter text-base mb-6">
                  Call us with your headcount and we&apos;ll get you set up.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <PhoneLink
                    source="contact-page-cta"
                    className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-full border border-neon-teal bg-neon-teal font-inter font-semibold text-base text-stage-noir hover:bg-neon-teal-hover hover:border-neon-teal-hover transition-colors duration-150"
                  />
                  <CTAButton href="/reservations" variant="ghost" size="md">
                    See Room Options →
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
