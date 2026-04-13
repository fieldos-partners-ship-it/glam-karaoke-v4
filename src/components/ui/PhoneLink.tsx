'use client'
// GC-3: PhoneLink — tracked phone component
// All phone links on site go through this component — no raw <a href="tel:">
// 'use client' required: component handles onClick for GA4 tracking

import { businessInfo } from '@/data/content'
import { trackPhoneClick } from '@/lib/analytics'

interface PhoneLinkProps {
  source: string
  className?: string
  children?: React.ReactNode
  displayNumber?: string
}

export default function PhoneLink({
  source,
  className = '',
  children,
  displayNumber,
}: PhoneLinkProps) {
  const display = children ?? displayNumber ?? businessInfo.phone

  return (
    <a
      href={`tel:${businessInfo.phoneTel}`}
      onClick={() => trackPhoneClick(source)}
      className={`text-neon-teal hover:text-neon-teal-hover transition-colors duration-100 ${className}`}
      aria-label={`Call Glam Karaoke at ${businessInfo.phone}`}
    >
      {display}
    </a>
  )
}
