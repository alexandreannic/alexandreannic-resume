'use client'
import React from 'react'
import Box from '@mui/material/Box'
import {alpha, BoxProps, keyframes, Theme, useTheme} from '@mui/system'
import {cssAlpha} from '@/utils/style'

const fadeInSlide = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = (t: Theme) => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${alpha(t.palette.secondary.main, 0.4)};
  }
  70% {
    box-shadow: 0 0 0 6px ${alpha(t.palette.secondary.main, 0)};
  }
  100% {
    box-shadow: 0 0 0 0 ${alpha(t.palette.secondary.main, 0)};
  }
`

export const TagContainer = ({sx, ...props}: BoxProps) => {
  return (
    <Box sx={{mb: -.5, display: 'flex', gap: .5, flexWrap: 'wrap', alignItems: 'center', ...sx}} {...props}/>
  )
}

export const Tag = ({label, index = 0}: {label?: string; index?: number}) => {
  const animationDelay = `${1 + index * 0.1}s`
  const t = useTheme()
  return (
    <Box
      sx={{
        display: 'inline-flex',
        backgroundColor: cssAlpha('--mui-palette-secondary-main', .08),
        color: 'secondary.main',
        py: .25,
        pl: 1.5,
        pr: 1.5,
        borderRadius: 50,
        opacity: 0,
        animation: `${fadeInSlide} 0.5s ease-out forwards, ${pulse(t)} 1.5s 2`,
        animationDelay: `${animationDelay}, ${animationDelay}`,
        transition: 'transform 0.2s, background-color 0.2s',
        m: 0,
      }}
    >
      {label}
    </Box>
  )
}