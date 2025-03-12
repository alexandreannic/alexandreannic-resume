import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import {AnimatedText} from '@/app/Cv/AnimatedText'

export const PanelStep = ({isFirst, label}: {label: string, isFirst?: boolean}) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'flex-end',
      ml: 5,
    }}>
      <Box sx={{
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        mr: 1,
        visibility: isFirst ? 'hidden' : undefined,
        height: isFirst ? undefined : 36,
        width: 3,
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))`,
      }}/>
      <Typography fontWeight={500} fontFamily="monospace" fontSize="small" color="textSecondary" sx={{p: .5}}>
        <AnimatedText text={label}/>
      </Typography>
    </Box>
  )
}