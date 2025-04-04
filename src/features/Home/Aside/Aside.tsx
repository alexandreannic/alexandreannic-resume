import React from 'react'
import {cssMixins, mobileWidth, tabletWidth} from '@/utils/style'
import {useI18n} from '@/i18n/I18nContext'
import Logo from '@/utils/Logo'
import Box from '@mui/material/Box'
import {AsideLinkCompact} from '@/features/Home/Aside/AsideLinkCompact'
import {AsideMenu} from '@/features/Home/Aside/AsideMenu'
import {sanitizeId} from '@/features/Home/Section'
import {Divider} from '@mui/material'

export const asideWidth = 306
export const asideWidthCompact = 260

export const Aside = () => {
  const {m} = useI18n()

  return (
    <Box
      component="aside"
      sx={{
        position: 'fixed',
        top: 16,
        pr: 1,
        bottom: 0,
        width: asideWidth,
        overflowY: 'auto',
        overflowX: 'hidden',
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
          <Box sx={{color: 'text.secondary', fontSize: '1.2em', fontWeight: 500}}>
            {m.job}
          </Box>
        </Box>
      </Box>

      <AsideLinkCompact/>

      <Divider sx={{
        mb: 1,
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

      <Divider sx={{mt: 1, mb: 2}}/>

      <Box dangerouslySetInnerHTML={{__html: m.summary}} sx={{
        // color: 'text.secondary',
        '& p': {
          mt: 0,
          mb: 1,
        },
        fontSize: cssMixins.fontSmall,
        mb: 1,
        textAlign: 'justify'
      }}/>

      {m.various.articles.map(_ =>
        <Box dangerouslySetInnerHTML={{__html: _}} sx={{mb: .5}}/>)}
    </Box>
  )
}
