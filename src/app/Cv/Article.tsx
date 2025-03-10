import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {cssMixins} from '../utils/style'

export const Article = ({
  title,
  period,
  location,
  logo,
  honor,
  dense = false,
  children,
}: {
  title: string;
  period: string;
  location: string;
  logo?: string;
  honor?: string;
  dense?: boolean;
  children?: ReactNode;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: cssMixins.fontMedium,
        '&:not(:last-of-type)': {
          pb: dense ? 1 : 1.5,
          mb: dense ? 1 : 1.5,
          borderBottom: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      <Box sx={{flex: 1}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography
            variant="h6"
            sx={{flex: 1, fontSize: cssMixins.fontBig}}
          >
            {title}
            {honor && (
              <Typography component="span" sx={{color: 'black'}}>
                {' '}
                ({honor.toLowerCase()})
              </Typography>
            )}
          </Typography>
          <Typography sx={{float: 'right', color: 'text.disabled'}}>
            {period}
          </Typography>
        </Box>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'primary.main',
            fontSize: cssMixins.fontSmall,
            mt: 0.25,
          }}
        >
          {location}
        </Typography>
        {children && (
          <Typography sx={{mt: 0.5, color: 'text.secondary', fontSize: cssMixins.fontSmall}}>
            {children}
          </Typography>
        )}
      </Box>
    </Box>
  )
}
