import React from 'react'
import {cssMixins, mobileWidth, tabletWidth} from '../../utils/style'
import {useI18n} from '../../i18n/I18nContext'
import Logo from '../../utils/Logo'
import Box from '@mui/material/Box'
import {AsideLinkCompact} from '@/app/Cv/Aside/AsideLinkCompact'
import {AsideMenu} from '@/app/Cv/Aside/AsideMenu'
import {sanitizeId} from '@/app/Cv/Section'
import {Divider} from '@mui/material'

export const asideWidth = 300
export const asideWidthCompact = 260

export const Aside = () => {
  const {m} = useI18n()

  return (
    <Box
      component="aside"
      sx={{
        position: 'fixed',
        width: asideWidth,
        marginRight: 1.5,
        [`@media (max-width:${tabletWidth}px)`]: {
          width: asideWidthCompact,
        },
        [`@media (max-width:${mobileWidth}px)`]: {
          width: '100%',
          position: 'static',
        },
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 2,
        [`@media (max-width:${tabletWidth}px)`]: {
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}>
        <Logo
          sx={{backgroundColor: 'rgba(0,0,0,.4)', backgroundSize: '110%', borderRadius: '50%', marginRight: 1.5}}
          size={90}
          src="avatar.png"
        />
        <Box>
          <Box sx={{fontSize: cssMixins.fontMainTitle, textAlign: 'center'}}>Alexandre Annic</Box>
          <Box sx={{color: 'primary.main', fontSize: '1.2em', fontWeight: 500}}>
            {m.job}
          </Box>
        </Box>
      </Box>

      <Box dangerouslySetInnerHTML={{__html: m.summary}} sx={{mb: 1, textAlign: 'justify'}}/>

      <Divider sx={{my: 2}}/>

      <AsideLinkCompact/>

      <Divider sx={{
        my: 2,
        [`@media (max-width:${mobileWidth}px)`]: {
          display: 'none',
        },
      }}/>

      <AsideMenu sx={{
        mt: 1,
        [`@media (max-width:${mobileWidth}px)`]: {
          display: 'none',
        },
      }} sections={[
        m.skills.label,
        m.work.label,
        m.education.label,
        m.projects.label,
      ].map(_ => ({id: sanitizeId(_), title: _}))}/>
    </Box>
  )
}
