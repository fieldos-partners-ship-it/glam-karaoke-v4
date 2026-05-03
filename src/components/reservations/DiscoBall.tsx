'use client'

import { motion, useReducedMotion } from 'framer-motion'

type TileSpec = {
  key: string
  left: number
  top: number
  size: number
  delay: number
  tint: string
}

const tilePalette = [
  'rgba(255,255,255,0.82)',
  'rgba(239,232,244,0.82)',
  'rgba(255,207,236,0.78)',
  'rgba(216,230,255,0.72)',
]

// Full-resolution: 121 tiles — used on sm+ viewports (desktop)
const discoTiles: TileSpec[] = []

for (let row = 0; row < 11; row += 1) {
  for (let col = 0; col < 11; col += 1) {
    const x = col / 10
    const y = row / 10
    const dx = x - 0.5
    const dy = y - 0.5
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > 0.47) continue

    discoTiles.push({
      key: `${row}-${col}`,
      left: 8 + col * 7.8,
      top: 8 + row * 7.8,
      size: 6.8,
      delay: ((row * 11 + col) % 7) * 0.18,
      tint: tilePalette[(row + col) % tilePalette.length],
    })
  }
}

// Mobile-simplified: ~30 tiles — every other row/col to reduce animation budget on small viewports
const discoTilesMobile: TileSpec[] = []

for (let row = 0; row < 11; row += 2) {
  for (let col = 0; col < 11; col += 2) {
    const x = col / 10
    const y = row / 10
    const dx = x - 0.5
    const dy = y - 0.5
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > 0.47) continue

    discoTilesMobile.push({
      key: `m-${row}-${col}`,
      left: 8 + col * 7.8,
      top: 8 + row * 7.8,
      size: 6.8,
      delay: ((row * 11 + col) % 7) * 0.18,
      tint: tilePalette[(row + col) % tilePalette.length],
    })
  }
}

// Shared inner ball renderer — accepts tiles array for mobile/desktop split
function DiscoBallInner({
  tiles,
  reduceMotion,
}: {
  tiles: TileSpec[]
  reduceMotion: boolean | null
}) {
  return (
    <motion.div
      className="absolute inset-[54px] rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.95),rgba(255,255,255,0.18)_18%,rgba(255,255,255,0.08)_42%,rgba(14,17,23,0.6)_78%),radial-gradient(circle_at_55%_65%,rgba(229,25,151,0.18),transparent_52%)] shadow-[0_0_45px_rgba(255,255,255,0.15),0_0_120px_rgba(229,25,151,0.2)]"
      animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }}
      transition={reduceMotion ? undefined : { duration: 36, repeat: Infinity, ease: 'linear' }}
    >
      <div className="absolute inset-[8%] overflow-hidden rounded-full">
        {tiles.map((tile) => (
          <motion.span
            key={tile.key}
            className="absolute rounded-[3px] border border-white/15 shadow-[0_0_12px_rgba(255,255,255,0.12)]"
            style={{
              left: `${tile.left}%`,
              top: `${tile.top}%`,
              width: `${tile.size}%`,
              height: `${tile.size}%`,
              backgroundColor: tile.tint,
            }}
            animate={
              reduceMotion
                ? { opacity: 0.88 }
                : { opacity: [0.7, 1, 0.78], scale: [1, 1.04, 1] }
            }
            transition={{
              duration: 2.7 + tile.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: tile.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute inset-[-18%] rounded-full bg-[linear-gradient(115deg,transparent_22%,rgba(255,255,255,0.9)_50%,transparent_80%)] opacity-50 mix-blend-screen blur-[2px]"
        animate={reduceMotion ? { x: '0%' } : { x: ['-135%', '135%', '-135%'] }}
        transition={reduceMotion ? undefined : { duration: 8.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-[-8%] rounded-full bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.45),transparent_45%)] blur-xl"
        animate={reduceMotion ? { opacity: 0.55 } : { opacity: [0.32, 0.58, 0.36] }}
        transition={reduceMotion ? undefined : { duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

export default function DiscoBall() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]">
      <motion.div
        className="absolute left-1/2 top-0 h-44 w-px -translate-x-1/2 bg-gradient-to-b from-white/10 via-white/40 to-transparent"
        animate={reduceMotion ? { opacity: 0.8 } : { opacity: [0.55, 0.95, 0.6] }}
        transition={reduceMotion ? undefined : { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      />


      {/* Mobile: ~30 simplified tiles to reduce animation budget on 375px viewports */}
      <div className="sm:hidden">
        <DiscoBallInner tiles={discoTilesMobile} reduceMotion={reduceMotion} />
      </div>
      {/* Desktop: full 121-tile showpiece */}
      <div className="hidden sm:block">
        <DiscoBallInner tiles={discoTiles} reduceMotion={reduceMotion} />
      </div>

      <motion.div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(229,25,151,0.22),transparent_58%)] blur-3xl"
        animate={reduceMotion ? { scale: 1 } : { scale: [0.96, 1.06, 1] }}
        transition={reduceMotion ? undefined : { duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
