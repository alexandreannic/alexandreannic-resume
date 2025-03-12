import * as React from 'react'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {theme} from './theme'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import ModeSwitch from '@/app/ModeSwitch'
import {Ubuntu, Ubuntu_Mono} from 'next/font/google'
import {Metadata} from 'next'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'

const ubuntu = Ubuntu({
  weight: '400',
  variable: '--font-ubuntu',
  subsets: ['latin'],
})

const ubuntu_Mono = Ubuntu_Mono({
  weight: '400',
  variable: '--font-ubuntu-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Alexandre Annic',
  description: 'Senior Software Engineer specializing in TypeScript, with a keen eye for design and a strong foundation in architecture, scalability, and clean code.',
}

export default function RootLayout(props: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${ubuntu.variable} ${ubuntu_Mono.variable}`}>
    <InitColorSchemeScript attribute="class"/>
    <AppRouterCacheProvider options={{enableCssLayer: true}}>
      <ThemeProvider defaultMode="dark" theme={theme}>
        <CssBaseline enableColorScheme/>
        <ModeSwitch/>
        {props.children}
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  )
}