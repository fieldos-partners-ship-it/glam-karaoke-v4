// MenuHighlights — Korean-American kitchen split section
// Server component — no interactivity
// Left 40% copy + happy hour badge, Right 60% 2x2 photo grid

import Image from 'next/image'
import CTAButton from '@/components/ui/CTAButton'

export default function MenuHighlights() {
  return (
    <section className="bg-glass-surface py-20" aria-label="Korean-American kitchen menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left column — 40% copy */}
          <div className="lg:w-[40%] flex-shrink-0">
            {/* Eyebrow */}
            <p className="menu-kicker mb-4">
              THE MENU
            </p>

            <h2 className="menu-heading mb-4 text-[36px] md:text-[52px]">
              Korean-American Kitchen
            </h2>

            <p className="menu-subtext mb-5 text-[19px]">
              Real food made for sharing. Bulgogi nachos. Kimchi fried rice. 16 soju flavors.
              Order from your room — no need to break the mood.
            </p>

            {/* Customer language subtext */}
            <p className="menu-subtext-bright mb-6 text-[17px] italic">
              &ldquo;Bulgogi nachos. Kimchi fried rice. 16 soju flavors.&rdquo;
            </p>

            {/* Happy hour badge */}
            <div className="inline-flex items-center gap-2 bg-stage-noir border border-neon-teal/30 rounded-full px-4 py-2 mb-8">
              <span className="text-neon-teal font-inter font-semibold text-sm">
                Happy Hour 5–8 PM
              </span>
              <span className="text-cool-mist font-inter text-sm">
                Sunday–Thursday
              </span>
            </div>

            <div>
              <CTAButton href="/menu" variant="ghost" size="md">
                See the Full Menu →
              </CTAButton>
            </div>
          </div>

          {/* Right column — 60% 2x2 photo grid */}
          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-2 gap-3">
              {/* Top-left */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/detail-5.jpg"
                  alt="Korean-American food at Glam Karaoke — shareable small plates"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>

              {/* Top-right */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/detail-6.jpg"
                  alt="Glam Karaoke kitchen — bulgogi and Korean-American dishes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>

              {/* Bottom-left */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/detail-7.jpg"
                  alt="Drinks and cocktails at Glam Karaoke — 16 soju flavors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>

              {/* Bottom-right */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/photo-8.jpg"
                  alt="Glam Karaoke ambiance — full bar and kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
