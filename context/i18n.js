import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import arTranslation from './locales/ar.json'
import enTranslation from './locales/en.json'
import esTranslation from './locales/es.json'

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: arTranslation },
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',
  // debug: true,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
