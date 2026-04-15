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
        <p className="menu-kicker mb-4">
          Est. March 18, 2022
        </p>

        {/* P2-03 SEO + P3-03 conversion: location keyword in H1, away from bare brand name */}
        <h1 className="menu-heading mb-4 text-[52px] md:text-[76px]">
          Annandale&apos;s Karaoke Destination
        </h1>

        <p className="menu-subtext-bright max-w-xl text-[19px] md:text-[22px]">
          We opened Glam to give Northern Virginia the night-out destination it deserved.
          12 private rooms. A live main stage. And a kitchen that means it.
        </p>
      </div>
    </section>
  )
}
