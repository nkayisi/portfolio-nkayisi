'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from '../src/locales/en/messages.js'
import { messages as frMessages } from '../src/locales/fr/messages.js'

// Initialize i18n instance globally
i18n.load({
  en: enMessages,
  fr: frMessages,
})

// Function to detect browser language
function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en' // Default to English on server-side
  }

  const browserLang = navigator.language || navigator.languages?.[0] || 'en'
  const langCode = browserLang.split('-')[0].toLowerCase()

  // Return French if browser language is French, otherwise default to English
  return langCode === 'fr' ? 'fr' : 'en'
}

// Activate default locale (will be updated in useEffect)
i18n.activate('en')

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [, forceUpdate] = useState({})

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem('language') as Language

    let initialLanguage: Language

    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      // Use saved language if it exists and is valid
      initialLanguage = savedLanguage
    } else {
      // Detect browser language if no saved preference
      initialLanguage = detectBrowserLanguage()
    }

    setLanguage(initialLanguage)
    i18n.activate(initialLanguage)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    console.log('🌍 Changing language to:', lang)
    console.log('🌍 Available locales:', Object.keys(i18n.messages))
    console.log('🌍 Current locale before:', i18n.locale)
    setLanguage(lang)
    i18n.activate(lang)
    console.log('🌍 Current locale after:', i18n.locale)
    console.log('🌍 Messages loaded for', lang, ':', Object.keys(i18n.messages[lang] || {}).length, 'messages')
    localStorage.setItem('language', lang)
    // Force re-render of all components
    forceUpdate({})
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      <I18nProvider i18n={i18n} key={language}>
        {children}
      </I18nProvider>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
