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
  // GC-8: primary — menu-board display font with neon pink fill
  primary: 'border border-neon-teal bg-neon-teal text-stage-noir font-clash font-bold uppercase tracking-[0.08em] shadow-[0_0_24px_rgba(229,25,151,0.32)] hover:bg-neon-teal-hover hover:border-neon-teal-hover hover:-translate-y-0.5 hover:scale-[1.01]',
  // GC-8: secondary — supporting condensed font, glass surface treatment
  secondary: 'border border-white/10 bg-glass-surface text-soft-white font-inter font-semibold uppercase tracking-[0.12em] hover:bg-[#241620] hover:border-white/20 hover:-translate-y-0.5',
  // GC-8: ghost — transparent, neon accent border and text
  ghost: 'border border-neon-teal/70 bg-transparent text-neon-teal font-inter font-semibold uppercase tracking-[0.12em] hover:bg-[rgba(229,25,151,0.12)] hover:border-neon-teal hover:-translate-y-0.5',
  // GC-8: ghost-light — transparent, Soft White border and text (for use on dark photo overlays)
  'ghost-light': 'border border-soft-white/70 bg-transparent text-soft-white font-inter font-semibold uppercase tracking-[0.12em] hover:bg-white/10 hover:border-soft-white hover:-translate-y-0.5',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[12px] leading-none rounded-full min-h-[44px]',
  md: 'px-7 py-3 text-[13px] leading-none rounded-full min-h-[44px]',
  lg: 'px-8 py-3.5 text-[14px] leading-none rounded-full min-h-[48px]',
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
  const classes = `inline-flex items-center justify-center gap-2 text-center transition-all duration-150 ease-out disabled:pointer-events-none disabled:opacity-60 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

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
