import Typography from '@mui/material/Typography'
import {cssMixins} from '@/app/utils/style'
import Box from '@mui/material/Box'
import React from 'react'

export const PanelTitle = ({
  title,
  honor,
  tag,
}: {
  title: string,
  honor?: string
  tag?: string
}) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Typography
        variant="h6"
        sx={{flex: 1, color: 'text.primary', fontSize: cssMixins.fontBig, lineHeight: 1, mb: 1}}
      >
        {title}
        {honor && (
          <Typography component="span">
            {' '}
            - {honor.toLowerCase()}
          </Typography>
        )}
      </Typography>
      <Typography sx={{float: 'right', color: 'text.disabled'}}>
        {tag}
      </Typography>
    </Box>
  )
}