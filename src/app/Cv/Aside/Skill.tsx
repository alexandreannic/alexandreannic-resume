import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {cssMixins} from '../../utils/style'
import Logo from '../../utils/Logo'
import {Rate} from './Rate'

const logoSize = 18

export const Skill = ({
  logo,
  title,
  rate,
  children,
}: {
  logo?: string;
  title: string;
  rate: number;
  children: ReactNode;
}) => {
  return (
    <Box
      sx={{
        '&:not(:last-of-type) .skill-text': {
          mb: 1,
          borderBottom: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        {logo && (
          <Logo src={logo} size={logoSize} sx={{mr: 1}}/>
        )}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            fontWeight: 500,
            fontSize: cssMixins.fontMedium,
          }}
        >
          {title}
          <Rate rate={rate}/>
        </Box>
      </Box>
      <Box sx={{flex: 1}}>
        <Typography
          className="skill-text"
          sx={{
            ml: 1 + logoSize,
            fontSize: cssMixins.fontSmall,
            mt: 0.25,
            pb: 1,
            color: 'text.secondary',
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  )
}
