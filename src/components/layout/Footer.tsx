// Footer — NAP, hours, nav links, social icons, PhoneLink
// AP-018: links to /privacy
// GC-3: uses PhoneLink for all phone links

import Link from 'next/link'
import Image from 'next/image'
import PhoneLink from '@/components/ui/PhoneLink'

// Inline SVG social icons — lucide-react does not export brand icons
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
import { businessInfo, social } from '@/data/content'

const navLinks = [
  { label: 'Rooms', href: '/rooms' },
  { label: 'Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'Private Events', href: '/private-events' },
  { label: 'About', href: '/about' },
  { label: 'Reservations', href: '/reservations' },
  // P1-01 SEO / P3-07: Contact page added to footer nav
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-glass-surface border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand + Contact */}
          <div>
            <Link href="/" className="inline-flex items-center mb-5" aria-label="Glam Karaoke — Home">
              <Image
                src="/brand/glam-karaoke-logo.png"
                alt="Glam Karaoke"
                width={802}
                height={554}
                sizes="(min-width: 768px) 180px, 150px"
                className="h-24 w-auto md:h-28"
              />
            </Link>
            <address className="not-italic text-cool-mist text-sm font-inter leading-relaxed mb-4">
              {businessInfo.addressStreet}<br />
              {businessInfo.addressCity}, {businessInfo.addressState} {businessInfo.addressZip}
            </address>
            {/* GC-3: PhoneLink with footer source */}
            {/* w-fit removed — tap target now spans full container width on mobile */}
            <PhoneLink
              source="footer"
              className="text-neon-teal text-sm font-inter font-semibold block mb-2 hover:text-neon-teal-hover min-h-[44px] flex items-center"
            />
            {/* AP-018: Social links — Instagram linked, Facebook null-safe */}
            <div className="flex gap-4 mt-4">
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-mist hover:text-neon-teal transition-colors duration-150 min-h-[44px] min-w-[44px] flex items-center justify-start"
                aria-label="Follow Glam Karaoke on Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              {/* AP-009: Facebook null-safe — renders nothing if URL not provided */}
              {social.facebookUrl && (
                <a
                  href={social.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cool-mist hover:text-neon-teal transition-colors duration-150 min-h-[44px] min-w-[44px] flex items-center justify-start"
                  aria-label="Follow Glam Karaoke on Facebook"
                >
                  <FacebookIcon size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-inter font-semibold text-sm text-soft-white mb-4 tracking-[0.18em] uppercase">
              HOURS
            </h3>
            <dl className="space-y-2">
              {Object.entries(businessInfo.hoursDisplay).map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-4 text-sm font-inter">
                  <dt className="text-cool-mist">{day}</dt>
                  <dd className="text-soft-white">{hours}</dd>
                </div>
              ))}
            </dl>
            <p className="text-neon-teal text-sm font-inter font-semibold mt-3">
              Happy Hour: {businessInfo.happyHour}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-inter font-semibold text-sm text-soft-white mb-4 tracking-[0.18em] uppercase">
              EXPLORE
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cool-mist text-sm font-inter tracking-[0.03em] hover:text-soft-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cool-mist text-xs font-inter">
            © {currentYear} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-end">
            <a
              href="https://fieldospartners.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[11px] text-cool-mist/50 hover:text-cool-mist transition-colors duration-150"
            >
              Site by FieldOS Partners · NoVA&apos;s Best-Priced Pro Web Studio
            </a>
            {/* AP-018: /privacy footer link */}
            <Link
              href="/privacy"
              className="text-cool-mist text-xs font-inter hover:text-soft-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
