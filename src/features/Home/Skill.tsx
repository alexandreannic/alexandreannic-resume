import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {cssMixins, makeSx} from '@/utils/style'
import {Rate} from './Rate'
import {IconRef, MixIcon} from '@/features/Home/MixIcon'

const logoSize = 18

export const Skill = ({
  icon,
  title,
  rate,
  children,
}: {
  icon: IconRef
  title: string;
  rate: number;
  children: ReactNode;
}) => {
  return (
    <Box className="Skill" sx={{
      '&:not(:last-of-type) .skill-text': {
        mb: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
      },
      '&:last-of-type .skill-text': {
        pb: 0,
      },
    }}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <MixIcon icon={icon} size={logoSize} sxColor="secondary.main" sx={{mr: 1.5}}/>
        <Box
          sx={{
            display: 'flex',
            color: 'text.primary',
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
      <Box>
        <Typography
          className="skill-text"
          sx={{
            ml: 12 + (logoSize * 1.2) + 'px',
            fontSize: cssMixins.fontSmall,
            mt: 0.25,
            color: 'text.secondary',
            pb: 1,
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  )
}
