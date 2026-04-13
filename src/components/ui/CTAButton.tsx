// GC-8: CTAButton variant system — primary/secondary/ghost/ghost-light
// All 4 variants defined here. No style prop accepted — variants only.
// Min 44px height enforced on all variants.

import React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'ghost-light'
type Size = 'sm' | 'md' | 'lg'

interface CTAButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

const variantClasses: Record<Variant, string> = {
  // GC-8: primary — Neon Teal bg, Stage Noir text, teal glow shadow
  primary: 'bg-neon-teal text-stage-noir font-inter font-semibold hover:bg-neon-teal-hover hover:scale-[1.02] shadow-[0_0_20px_rgba(0,217,196,0.25)] transition-all duration-150 ease-out',
  // GC-8: secondary — Glass Surface bg, Soft White text
  secondary: 'bg-glass-surface text-soft-white font-inter font-semibold hover:bg-[#232D47] transition-all duration-150 ease-out',
  // GC-8: ghost — transparent, Neon Teal border and text
  ghost: 'bg-transparent border border-neon-teal text-neon-teal font-inter font-semibold hover:bg-[rgba(0,217,196,0.1)] transition-all duration-150 ease-out',
  // GC-8: ghost-light — transparent, Soft White border and text (for use on dark photo overlays)
  'ghost-light': 'bg-transparent border border-soft-white/70 text-soft-white font-inter font-semibold hover:bg-white/10 transition-all duration-150 ease-out',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm rounded-full min-h-[44px]',
  md: 'px-7 py-3.5 text-[15px] rounded-full min-h-[44px]',
  lg: 'px-8 py-4 text-base rounded-full min-h-[48px]',
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  target,
  rel,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
