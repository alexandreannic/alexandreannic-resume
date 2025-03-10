// useSSRSafeTheme.tsx
'use client'

import {useTheme, Theme} from '@mui/material/styles'
import {createContext, useContext, ReactNode, JSX} from 'react'

// Create context with proper typing
const ThemeContext = createContext<Theme | null>(null)

interface ThemeProviderProps {
  children: ReactNode;
}

export function AppThemeProvider({children}: ThemeProviderProps): JSX.Element {
  const theme = useTheme()

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook with type safety
export function useSSRSafeTheme(): Theme {
  const theme = useContext(ThemeContext)

  // Add runtime check for theme existence
  if (!theme) {
    throw new Error('useSSRSafeTheme must be used within a ThemeProvider')
  }

  return theme
}