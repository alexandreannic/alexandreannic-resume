import Typography from '@mui/material/Typography'
import {cssMixins} from '@/utils/style'
import Box from '@mui/material/Box'
import React from 'react'
import {SxProps} from '@mui/system'

export const PanelTitle = ({
  title,
  honor,
  tag,
  sx,
}: {
  sx?: SxProps
  title: string,
  honor?: string
  tag?: string
}) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', ...sx}}>
      <Typography
        variant="h6"
        sx={{flex: 1, color: 'text.primary', fontSize: cssMixins.fontBig, lineHeight: 1, mb: 1}}
      >
        {title}
        {honor && (
          <span style={{fontWeight: 300}}>
            {' '}
            - {honor.toLowerCase()}
          </span>
        )}
      </Typography>
      <Typography sx={{float: 'right', color: 'text.disabled'}}>
        {tag}
      </Typography>
    </Box>
  )
}