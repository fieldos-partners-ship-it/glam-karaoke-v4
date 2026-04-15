'use client'

// GC-5: scroll-aware navbar — isTransparentState = !scrolled && isHomePage
// Three states: home-unscrolled (transparent), home-scrolled (solid glass), non-home (always solid)
// AP-001: All 3 states verified for text contrast per UI_DIRECTION.md contrast analysis
// Scroll listener initialized with { passive: true } before registering

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import CTAButton from '@/components/ui/CTAButton'
import PhoneLink from '@/components/ui/PhoneLink'

const navLinks = [
  { label: 'Rooms', href: '/rooms' },
  { label: 'Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'Private Events', href: '/private-events' },
  { label: 'Reservations', href: '/reservations' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Restore scroll-aware compression so the oversized brand mark settles into a tighter nav.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isCompressed = scrolled && !menuOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-logo-noir/95 backdrop-blur-md transition-[height,box-shadow,border-color,background-color] duration-200 ease-out ${
          isCompressed
            ? 'border-b border-white/[0.06] shadow-[0_10px_28px_rgba(0,0,0,0.28)]'
            : 'border-b border-white/[0.08] shadow-[0_18px_46px_rgba(0,0,0,0.34)]'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-[height,padding] duration-200 ease-out ${
              isCompressed ? 'h-20 md:h-24' : 'h-28 md:h-32'
            }`}
          >
            {/* Brand mark — using the approved FieldOS PNG because the SVG is raster-wrapped */}
            <Link
              href="/"
              className="flex items-center py-2"
              aria-label="Glam Karaoke — Home"
            >
              <Image
                src="/brand/glam-karaoke-logo.png"
                alt="Glam Karaoke"
                width={802}
                height={554}
                priority
                sizes="(min-width: 768px) 180px, 150px"
                className={`w-auto transition-[height,transform] duration-200 ease-out ${
                  isCompressed ? 'h-14 md:h-16' : 'h-24 md:h-28'
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className={`hidden md:flex items-center transition-[gap] duration-200 ease-out ${
                isCompressed ? 'gap-4 lg:gap-6' : 'gap-5 lg:gap-7'
              }`}
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link-hover font-inter font-semibold uppercase tracking-[0.2em] text-soft-white/78 hover:text-soft-white transition-[font-size,color] duration-150 ${
                    isCompressed ? 'text-[13px]' : 'text-[14px]'
                  }`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <CTAButton
                href="/reservations"
                variant="primary"
                size="sm"
                className={`transition-[margin] duration-200 ease-out ${isCompressed ? 'ml-0' : 'ml-1'}`}
              >
                Book a Room
              </CTAButton>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-soft-white/90 hover:text-neon-teal transition-colors duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-logo-noir flex flex-col items-center justify-center gap-8 md:hidden"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <Link href="/" className="flex items-center" aria-label="Glam Karaoke — Home">
            <Image
              src="/brand/glam-karaoke-logo.png"
              alt="Glam Karaoke"
              width={802}
              height={554}
              sizes="180px"
              className="h-24 w-auto"
            />
          </Link>
          <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter font-semibold text-[30px] uppercase tracking-[0.16em] text-soft-white/88 hover:text-neon-teal transition-colors duration-150 min-h-[56px] flex items-center"
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <CTAButton href="/reservations" variant="primary" size="lg" className="w-full max-w-xs">
            Book a Room
          </CTAButton>
          <p className="text-cool-mist text-sm font-inter tracking-[0.03em]">
            or call{' '}
            <PhoneLink source="mobile-menu" className="text-neon-teal hover:text-neon-teal-hover">
              (703) 942-5526
            </PhoneLink>
          </p>
        </div>
      )}
    </>
  )
}
