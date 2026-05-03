// Footer — single cohesive section: brand, hours, nav, social, NAP, FieldOS credit
// AP-018: links to /privacy
// GC-3: uses PhoneLink for all phone links

import Link from 'next/link'
import Image from 'next/image'
import PhoneLink from '@/components/ui/PhoneLink'
import { businessInfo, social } from '@/data/content'

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

const navLinks = [
  { label: 'Rooms', href: '/rooms' },
  { label: 'Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-glass-surface border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* One unified section — brand left, hours center, nav right, credit row at bottom */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10 md:items-start">
          {/* Brand + Contact + Social */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center mb-3" aria-label="Glam Karaoke — Home">
              <Image
                src="/brand/glam-karaoke-logo.png"
                alt="Glam Karaoke"
                width={802}
                height={554}
                sizes="(min-width: 768px) 140px, 120px"
                className="h-14 w-auto md:h-16"
              />
            </Link>
            <address className="not-italic text-cool-mist text-sm font-inter leading-relaxed mb-2">
              {businessInfo.addressStreet}<br />
              {businessInfo.addressCity}, {businessInfo.addressState} {businessInfo.addressZip}
            </address>
            <PhoneLink
              source="footer"
              className="text-neon-teal text-sm font-inter font-semibold block hover:text-neon-teal-hover min-h-[40px] flex items-center"
            />
            <div className="flex gap-2 mt-1">
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-mist hover:text-neon-teal transition-colors duration-150 min-h-[44px] min-w-[44px] flex items-center justify-start"
                aria-label="Follow Glam Karaoke on Instagram"
              >
                <InstagramIcon size={20} />
              </a>
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
          <div className="md:col-span-4">
            <h3 className="font-inter font-semibold text-sm text-soft-white mb-3 tracking-[0.18em] uppercase">
              Hours
            </h3>
            <dl className="space-y-1.5">
              {Object.entries(businessInfo.hoursDisplay).map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-4 text-sm font-inter">
                  <dt className="text-cool-mist">{day}</dt>
                  <dd className="text-soft-white">{hours}</dd>
                </div>
              ))}
            </dl>
            <p className="text-neon-teal text-xs font-inter font-semibold mt-2 leading-snug">
              <span className="uppercase tracking-[0.12em]">Happy Hour:</span>{' '}
              <Link href="/menu" className="hover:text-neon-teal-hover underline-offset-2 hover:underline">See full schedule →</Link>
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-inter font-semibold text-sm text-soft-white mb-3 tracking-[0.18em] uppercase">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[36px] items-center text-cool-mist text-sm font-inter tracking-[0.03em] hover:text-soft-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Credit row — same section, no divider */}
        {/* Layout: Designed by FieldOS (far left) | © + Privacy (center) | empty (right balance) */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-center">
          <a
            href="https://fieldospartners.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2.5 justify-self-center sm:justify-self-start transition-opacity duration-150 hover:opacity-80"
            aria-label="Designed by FieldOS Partners — visit fieldospartners.com"
            style={{ fontFamily: 'var(--font-fieldos), system-ui, sans-serif' }}
          >
            <span className="text-cool-mist/70 text-xs font-medium tracking-[0.04em]">
              Designed by
            </span>
            <Image
              src="/brand/fieldos-og-logo.svg"
              alt="FieldOS"
              width={342}
              height={85}
              className="h-5 w-auto"
              priority={false}
            />
          </a>

          <div className="flex flex-col items-center gap-2 justify-self-center sm:flex-row sm:gap-5">
            <p className="text-cool-mist/70 text-xs font-inter">
              © {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="inline-flex min-h-[44px] items-center text-cool-mist/70 text-xs font-inter hover:text-soft-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Right-side spacer for symmetry — keeps center cluster optically centered */}
          <div aria-hidden="true" className="hidden sm:block" />
        </div>
      </div>
    </footer>
  )
}
