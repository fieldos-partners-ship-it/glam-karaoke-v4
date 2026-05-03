'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    _support?: Record<string, unknown>
  }
}

export default function ReamazeChatWidget() {
  useEffect(() => {
    const w = window as Window
    w._support = w._support || { ui: {}, user: {} }
    const support = w._support as Record<string, unknown>
    support.account = 'f74dd4d2-6a49-43d5-8d4e-c440a4f1cd1a'
    const ui = (support.ui as Record<string, unknown>) || {}
    support.ui = ui
    ui.contactMode = 'mixed'
    ui.enableKb = 'true'
    ui.mailbox = '1249248'
    ui.styles = { widgetColor: '#f41a8f', gradient: true }
    ui.shoutboxFacesMode = ''
    ui.widget = {
      allowBotProcessing: 'true',
      slug: 'glamkaraoke-dot-com',
      label: {
        text: "Hello 👋\nIf you want to make a reservation, I need your name, size of room, how many people, time, duration, and phone number to reserve your spot.\n\nSmall (~3 people, no YouTube): $40/hr\nMedium (8-10 people): $50/hr\nLarge (18-20 people): $70/hr\n\nAfter 10pm, it's 21+\n\nHappy Hour: $10 off all rooms Sun-Thu, 5-8pm\n\nLet us know if you have other questions :)",
        mode: 'notification',
        delay: 3,
        duration: 30,
        primary: '',
        secondary: 'No, thanks',
        sound: true,
      },
      position: 'bottom-right',
    }
    ui.overrides = (ui.overrides as Record<string, unknown>) || {}
    ;(ui.overrides as Record<string, unknown>).confirmationMessage =
      "Got it! We'll get back to you shortly. 🎤"
    support.apps = { recentConversations: {}, faq: { enabled: true } }
  }, [])

  return (
    <Script
      id="reamaze-loader"
      src="https://cdn.reamaze.com/assets/reamaze-loader.js"
      strategy="afterInteractive"
    />
  )
}
