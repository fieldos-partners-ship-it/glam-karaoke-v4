// PressLogos — "As Featured In" press strip
// Server component

import { pressFeatures } from '@/data/content'

export default function PressLogos() {
  return (
    <section className="bg-stage-noir py-16 border-y border-white/[0.06]" aria-label="Press features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-cool-mist font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-10">
          AS FEATURED IN
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {pressFeatures.map((feature) => (
            <div key={feature.publication} className="text-center">
              {/* Publication name as styled text wordmark */}
              <p className="font-clash font-semibold text-soft-white/80 text-xl mb-1">
                {feature.publication}
              </p>
              <p className="font-inter text-cool-mist text-sm mb-2">
                {feature.date}
              </p>
              <p className="font-inter text-cool-mist/70 text-sm italic">
                &ldquo;{feature.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
