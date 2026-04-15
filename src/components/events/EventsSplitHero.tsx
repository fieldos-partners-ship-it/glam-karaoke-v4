// EventsSplitHero — Split-screen hero: photo left, event info right
// Server component

import Image from 'next/image'
import PhoneLink from '@/components/ui/PhoneLink'

export default function EventsSplitHero() {
  return (
    <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col md:flex-row" aria-label="DJ nights at Glam Karaoke">
      {/* Left — atmospheric photography */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/images/ambiance-4.jpg"
          alt="Glam Karaoke main stage — DJ nights every Friday"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(14,17,23,0.4)' }}
          aria-hidden="true"
        />
      </div>

      {/* Right — event info */}
      <div className="w-full md:w-1/2 bg-glass-surface flex items-center">
        <div className="px-8 md:px-12 lg:px-16 py-16">
          {/* Eyebrow */}
          <p className="menu-kicker mb-4">
            DJ NIGHTS + EVENTS
          </p>

          {/* H1 */}
          <h1 className="menu-heading mb-4 text-[48px] md:text-[68px]">
            Every Friday.<br />
            DJ @loxs1ck.
          </h1>

          <p className="menu-subtext mb-6 text-[19px] md:text-[21px]">
            Doors open at 5 PM. Happy hour until 8.
            The DJ hits the main stage at 9 PM.
          </p>

          {/* RSVP */}
          <div className="flex flex-col gap-2">
            <p className="font-inter text-[12px] uppercase tracking-[0.18em] text-soft-white/68">
              Reserve your room:
            </p>
            <PhoneLink
              source="events-hero"
              className="font-inter font-semibold text-xl min-h-[48px] inline-flex items-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
