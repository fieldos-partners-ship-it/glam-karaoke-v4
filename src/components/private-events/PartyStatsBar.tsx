// PartyStatsBar — Electric Violet stats band for Party Suite
// Server component

const stats = [
  { value: '20', label: 'Max Guests' },
  { value: '$70/hr', label: 'Starting Price' },
  { value: 'Full Bar', label: 'Access Included' },
]

export default function PartyStatsBar() {
  return (
    <section className="bg-electric-violet py-14" aria-label="Party Suite at a glance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-clash font-bold text-[48px] md:text-[56px] text-soft-white leading-none mb-2">
                {stat.value}
              </p>
              <p className="font-inter font-medium text-soft-white/70 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
