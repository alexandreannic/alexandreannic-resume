import Typography from '@mui/material/Typography'
import {cssMixins} from '@/app/utils/style'
import Box from '@mui/material/Box'
import React from 'react'

export const CvPanelTitle = ({
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
        sx={{whiteSpace: 'nowrap', flex: 1, color: 'text.primary', fontSize: cssMixins.fontBig, mb: 0}}
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