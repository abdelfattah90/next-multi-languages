'use client'
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import i18n from './i18n'

interface LanguageContextType {
  changeLanguage: (newLanguage: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
  }

  useEffect(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage')
    const initialLanguage = selectedLanguage || 'ar'
    setCurrentLanguage(initialLanguage)
    i18n.changeLanguage(initialLanguage)
  }, [])
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null)

  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      {currentLanguage !== null ? children : null}
    </LanguageContext.Provider>
  )
}
