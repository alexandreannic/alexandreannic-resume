'use client'
import {Cv} from '@/features/Cv/Cv'
import {ThemeProvider} from '@mui/material/styles'
import {makeTheme} from '@/core/theme'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'

export default function CvPage() {
  return (
    <ThemeProvider defaultMode="dark" theme={makeTheme({
      fontSize: 12.5,
      spacing: 7,
    })}>
      <CssBaseline enableColorScheme/>
      <Cv/>
    </ThemeProvider>
  )
}
