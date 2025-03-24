import {Home} from '@/app/features/Home/Home'
import {defaultTheme} from '@/app/core/theme'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import {ThemeProvider} from '@mui/material/styles'

export default function HomePage() {
  return (
    <ThemeProvider defaultMode="dark" theme={defaultTheme}>
      <CssBaseline enableColorScheme/>
      <Home/>
    </ThemeProvider>
  )
}
