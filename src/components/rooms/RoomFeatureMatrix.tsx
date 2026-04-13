// RoomFeatureMatrix — Feature comparison across 3 room tiers
// Desktop: table with 4 columns. Mobile: 3 stacked comparison cards (NOT horizontal scroll table)
// Server component

import { rooms } from '@/data/content'
import { Check } from 'lucide-react'

const matrixRows = [
  { label: 'Sound System', key: 'soundSystem' as const },
  { label: 'Display Type', key: 'displayType' as const },
  { label: 'Song Library', key: 'songLibrary' as const },
  { label: 'iPad Song Control', key: 'ipadControl' as const },
  { label: 'Tambourines', key: 'tambourines' as const },
  { label: 'Min Party Size', key: 'minParty' as const },
  { label: 'Max Party Size', key: 'maxParty' as const },
  { label: 'Price per Hour', key: 'pricePerHour' as const },
]

function renderValue(value: string | number | boolean): React.ReactNode {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-neon-teal mx-auto" aria-label="Included" />
    ) : (
      <span className="text-cool-mist/40">—</span>
    )
  }
  if (typeof value === 'number') {
    // price formatting
    if (value >= 40) return <span className="text-neon-teal font-semibold">${value}/hr</span>
    return <span>{value} guests</span>
  }
  return <span>{value}</span>
}

export default function RoomFeatureMatrix() {
  return (
    <section className="bg-glass-surface py-20" aria-label="Room features comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
            COMPARE ROOMS
          </p>
          <h2 className="font-clash font-semibold text-[30px] md:text-[40px] text-soft-white leading-[1.1] tracking-[-0.01em]">
            What&apos;s In Every Room
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-white/[0.06]">
          <table className="w-full" aria-label="Room features comparison table">
            <thead>
              <tr className="bg-stage-noir border-b border-white/[0.06]">
                <th className="text-left px-6 py-4 font-inter font-semibold text-cool-mist text-sm w-1/4">
                  Feature
                </th>
                {rooms.map((room) => (
                  <th key={room.id} className="px-6 py-4 text-center font-clash font-semibold text-soft-white text-lg">
                    {room.name}
                    {room.mostPopular && (
                      <span className="ml-2 text-[10px] bg-neon-teal text-stage-noir px-2 py-0.5 rounded-full font-inter tracking-[0.08em] uppercase align-middle">
                        Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((row, i) => (
                <tr
                  key={row.key}
                  className={`border-b border-white/[0.04] ${i % 2 === 0 ? 'bg-glass-surface' : 'bg-glass-surface/60'}`}
                >
                  <td className="px-6 py-4 font-inter text-cool-mist text-sm">{row.label}</td>
                  {rooms.map((room) => (
                    <td key={room.id} className="px-6 py-4 text-center font-inter text-soft-white/90 text-sm">
                      {renderValue(room.featureMatrix[row.key] as string | number | boolean)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked comparison cards */}
        <div className="md:hidden space-y-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`rounded-2xl border p-6 ${
                room.mostPopular ? 'border-neon-teal bg-glass-surface' : 'border-white/[0.06] bg-glass-surface/60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-clash font-semibold text-xl text-soft-white">{room.name}</h3>
                {room.mostPopular && (
                  <span className="text-[10px] bg-neon-teal text-stage-noir px-2 py-1 rounded-full font-inter font-semibold tracking-[0.08em] uppercase">
                    Most Popular
                  </span>
                )}
              </div>
              <dl className="space-y-3">
                {matrixRows.map((row) => (
                  <div key={row.key} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                    <dt className="font-inter text-cool-mist text-sm">{row.label}</dt>
                    <dd className="font-inter text-soft-white/90 text-sm text-right">
                      {renderValue(room.featureMatrix[row.key] as string | number | boolean)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
