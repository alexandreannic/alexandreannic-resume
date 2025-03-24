'use client'
import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'
import {mapFor} from '@axanc/ts-utils'
import {keyframes} from '@mui/system'

// Animation keyframes for the stars
const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const Rate = ({rate, fontSize = 16}: {fontSize?: number, rate: number}) => {
  const hasHalf = rate % 1 !== 0
  const integer = Math.trunc(rate)
  const [visibleStars, setVisibleStars] = useState(0)

  // Animate stars appearing one by one
  useEffect(() => {
    let currentStar = 0
    const totalStars = integer + (hasHalf ? 1 : 0)

    const interval = setInterval(() => {
      if (currentStar < totalStars) {
        currentStar += 1
        setVisibleStars(currentStar)
      } else {
        clearInterval(interval)
      }
    }, Math.random() * 250) // Adjust timing as needed

    return () => clearInterval(interval)
  }, [integer, hasHalf])

  const getStarIcon = (index: number, type: 'star' | 'star_half' | 'star_border') => {
    const isVisible = index < visibleStars

    return (
      <Icon
        key={`${type}-${index}`}
        sx={{
          fontSize: `${fontSize}px !important`,
          opacity: isVisible ? 1 : 0,
          animation: isVisible ? `${popIn} 0.3s ease forwards` : 'none',
          transform: 'scale(1)', // Ensures the transform works properly with animation
        }}
      >
        {type}
      </Icon>
    )
  }

  return (
    <Box sx={{color: 'primary.main', display: 'flex', alignItems: 'center'}}>
      {/* Full stars */}
      {mapFor(integer, (i) => getStarIcon(i, 'star'))}

      {/* Half star if needed */}
      {hasHalf && getStarIcon(integer, 'star_half')}

      {/* Empty stars */}
      {mapFor(5 - integer - (hasHalf ? 1 : 0), (i) => (
        <Icon
          key={`star_border-${i}`}
          sx={{fontSize: `${fontSize}px !important`}}
        >
          star_border
        </Icon>
      ))}
    </Box>
  )
}