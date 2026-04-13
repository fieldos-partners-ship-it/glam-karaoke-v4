// HappyHourBand — Electric Violet happy hour callout
// Server component

export default function HappyHourBand() {
  return (
    <section className="bg-electric-violet py-16" aria-label="Happy hour details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-soft-white/60 font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          HAPPY HOUR
        </p>
        <h2 className="font-clash font-bold text-[32px] md:text-[48px] text-soft-white leading-[1.1] tracking-[-0.02em] mb-3">
          5–8 PM Sun–Thu
        </h2>
        <p className="font-inter text-soft-white/80 text-base md:text-lg">
          Half-off select drinks. No cover. Walk-ins welcome.
        </p>
      </div>
    </section>
  )
}
