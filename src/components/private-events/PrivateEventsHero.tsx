// PrivateEventsHero — Full-bleed photo hero for private events
// Server component

import Image from 'next/image'

export default function PrivateEventsHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden" aria-label="Private events at Glam Karaoke">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo-9.jpg"
          alt="Glam Karaoke Party Suite — private events for up to 20 guests"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(14,17,23,0.92) 0%, rgba(14,17,23,0.5) 50%, rgba(14,17,23,0.2) 100%)' }}
        aria-hidden="true"
      />

      {/* Content — right-of-center */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl ml-auto md:ml-0 md:max-w-lg">
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
            PRIVATE EVENTS
          </p>
          <h1 className="font-clash font-bold text-[40px] md:text-[56px] text-soft-white leading-[1.05] tracking-[-0.02em] mb-4">
            Your Group.<br />Your Soundtrack.<br />Your Night.
          </h1>
          <p className="font-inter text-soft-white/80 text-base md:text-lg leading-relaxed">
            Party Suite holds up to 20 guests. Starts at $70/hr.
            DJ-ready. Full bar access.
          </p>
        </div>
      </div>
    </section>
  )
}
