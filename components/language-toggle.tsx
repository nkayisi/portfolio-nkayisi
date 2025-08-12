'use client'

import { useLanguage } from './language-context'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="relative bg-muted group px-3.5 py-1.5 h-auto transition-all duration-300 hover:scale-105 hover:shadow-lg border hover:border-primary/50 rounded-full"
    >
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        <span className="text-sm font-medium transition-colors duration-300">
          {language === 'en' ? 'EN' : 'FR'}
        </span>
      </div>
      
      {/* Animated indicator */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg">
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
      </div>
      
      <span className="sr-only">
        Switch to {language === 'en' ? 'French' : 'English'}
      </span>
    </Button>
  )
}
