'use client'

// SectionReveal — Framer Motion whileInView wrapper for scroll-triggered fade+translateY
// AP-039: uses Framer Motion whileInView with once:true — compliant

import { motion, type Variants } from 'framer-motion'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right'
  delay?: number
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
}

export default function SectionReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay,
      }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  )
}
