'use client'
import {cvEn} from './cv.en'
import {Cv} from '@/i18n/Cv'
import {useEffect, useState} from 'react'
import {cvFr} from '@/i18n/cv.fr'

export enum Lang {
  fr = 'fr',
  en = 'en',
}

const defaultLang = Lang.en


export const useI18n = (initialLang?: Lang) => {
  // Default to 'fr' on SSR
  const [lang, setLang] = useState<Lang>(initialLang ?? Lang.fr)

  useEffect(() => {
    // Detect browser language only on client
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.split('-')[0] as Lang
      if (browserLang === 'en' || browserLang === 'fr') {
        setLang(browserLang)
      }
    }
  }, [])

  return {m: lang === 'fr' ? cvFr : cvEn, lang, setLang}
}