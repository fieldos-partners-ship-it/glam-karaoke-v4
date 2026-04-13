// InstagramGrid — Static 4-image grid linking to @glamkaraoke Instagram
// Server component — static images, no API call

import Image from 'next/image'
import CTAButton from '@/components/ui/CTAButton'
import { social } from '@/data/content'

const instagramImages = [
  { src: '/images/ambiance-3.jpg', alt: 'Glam Karaoke DJ night — main stage energy' },
  { src: '/images/photo-8.jpg', alt: 'Private karaoke room at Glam Karaoke Annandale' },
  { src: '/images/detail-5.jpg', alt: 'Korean-American food at Glam Karaoke' },
  { src: '/images/photo-10.jpg', alt: 'Glam Karaoke ambiance — neon lighting and great vibes' },
]

export default function InstagramGrid() {
  return (
    <section className="bg-stage-noir py-20" aria-label="Glam Karaoke on Instagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-2">
              INSTAGRAM
            </p>
            <h2 className="font-clash font-semibold text-[26px] md:text-[36px] text-soft-white leading-[1.1] tracking-[-0.01em]">
              @glamkaraoke
            </h2>
          </div>
          <CTAButton
            href={social.instagramUrl}
            variant="ghost"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Instagram →
          </CTAButton>
        </div>

        {/* 4-image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {instagramImages.map((img) => (
            <a
              key={img.src}
              href={social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-xl overflow-hidden group block"
              aria-label={`${img.alt} — view on Instagram`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-stage-noir/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-soft-white font-inter font-semibold text-sm">
                  View →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
