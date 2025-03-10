import {cvEn} from './cv.en'
import {Cv} from '@/app/i18n/Cv'

enum Lang {
  fr = 'fr',
  en = 'en',
}

const defaultLang = Lang.en

// type I18nContext = {
//   m: typeof cvEn
//   lang: Lang
//   changeLang: Dispatch<SetStateAction<Lang>>
// }
//
// const Context = createContext<I18nContext>({} as any)
//
// export const I18nContextProvider = ({children}: {children: ReactNode}) => {
//   const [lang, changeLang] = useState(defaultLang)
//   return (
//     <Context.Provider value={{
//       m: getMessagesByLang(lang),
//       lang,
//       changeLang
//     }}>
//       {children}
//     </Context.Provider>
//   )
// }

export const useI18n = (): {m: Cv} => {
  return {m: cvEn}
}

// export const useLang = () => {
//   const {lang} = useContext(Context)
//   return lang
// }
//
// export const useChangeLang = () => {
//   const {changeLang} = useContext(Context)
//   return changeLang
// }
//
// const getMessagesByLang = (lang: Lang) => {
//   switch (lang) {
//     case 'fr':
//       return cvFr
//     default:
//       return cvEn
//   }
// }
