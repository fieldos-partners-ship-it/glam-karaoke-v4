// /not-found — Branded 404 page
// P1-03 SEO: branded 404 with recovery paths — links to /rooms, /reservations, PhoneLink CTA
// noindex via metadata robots — 404 pages should not be indexed

import type { Metadata } from 'next'
import Link from 'next/link'
import PhoneLink from '@/components/ui/PhoneLink'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Page Not Found — Glam Karaoke',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <section
      className="min-h-screen bg-stage-noir flex items-center justify-center px-4 py-32"
      aria-label="Page not found"
    >
      <div className="max-w-xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="menu-kicker mb-6">404</p>

        {/* Heading */}
        <h1 className="menu-heading mb-4 text-[42px] md:text-[60px]">
          Wrong Room.
        </h1>

        <p className="menu-subtext-bright text-[18px] md:text-[21px] mb-10">
          That page doesn&apos;t exist — but your room is still out there.
          Let&apos;s get you where you&apos;re going.
        </p>

        {/* Recovery paths */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <CTAButton href="/rooms" variant="primary" size="lg">
            See Our Rooms →
          </CTAButton>
          <CTAButton href="/reservations" variant="ghost" size="lg">
            Reserve a Room
          </CTAButton>
        </div>

        {/* Phone CTA */}
        <p className="text-cool-mist font-inter text-base mb-3">
          Or call us and we&apos;ll sort it out:
        </p>
        <PhoneLink
          source="404-page"
          className="font-inter font-semibold text-xl min-h-[48px] inline-flex items-center"
        />

        {/* Nav links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            { label: 'Home', href: '/' },
            { label: 'Menu', href: '/menu' },
            { label: 'Events', href: '/events' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cool-mist font-inter text-sm hover:text-soft-white transition-colors duration-150 min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
