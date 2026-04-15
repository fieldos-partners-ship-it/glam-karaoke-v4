// /privacy — Privacy Policy utility page
// Server component — single column prose

import type { Metadata } from 'next'
import { siteUrl, businessInfo } from '@/data/content'

export const metadata: Metadata = {
  title: 'Privacy Policy — Glam Karaoke',
  description: 'Privacy policy for glamkaraokeva.com. How we collect and use your information.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <section className="bg-stage-noir py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-glass-surface rounded-2xl border border-white/[0.06] p-8 md:p-12">
          <h1 className="font-clash font-bold text-[36px] text-soft-white mb-3">Privacy Policy</h1>
          <p className="font-inter text-cool-mist text-sm mb-8">Last updated: April 2026</p>

          <div className="space-y-8 font-inter text-soft-white/80 text-base leading-relaxed">
            <section>
              <h2 className="font-clash font-semibold text-xl text-soft-white mb-3">1. Information We Collect</h2>
              <p>
                We collect information you voluntarily provide when you contact us directly or submit an inquiry form made available on our website — such as your name, phone number, email address, preferred date, and group size. We do not collect payment information through this website.
              </p>
            </section>

            <section>
              <h2 className="font-clash font-semibold text-xl text-soft-white mb-3">2. How We Use Your Information</h2>
              <p>
                Information you provide is used solely to respond to your inquiry, reservation call, or booking-related question. We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-clash font-semibold text-xl text-soft-white mb-3">3. Google Analytics</h2>
              <p>
                This website uses Google Analytics 4 (GA4) to understand how visitors use our site. GA4 collects anonymous data such as page views, session duration, and general geographic location. This data does not include personally identifiable information. You can opt out of Google Analytics by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-teal underline hover:text-neon-teal-hover"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-clash font-semibold text-xl text-soft-white mb-3">4. Cookies</h2>
              <p>
                Our website uses cookies as part of Google Analytics. These are small text files stored in your browser that help us understand site usage. No personally identifiable data is stored in these cookies.
              </p>
            </section>

            <section>
              <h2 className="font-clash font-semibold text-xl text-soft-white mb-3">5. Third-Party Services</h2>
              <p>
                If we enable a third-party form processing service for inquiry forms, submissions will also be subject to that provider&apos;s privacy policy. We will update this page when such a service is actively used.
              </p>
            </section>

            <section>
              <h2 className="font-clash font-semibold text-xl text-soft-white mb-3">6. Data Retention</h2>
              <p>
                Information you share through direct contact or inquiry submissions is retained only as long as necessary to fulfill your request and for a reasonable follow-up period.
              </p>
            </section>

            <section>
              <h2 className="font-clash font-semibold text-xl text-soft-white mb-3">7. Contact</h2>
              <p>
                If you have any questions about this privacy policy or how we handle your information, please contact us:
              </p>
              <address className="not-italic mt-3 text-cool-mist">
                Glam Karaoke<br />
                {businessInfo.addressStreet}<br />
                {businessInfo.addressCity}, {businessInfo.addressState} {businessInfo.addressZip}<br />
                <a href={`tel:${businessInfo.phoneTel}`} className="text-neon-teal hover:text-neon-teal-hover">
                  {businessInfo.phone}
                </a>
              </address>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
