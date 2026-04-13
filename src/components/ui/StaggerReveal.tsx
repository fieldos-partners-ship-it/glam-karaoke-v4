'use client'

// StaggerReveal — Framer Motion staggered children reveal for card grids
// AP-039: uses Framer Motion whileInView with once:true — compliant
// 60ms stagger per item (Glam nightlife energy spec from UI_DIRECTION.md)

import { motion } from 'framer-motion'

interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  staggerMs?: number
  delay?: number
}

export default function StaggerReveal({
  children,
  className = '',
  staggerMs = 0.06,
  delay = 0,
}: StaggerRevealProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerMs,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  }

  // Wrap each direct child in a motion.div
  const wrappedChildren = Array.isArray(children)
    ? children.map((child, i) => (
        <motion.div key={i} variants={itemVariants}>
          {child}
        </motion.div>
      ))
    : <motion.div variants={itemVariants}>{children}</motion.div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {wrappedChildren}
    </motion.div>
  )
}
