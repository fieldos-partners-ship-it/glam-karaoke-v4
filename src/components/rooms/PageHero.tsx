// PageHero — Static photo hero for /rooms page
// 55vh height, shorter than homepage to signal data-forward page
// Server component

import Image from 'next/image'

interface PageHeroProps {
  eyebrow?: string
  title: string
  backgroundImage: string
  backgroundAlt: string
  height?: string
}

export default function PageHero({
  eyebrow,
  title,
  backgroundImage,
  backgroundAlt,
  height = 'h-[55vh]',
}: PageHeroProps) {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Flat overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(14,17,23,0.65)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {eyebrow && (
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-clash font-bold text-[36px] md:text-[56px] text-soft-white leading-[1.05] tracking-[-0.02em]">
          {title}
        </h1>
      </div>
    </section>
  )
}
