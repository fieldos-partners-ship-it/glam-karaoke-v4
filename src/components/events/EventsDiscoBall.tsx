'use client';

import { motion, useReducedMotion } from 'framer-motion';

const COLS = 12;
const ROWS = 9;

const TILE_COLORS = [
  '#f5f0ee', '#e9dfe4', '#c7bcc4', '#ff5fc0',
  '#E51997', '#9bd9ec', '#4ED8FF', '#f5f0ee',
  '#d8a8c4', '#3a1d2c', '#1a0d15', '#5a3a4a',
];

export default function EventsDiscoBall() {
  const reduced = useReducedMotion();

  const tiles = Array.from({ length: ROWS * COLS }, (_, i) => {
    const seed = ((Math.floor(i / COLS) * 31) + (i % COLS) * 17) % 100;
    return { seed };
  });

  return (
    <div
      className="hidden lg:block absolute left-16 top-1/2 -translate-y-1/2 pointer-events-none z-10"
      style={{ width: 140, height: 260 }}
    >
      {/* Atmospheric pink glow */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 168,
          width: 336,
          height: 336,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(229,25,151,0.20) 0%, rgba(229,25,151,0.06) 35%, transparent 65%)',
          filter: 'blur(8px)',
        }}
      />

      {/* Wire */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          width: 1,
          height: 120,
          transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, rgba(245,240,238,0), rgba(245,240,238,0.45) 30%, rgba(245,240,238,0.55))',
        }}
      />

      {/* Ring at wire-to-ball joint */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 116,
          width: 18,
          height: 6,
          transform: 'translateX(-50%)',
          border: '1px solid rgba(245,240,238,0.5)',
          borderRadius: '50%',
        }}
      />

      {/* Rotating ball */}
      <motion.div
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          left: '50%',
          top: 120,
          width: 140,
          height: 140,
          translateX: '-50%',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 35% 30%, #6b5a66 0%, #2a1a24 60%, #0f070b 100%)',
          boxShadow: [
            'inset -25px -25px 35px rgba(0,0,0,0.65)',
            'inset 14px 8px 21px rgba(255,255,255,0.18)',
            '0 0 56px rgba(229,25,151,0.35)',
          ].join(', '),
        }}
      >
        {/* Tile grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            gap: 1,
            maskImage: 'radial-gradient(circle at 50% 50%, black 55%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 55%, transparent 80%)',
          }}
        >
          {tiles.map((t, i) => (
            <div
              key={i}
              style={{
                background: TILE_COLORS[t.seed % TILE_COLORS.length],
                boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.35), inset -1px -1px 0 rgba(0,0,0,0.45)',
              }}
            />
          ))}
        </div>

        {/* Spherical shading overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: [
              'radial-gradient(circle at 32% 26%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 18%, transparent 38%)',
              'radial-gradient(circle at 8% 55%, rgba(229,25,151,0.45) 0%, transparent 45%)',
              'radial-gradient(circle at 95% 60%, rgba(78,216,255,0.28) 0%, transparent 40%)',
              'radial-gradient(circle at 70% 85%, rgba(0,0,0,0.65) 0%, transparent 55%)',
            ].join(', '),
            mixBlendMode: 'screen',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 85%)',
            pointerEvents: 'none',
          }}
        />
        {/* Equator seam */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '49%',
            height: 1,
            background: 'rgba(0,0,0,0.4)',
          }}
        />
      </motion.div>

      {/* Conic light rays */}
      <motion.div
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          left: '50%',
          top: 190,
          width: 448,
          height: 448,
          translate: '-50% -50%',
          opacity: 0.3,
          pointerEvents: 'none',
          background: 'repeating-conic-gradient(from 0deg, transparent 0deg, rgba(229,25,151,0.18) 2deg, transparent 4deg, transparent 22deg)',
          maskImage: 'radial-gradient(circle, transparent 30%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle, transparent 30%, black 40%, transparent 90%)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
