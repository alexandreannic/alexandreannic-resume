'use client'
import React from 'react'
import Box from '@mui/material/Box'
import {alpha, keyframes} from '@mui/system'

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
    box-shadow: 0 0 0 0 ${alpha('#64FFDA', 0.4)};
  }
  70% {
    box-shadow: 0 0 0 6px ${alpha('#64FFDA', 0)};
  }
  100% {
    box-shadow: 0 0 0 0 ${alpha('#64FFDA', 0)};
  }
`

export const Tag = ({label, index = 0}: {label?: string; index?: number}) => {
  const animationDelay = `${1 + index * 0.1}s`

  return (
    <Box
      sx={{
        display: 'inline-flex',
        backgroundColor: alpha('#64FFDA', 0.1),
        color: 'primary.main',
        p: .5,
        pr: 1.5,
        pl: 1.5,
        borderRadius: 50,
        opacity: 0, // Start invisible
        animation: `${fadeInSlide} 0.5s ease-out forwards, ${pulse} 1.5s 2`,
        animationDelay: `${animationDelay}, ${animationDelay}`,
        // Add hover effect
        transition: 'transform 0.2s, background-color 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: alpha('#64FFDA', 0.2),
        },
        '&:not(:last-of-type)': {
          mr: 1,
        }
      }}
    >
      {label}
    </Box>
  )
}