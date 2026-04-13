// GC-4: Shared analytics utility — all GA4 event tracking goes through here
// Prevents repeated 'window as any' casts and centralizes event naming

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void
  }
}

export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params)
  }
}

export function trackPhoneClick(source: string, phone?: string) {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: source,
    phone_number: phone,
  })
}

export function trackRoomsCTAClick(roomId: string) {
  trackEvent('rooms_cta_click', {
    event_category: 'engagement',
    event_label: roomId,
  })
}

export function trackPrivateEventsCTAClick() {
  trackEvent('private_events_cta_click', {
    event_category: 'engagement',
  })
}

export function trackFormSubmit(formName: string) {
  trackEvent(`${formName}_form_submit`, {
    event_category: 'conversion',
    event_label: formName,
  })
}
