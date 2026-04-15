import { type MenuSection } from '@/data/content'

interface MenuSectionBlockProps {
  section: MenuSection
  className?: string
  tone?: 'default' | 'feature' | 'special'
}

const toneClasses: Record<NonNullable<MenuSectionBlockProps['tone']>, string> = {
  default: 'border-white/[0.08] bg-[linear-gradient(180deg,rgba(25,18,29,0.96)_0%,rgba(17,20,27,0.94)_100%)]',
  feature: 'border-neon-teal/25 bg-[linear-gradient(180deg,rgba(41,17,31,0.98)_0%,rgba(16,19,27,0.96)_100%)] shadow-[0_0_32px_rgba(229,25,151,0.12)]',
  special: 'border-neon-teal/35 bg-[linear-gradient(180deg,rgba(31,16,27,0.98)_0%,rgba(17,20,27,0.96)_100%)] shadow-[0_0_36px_rgba(229,25,151,0.16)]',
}

export default function MenuSectionBlock({
  section,
  className = '',
  tone = 'default',
}: MenuSectionBlockProps) {
  const eyebrow =
    tone === 'special' ? 'BOARD SPECIALS' : tone === 'feature' ? 'SPOTLIGHT' : null

  return (
    <section
      aria-labelledby={`${section.id}-heading`}
      className={`rounded-[28px] border p-6 md:p-7 ${toneClasses[tone]} ${className}`}
    >
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-[36rem]">
          {eyebrow ? (
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-neon-teal/85">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${section.id}-heading`}
            className={`${eyebrow ? 'mt-2' : ''} font-clash text-[30px] font-bold leading-[0.95] tracking-[-0.04em] text-soft-white md:text-[36px]`}
          >
            {section.name}
          </h2>
          {section.description ? (
            <p className="mt-3 max-w-2xl font-inter text-sm leading-relaxed text-cool-mist md:text-[15px]">
              {section.description}
            </p>
          ) : null}
        </div>

        {section.priceNote ? (
          <span className="inline-flex items-center rounded-full border border-neon-teal/35 bg-neon-teal/10 px-4 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-neon-teal">
            {section.priceNote}
          </span>
        ) : null}
      </header>

      {section.display === 'chips' ? (
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label={`${section.name} options`}>
          {section.items.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3 font-inter text-sm font-medium leading-snug text-soft-white/92"
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-6 divide-y divide-white/[0.08]">
          {section.items.map((item) => (
            <li key={item.name} className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
              <div className="min-w-0 flex-1">
                <h3 className="font-inter text-[18px] font-semibold tracking-[0.01em] text-soft-white">
                  {item.name}
                </h3>
                {item.description ? (
                  <p className="mt-1 font-inter text-sm leading-relaxed text-cool-mist">
                    {item.description}
                  </p>
                ) : null}
              </div>

              {(item.price || item.secondaryPrice) ? (
                <div className="shrink-0 text-right">
                  {item.price ? (
                    <p className="font-inter text-base font-semibold tracking-[0.04em] text-neon-teal">
                      {item.price}
                    </p>
                  ) : null}
                  {item.secondaryPrice ? (
                    <p className="mt-1 font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-soft-white/55">
                      {item.secondaryPrice}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      )}

      {section.choices && section.choices.length > 0 ? (
        <div className="mt-6 border-t border-white/[0.08] pt-5">
          <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-neon-teal/85">
            {section.choicesTitle ?? 'Options'}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${section.name} ${section.choicesTitle ?? 'options'}`}>
            {section.choices.map((choice) => (
              <li
                key={choice}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-inter text-[12px] font-medium uppercase tracking-[0.08em] text-soft-white/88"
              >
                {choice}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}
