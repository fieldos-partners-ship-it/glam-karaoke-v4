// TypographicHero — Text-dominant hero for /menu
// No photo — unique on this site and in the portfolio (strips atmosphere to focus on menu)
// Server component

export default function TypographicHero() {
  return (
    <section className="bg-stage-noir pt-24 pb-16" aria-label="Korean-American kitchen menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="menu-kicker mb-4">
          THE MENU
        </p>

        {/* H1 */}
        <h1 className="font-clash font-extrabold text-[48px] md:text-[72px] text-soft-white leading-[0.96] tracking-[-0.04em] mb-4">
          Korean-American<br className="hidden md:block" /> Kitchen
        </h1>

        {/* Supporting line uses the condensed menu font for better scanability */}
        <p className="font-inter font-medium text-[21px] md:text-[27px] text-soft-white/68 uppercase tracking-[0.08em] mb-8">
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
              className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 text-cool-mist font-inter text-sm tracking-[0.04em]"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
