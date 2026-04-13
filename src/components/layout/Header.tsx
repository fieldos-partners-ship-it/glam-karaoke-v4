'use client'

// GC-5: scroll-aware navbar — isTransparentState = !scrolled && isHomePage
// Three states: home-unscrolled (transparent), home-scrolled (solid glass), non-home (always solid)
// AP-001: All 3 states verified for text contrast per UI_DIRECTION.md contrast analysis
// Scroll listener initialized with { passive: true } before registering

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import CTAButton from '@/components/ui/CTAButton'
import { businessInfo } from '@/data/content'

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
  const isHomePage = pathname === '/'

  // GC-5: passive scroll listener — initialize before registering
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    // Initialize state before adding listener
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // GC-5: isTransparentState logic
  const isTransparent = isHomePage && !scrolled

  const headerBg = isTransparent
    ? 'bg-transparent'
    : 'bg-glass-surface border-b border-white/[0.08]'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${headerBg}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo — wordmark until real SVG provided */}
            <Link
              href="/"
              className="font-clash font-semibold text-xl text-soft-white tracking-wider hover:text-neon-teal transition-colors duration-150"
              aria-label="Glam Karaoke — Home"
            >
              GLAM KARAOKE
            </Link>

            {/* Desktop nav */}
            {/* AP-001: #F2F0F8 text at 90% opacity — 11.0:1 contrast on transparent dark overlay, 9.6:1 on glass */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link-hover text-soft-white/90 text-sm font-inter font-medium hover:text-soft-white transition-colors duration-150"
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <CTAButton
                href="/reservations"
                variant="primary"
                size="sm"
                className="ml-2"
              >
                Book a Room
              </CTAButton>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-soft-white hover:text-neon-teal transition-colors duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
          className="fixed inset-0 z-40 bg-stage-noir flex flex-col items-center justify-center gap-8 md:hidden"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-clash font-semibold text-[30px] text-soft-white hover:text-neon-teal transition-colors duration-150 min-h-[56px] flex items-center"
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <CTAButton href="/reservations" variant="primary" size="lg" className="w-full max-w-xs">
            Book a Room
          </CTAButton>
          <p className="text-cool-mist text-sm font-inter">
            or call{' '}
            <a
              href={`tel:${businessInfo.phoneTel}`}
              className="text-neon-teal hover:text-neon-teal-hover"
            >
              {businessInfo.phone}
            </a>
          </p>
        </div>
      )}
    </>
  )
}
