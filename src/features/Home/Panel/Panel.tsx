import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {cssMixins} from '@/utils/style'
import {SxProps} from '@mui/system'
import {PanelStep} from '@/features/Home/Panel/PanelStep'
import {PanelTitle} from '@/features/Home/Panel/PanelTitle'

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
      <Box
        sx={{
          // border: '1px solid',
          // borderColor: 'divider',
          // border: '1px solid transparent',
          border: theme => theme.palette.mode === 'dark'
            ? `1px solid #ffffff14`
            : undefined,
          padding: 2,
          borderRadius: cssMixins.radius + 'px',
          backgroundColor: 'background.paper',
          backdropFilter: 'blur(15px)',
          transition: 'all 300ms ease-in-out',
          '&:hover': {
            // borderColor: 'primary.main',
            backdropFilter: 'blur(20px)',
            transform: 'scale(1.015)',
            boxShadow: 2,
            // ...theme.applyStyles('dark', {
            //   boxShadow: `
            //   0 8px 30px color-mix(in srgb, var(--mui-palette-secondary-main) 40%, transparent),
            //   0 0 0 1px color-mix(in srgb, var(--mui-palette-secondary-main) 20%, transparent),
            //   inset 0 1px 1px rgba(255, 255, 255, 0.1)`
            // }),
            // ...theme.applyStyles('light', {
            //   boxShadow: theme.shadows[3],
            // }),
          },
          fontSize: cssMixins.fontMedium,
          '&:not(:last-of-type)': {
            pb: dense ? 1 : 1.5,
            // mb: dense ? 1 : 1.5,
          },
          '& b': {
            color: 'text.primary',
            fontWeight: 500,
          },
          '& code': {
            // background: 'rgba(0,0,0,.1)',
            fontFamily: 'inherit',
            // color: 'text.primary',
            // fontWeight: 500,
          },
          // borderBottom: '1px solid',
          // borderColor: 'divider',
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
              color: 'text.disabled',
              fontSize: cssMixins.fontSmall,
            }}
          >
            {subTitle}
          </Typography>
        )}
        {children && (
          <Typography sx={{mt: 0.5, height: '100%', color: 'text.secondary', fontSize: cssMixins.fontSmall}}>
            {children}
          </Typography>
        )}
      </Box>
      {step && (
        <PanelStep label={step} isFirst={!isFirst}/>
      )}
    </>
  )
}
