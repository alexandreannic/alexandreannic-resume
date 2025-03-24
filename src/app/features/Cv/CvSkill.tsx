import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import {cssMixins, makeSx} from '../../utils/style'
import {IconRef, MixIcon} from '@/app/features/Home/MixIcon'
import {Rate} from '@/app/features/Home/Rate'

const logoSize = 16

const sx = makeSx({
  root: {
    p: 0,
    mb: 0.125,
    flex: '50%',
    // width: '40%',
    borderRadius: cssMixins.radius + 'px',
    // border: '1px solid',
    // borderColor: 'divider',
  },
  head: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center'
  },
})

export const CvSkill = ({
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
    <Box sx={{
      '&:last-of-type .skill-text': {
        pb: 0,
      },
      ...sx.root
    }}>
      <Box sx={sx.head}>
        <MixIcon icon={icon} size={logoSize} sxColor="text.disabled" sx={{minHeight: logoSize * 1.5}}/>
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
        </Box>
        <Rate rate={rate} fontSize={14}/>
      </Box>
    </Box>
  )
}
