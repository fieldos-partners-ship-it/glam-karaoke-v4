import { menuExperience } from '@/data/content'
import MenuSectionBlock from '@/components/menu/MenuSectionBlock'

export default function FoodMenuGrid() {
  return (
    <section
      id="menu-panel-food"
      role="tabpanel"
      aria-labelledby="menu-tab-food"
      className="bg-stage-noir pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-neon-teal">
            FOOD
          </p>
          <h2 className="mt-3 font-clash text-[32px] font-bold leading-[0.98] tracking-[-0.04em] text-soft-white md:text-[46px]">
            The kitchen lineup, front to back.
          </h2>
          <p className="mt-4 font-inter text-base leading-relaxed text-cool-mist md:text-lg">
            Starters, bar snacks, soups, bigger plates, and wings are all visible here at a glance, without hiding half the menu behind a design gimmick.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {menuExperience.foodSections.map((section) => (
            <MenuSectionBlock
              key={section.id}
              section={section}
              className={section.id === 'wings' ? 'lg:col-span-2' : ''}
              tone={section.id === 'wings' ? 'feature' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
