'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function EventsMic() {
  const reduced = useReducedMotion();

  const bobTransition = {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  };

  const pulseTransition = {
    duration: 3.6,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  };

  const glintTransition = {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    times: [0, 0.8, 0.85, 0.95, 1],
  };

  return (
    <div
      className="hidden lg:block absolute right-14 top-1/2 -translate-y-1/2 pointer-events-none z-10"
      style={{ width: 130, height: 273 }}
    >
      {/* Pulsing neon halo */}
      <motion.div
        animate={reduced ? {} : { opacity: [0.65, 1, 0.65], scale: [1, 1.12, 1] }}
        transition={pulseTransition}
        style={{
          position: 'absolute',
          left: '50%',
          top: '40%',
          width: 260,
          height: 260,
          translate: '-50% -50%',
          background: 'radial-gradient(circle, rgba(229,25,151,0.45) 0%, rgba(229,25,151,0.15) 35%, transparent 65%)',
          filter: 'blur(6px)',
          pointerEvents: 'none',
        }}
      />

      {/* Bobbing mic body */}
      <motion.div
        animate={reduced ? {} : { y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={bobTransition}
        style={{ position: 'absolute', left: '50%', top: 0, translateX: '-50%' }}
      >
        <svg
          viewBox="0 0 100 220"
          width={130}
          height={286}
          style={{ overflow: 'visible' }}
        >
          <defs>
            <radialGradient id="eMicHead" cx="0.4" cy="0.35" r="0.7">
              <stop offset="0%" stopColor="#3a1525" />
              <stop offset="60%" stopColor="#1a0810" />
              <stop offset="100%" stopColor="#0A0C11" />
            </radialGradient>
            <linearGradient id="eMicHandle" x1="0" x2="1">
              <stop offset="0%" stopColor="#1a0d15" />
              <stop offset="50%" stopColor="#3a2030" />
              <stop offset="100%" stopColor="#0A0C11" />
            </linearGradient>
            <linearGradient id="eMicRing" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#E51997" />
              <stop offset="100%" stopColor="#7a0d52" />
            </linearGradient>
            <filter id="eMicGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Head sphere */}
          <ellipse cx="50" cy="58" rx="38" ry="44"
            fill="url(#eMicHead)"
            stroke="rgba(245,240,238,0.12)" strokeWidth="0.6" />

          {/* Grille — vertical bars */}
          {Array.from({ length: 9 }, (_, i) => {
            const x = 18 + i * 4;
            const dx = x - 50;
            const ry = Math.sqrt(Math.max(0, 38 * 38 - dx * dx)) * (44 / 38);
            if (!isFinite(ry) || ry < 4) return null;
            return (
              <line key={`v${i}`} x1={x} x2={x} y1={58 - ry} y2={58 + ry}
                stroke="rgba(245,240,238,0.18)" strokeWidth="0.7" />
            );
          })}

          {/* Grille — horizontal bars */}
          {Array.from({ length: 7 }, (_, i) => {
            const y = 22 + i * 12;
            const dy = y - 58;
            const rx = Math.sqrt(Math.max(0, 44 * 44 - dy * dy)) * (38 / 44);
            if (!isFinite(rx) || rx < 4) return null;
            return (
              <line key={`h${i}`} y1={y} y2={y} x1={50 - rx} x2={50 + rx}
                stroke="rgba(245,240,238,0.14)" strokeWidth="0.6" />
            );
          })}

          {/* Head highlight / specular */}
          <ellipse cx="36" cy="40" rx="14" ry="9"
            fill="rgba(229,25,151,0.35)" filter="url(#eMicGlow)" />
          <ellipse cx="34" cy="38" rx="6" ry="3"
            fill="rgba(245,240,238,0.45)" />

          {/* Neon collar ring */}
          <ellipse cx="50" cy="100" rx="36" ry="6"
            fill="url(#eMicRing)" filter="url(#eMicGlow)" />
          <ellipse cx="50" cy="99.2" rx="36" ry="2.2"
            fill="#ff5fc0" opacity="0.8" />

          {/* Collar body */}
          <rect x="38" y="104" width="24" height="10" rx="2"
            fill="#1a0d15" stroke="rgba(245,240,238,0.1)" strokeWidth="0.5" />
          <rect x="40" y="106" width="20" height="2"
            fill="rgba(229,25,151,0.55)" filter="url(#eMicGlow)" />

          {/* Handle */}
          <rect x="42" y="114" width="16" height="92" rx="6"
            fill="url(#eMicHandle)" stroke="rgba(245,240,238,0.08)" strokeWidth="0.5" />
          <rect x="44" y="118" width="2" height="84" rx="1"
            fill="rgba(245,240,238,0.18)" />
          <rect x="40" y="204" width="20" height="6" rx="2"
            fill="#0A0C11" stroke="rgba(229,25,151,0.5)" strokeWidth="0.6" />

          {/* Glint */}
          <motion.circle
            cx="64" cy="48" r="1.5" fill="#fff"
            animate={reduced ? {} : { opacity: [0, 0, 1, 1, 0] }}
            transition={glintTransition}
          />
        </svg>
      </motion.div>
    </div>
  );
}
