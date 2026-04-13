// FoundingHero — Storefront photography hero with founding info
// Server component

import Image from 'next/image'

export default function FoundingHero() {
  return (
    <section className="relative h-[60vh] md:h-[65vh] flex items-end overflow-hidden" aria-label="Glam Karaoke founding story">
      {/* Storefront photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/storefront-1.jpg"
          alt="Glam Karaoke exterior — 4369 John Marr Dr, Annandale, VA"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(14,17,23,0.92) 0%, rgba(14,17,23,0.4) 60%, rgba(14,17,23,0.0) 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        {/* Eyebrow */}
        <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          Est. March 18, 2022
        </p>

        {/* Wordmark */}
        <h1 className="font-clash font-bold text-[48px] md:text-[72px] text-soft-white leading-[1.0] tracking-[-0.02em] mb-4">
          Glam Karaoke
        </h1>

        <p className="font-inter text-soft-white/80 text-base md:text-lg max-w-xl leading-relaxed">
          We opened Glam to give Northern Virginia the night-out destination it deserved.
          12 private rooms. A live main stage. And a kitchen that means it.
        </p>
      </div>
    </section>
  )
}
