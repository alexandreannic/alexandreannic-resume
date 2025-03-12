import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {cssMixins} from '../utils/style'
import {SxProps} from '@mui/system'
import {PanelStep} from '@/app/Cv/PanelStep'
import {PanelTitle} from '@/app/Cv/PanelTitle'

export const Panel = ({
  title,
  tag,
  subTitle,
  logo,
  honor,
  dense = false,
  children,
  step,
  sx,
  isFirst,
}: {
  step?: string
  title?: string;
  tag?: string;
  subTitle?: string;
  logo?: string;
  honor?: string;
  dense?: boolean;
  children?: ReactNode;
  sx?: SxProps
  isFirst?: boolean
}) => {
  return (
    <>
      {step && (
        <PanelStep label={step} isFirst={isFirst}/>
      )}
      <Box
        sx={{
          // border: '1px solid',
          // borderColor: 'divider',
          padding: 2,
          borderRadius: cssMixins.radius + 'px',
          backgroundColor: 'background.paper',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'all 300ms ease-in-out',
          '&:hover': {
            transform: 'scale(1.015)',
            boxShadow: `
              0 8px 30px rgba(0, 70, 200, 0.4),
              0 0 0 1px rgba(100, 150, 255, 0.2),
              inset 0 1px 1px rgba(255, 255, 255, 0.1)`
          },
          fontSize: cssMixins.fontMedium,
          '&:not(:last-of-type)': {
            pb: dense ? 1 : 1.5,
            // mb: dense ? 1 : 1.5,
          },
          '& code': {
            color: 'text.primary',
            fontWeight: 500,
          },
          // borderBottom: '1px solid',
          borderColor: 'divider',
          ...sx,
        }}
      >
        {title && (
          <PanelTitle title={title} honor={honor} tag={tag}/>
        )}
        {subTitle && (
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'secondary.main',
              fontSize: cssMixins.fontSmall,
            }}
          >
            {subTitle}
          </Typography>
        )}
        {children && (
          <Typography sx={{mt: 0.5, color: 'text.secondary', fontSize: cssMixins.fontSmall}}>
            {children}
          </Typography>
        )}
      </Box>
    </>
  )
}
