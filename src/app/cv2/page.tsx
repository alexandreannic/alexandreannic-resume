'use client'
import {ThemeProvider} from '@mui/material/styles'
import {makeTheme} from '@/core/theme'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import {Cv2} from '@/features/Cv2/Cv2'

export default function CvPage() {
  return (
    <ThemeProvider defaultMode="dark" theme={makeTheme({
      fontSize: 12.9,
      spacing: 7,
      // bgPaper: '#fff',
      // bgDefault: 'rgb(246, 248, 252)',
    })}>
      <CssBaseline enableColorScheme/>
      <Cv2/>
    </ThemeProvider>
  )
}
