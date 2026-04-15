import { menuExperience } from '@/data/content'
import MenuSectionBlock from '@/components/menu/MenuSectionBlock'

export default function DrinkHorizontalScroll() {
  return (
    <section
      id="menu-panel-drinks"
      role="tabpanel"
      aria-labelledby="menu-tab-drinks"
      className="bg-stage-noir pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-neon-teal">
              DRINKS
            </p>
            <h2 className="mt-3 font-clash text-[32px] font-bold leading-[0.98] tracking-[-0.04em] text-soft-white md:text-[46px]">
              Soju, pours, pitchers, and board specials.
            </h2>
            <p className="mt-4 font-inter text-base leading-relaxed text-cool-mist md:text-lg">
              The drinks tab keeps everything visible at once: bottled soju, draft pours, cider, wine, and the specials that are currently up on the cocktail board.
            </p>
          </div>

          <div className="rounded-[26px] border border-neon-teal/25 bg-[linear-gradient(180deg,rgba(32,16,28,0.96)_0%,rgba(18,20,28,0.94)_100%)] px-5 py-4 shadow-[0_18px_46px_rgba(0,0,0,0.22)] lg:max-w-sm">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-neon-teal">
              Happy Hour
            </p>
            <p className="mt-2 font-clash text-[24px] font-bold leading-[1.02] tracking-[-0.03em] text-soft-white">
              5-8 PM Sun-Thu
            </p>
            <p className="mt-2 font-inter text-sm leading-relaxed text-cool-mist">
              Select drinks are discounted early. The Happy Hour tab explains the rules without guessing at the rotating pours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {menuExperience.drinkSections.map((section) => {
            const className =
              section.id === 'soju'
                ? 'lg:col-span-2'
                : section.id === 'beers'
                  ? 'lg:col-span-2'
                  : ''

            const tone = section.id === 'soju' ? 'feature' : 'default'

            return (
              <MenuSectionBlock
                key={section.id}
                section={section}
                className={className}
                tone={tone}
              />
            )
          })}

          {menuExperience.cocktailSpecials.map((section) => (
            <MenuSectionBlock
              key={section.id}
              section={section}
              className="lg:col-span-3"
              tone="special"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
