import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {SxProps} from '@mui/system'
import {cssMixins} from '@/utils/style'
import {CvPanelTitle} from '@/features/Cv/CvPanelTitle'

export const CvPanel = ({
  title,
  tag,
  subTitle,
  logo,
  honor,
  dense = false,
  children,
  step,
  horizontal,
  sx,
  isFirst,
}: {
  horizontal?: boolean,
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
    <Box
      sx={{
        padding: 2,
        borderRadius: cssMixins.radius + 'px',
        backgroundColor: 'background.paper',
        // border: '1px solid',
        // borderColor: 'divider',
        transition: 'all 300ms ease-in-out',
        fontSize: cssMixins.fontMedium,
        '& ul': {
          m: 0,
          paddingLeft: '12px',
        },
        ...horizontal ? {
          flex: 1,
          '&:not(:last-of-type)': {
            borderTopRightRadius: cssMixins.radiusSmall + 'px',
            borderBottomRightRadius: cssMixins.radiusSmall + 'px',
          },
          '&:not(:first-of-type)': {
            borderTopLeftRadius: cssMixins.radiusSmall + 'px',
            borderBottomLeftRadius: cssMixins.radiusSmall + 'px',
          }
        } : {
          '&:not(:last-of-type)': {
            borderBottomLeftRadius: cssMixins.radiusSmall + 'px',
            borderBottomRightRadius: cssMixins.radiusSmall + 'px',
            pb: dense ? 1 : 1.5,
          },
          '&:not(:first-of-type)': {
            borderTopLeftRadius: cssMixins.radiusSmall + 'px',
            borderTopRightRadius: cssMixins.radiusSmall + 'px',
          }
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
      <Box sx={{display: 'flex', alignItems: 'start', justifyContent: 'space-between'}}>
        <Box>
          {title && (
            <CvPanelTitle title={title} tag={tag} sx={{mt: -.5}}/>
          )}
          {
            subTitle && (
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
            )
          }
        </Box>
        <Box sx
               ={
          {
            color: 'text.disabled', fontSize: cssMixins.fontSmall
          }
        }>{
          step
        }</Box>
      </Box>
      {
        (children || honor) && (
          <Typography sx={{mt: 0.5, height: '100%', color: 'text.secondary', textAlign: 'justify', fontSize: cssMixins.fontSmall}}>
            {honor}
            {children}
          </Typography>
        )
      }
    </Box>
  )
}
