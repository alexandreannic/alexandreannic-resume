'use client'
import React from 'react'
import Box from '@mui/material/Box'
import {alpha, keyframes} from '@mui/system'
import {cssAlpha} from '@/app/utils/style'

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

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 ${cssAlpha('--mui-palette-primary-main', 0.4)};
  }
  70% {
    box-shadow: 0 0 0 6px ${cssAlpha('--mui-palette-primary-main', 0)};
  }
  100% {
    box-shadow: 0 0 0 0 ${cssAlpha('--mui-palette-primary-main', 0)};
  }
`

export const Tag = ({label, index = 0}: {label?: string; index?: number}) => {
  const animationDelay = `${1 + index * 0.1}s`

  return (
    <Box
      sx={{
        display: 'inline-flex',
        backgroundColor: cssAlpha('--mui-palette-primary-main', .08),
        color: 'primary.main',
        py: .25,
        px: 1.5,
        borderRadius: 50,
        opacity: 0,
        animation: `${fadeInSlide} 0.5s ease-out forwards, ${pulse} 1.5s 2`,
        animationDelay: `${animationDelay}, ${animationDelay}`,
        transition: 'transform 0.2s, background-color 0.2s',
        '&:not(:last-of-type)': {
          mr: 1,
        }
      }}
    >
      {label}
    </Box>
  )
}