import { menuExperience } from '@/data/content'

export default function HappyHourContent() {
  return (
    <div className="overflow-hidden rounded-[36px] border border-neon-teal/20 bg-[radial-gradient(circle_at_top_left,rgba(229,25,151,0.18),transparent_34%),linear-gradient(180deg,rgba(26,16,23,0.98)_0%,rgba(14,18,25,0.96)_100%)] p-7 md:p-10">
      <div className="max-w-3xl">
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-neon-teal">
          {menuExperience.happyHour.eyebrow}
        </p>
        <h2 className="mt-3 font-clash text-[34px] font-bold leading-[0.95] tracking-[-0.04em] text-soft-white md:text-[54px]">
          {menuExperience.happyHour.headline}
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {menuExperience.happyHour.tiers.map((tier) => (
          <div
            key={tier.id}
            className="rounded-[28px] border border-white/[0.08] bg-black/20 p-6 flex flex-col"
          >
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-neon-teal">
              {tier.label}
            </p>
            <p className="mt-3 font-clash text-[22px] font-bold leading-tight text-soft-white md:text-[26px]">
              {tier.days} · {tier.hours}
            </p>
            <p className="mt-2 font-inter text-sm leading-relaxed text-cool-mist md:text-[15px]">
              {tier.offer}
            </p>
            {tier.notes.length > 0 && (
              <ul className="mt-4 space-y-2">
                {tier.notes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-3 font-inter text-sm leading-relaxed text-soft-white/86 md:text-[15px]"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
