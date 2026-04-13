// TypographicHero — Text-dominant hero for /menu
// No photo — unique on this site and in the portfolio (strips atmosphere to focus on menu)
// Server component

export default function TypographicHero() {
  return (
    <section className="bg-stage-noir pt-24 pb-16" aria-label="Korean-American kitchen menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          THE MENU
        </p>

        {/* H1 */}
        <h1 className="font-clash font-bold text-[48px] md:text-[72px] text-soft-white leading-[1.0] tracking-[-0.02em] mb-4">
          Korean-American<br className="hidden md:block" /> Kitchen
        </h1>

        {/* Neon teal divider + subhead */}
        <p className="font-clash font-semibold text-[22px] md:text-[28px] text-soft-white/60 mb-8">
          Full Bar{' '}
          <span className="text-neon-teal">·</span>
          {' '}16 Soju Flavors{' '}
          <span className="text-neon-teal">·</span>
          {' '}Happy Hour 5–8 PM
        </p>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3">
          {['Food', 'Drinks', 'Happy Hour'].map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 text-cool-mist font-inter text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
