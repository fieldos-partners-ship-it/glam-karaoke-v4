// SocialProofBand — Electric Violet bg, 4 stats with CountUpNumber
// AP-039: CountUpNumber has its own IntersectionObserver — compliant

import CountUpNumber from '@/components/ui/CountUpNumber'
import { reviewData } from '@/data/content'

const stats = [
  {
    value: reviewData.reviewCount,
    suffix: '+',
    label: 'Google Reviews',
    display: '250',
  },
  {
    value: reviewData.ratingValue,
    suffix: '★',
    label: 'Average Rating',
    decimals: 1,
    display: '4.2',
  },
  {
    value: 12,
    suffix: '',
    label: 'Private Rooms',
    display: '12',
  },
  {
    value: 4,
    suffix: '+',
    label: 'Years in Business',
    display: '4',
  },
]

export default function SocialProofBand() {
  return (
    <section
      className="bg-electric-violet py-12"
      aria-label="Glam Karaoke by the numbers"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              {/* Stat number — CountUpNumber with own IntersectionObserver */}
              <div className="font-clash font-bold text-[40px] md:text-[56px] text-soft-white leading-none mb-2">
                {stat.value !== null ? (
                  <CountUpNumber
                    target={stat.value as number}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={1500}
                  />
                ) : (
                  <span>{stat.display}{stat.suffix}</span>
                )}
              </div>
              <p className="text-soft-white/70 font-inter text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
