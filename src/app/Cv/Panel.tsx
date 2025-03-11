import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {cssMixins} from '../utils/style'
import {SxProps} from '@mui/system'
import {PanelStep} from '@/app/Cv/PanelStep'

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
  title: string;
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
          backdropFilter: 'blur(8px)',
          // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          fontSize: cssMixins.fontMedium,
          '&:not(:last-of-type)': {
            pb: dense ? 1 : 1.5,
            // mb: dense ? 1 : 1.5,
          },
          '& code': {
            color: 'text.primary',
            fontWeight: 500,
          },
          borderBottom: '1px solid',
          borderColor: 'divider',
          ...sx,
        }}
      >
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography
            variant="h6"
            sx={{flex: 1, fontSize: cssMixins.fontBig, lineHeight: 1, mb: 1}}
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
