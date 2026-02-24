// app/layout.tsx or a server component

import {cvEn} from '@/i18n/cv.en'
import {Cv} from '@/i18n/Cv'
import {Lang} from '@/i18n/I18nContext'
import {cvFr} from '@/i18n/cv.fr'

export function getLangFromRequest(req: Request): Lang {
  const acceptLang = req.headers.get('accept-language')?.split(',')[0].split('-')[0]
  return acceptLang === 'en' ? Lang.en : Lang.fr
}

export function getCvForLang(lang: Lang): Cv {
  return lang === 'fr' ? cvFr : cvEn
}