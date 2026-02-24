import {Home} from '@/features/Home/Home'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {defaultTheme} from '@/core/theme'
import {Lang} from '@/i18n/I18nContext'

export default function HomePage() {
  return (
    <ThemeProvider defaultMode="dark" theme={defaultTheme}>
      <CssBaseline enableColorScheme/>
      <Home lang={Lang.en}/>
    </ThemeProvider>
  )
}