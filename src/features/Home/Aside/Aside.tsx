import React from 'react'
import {cssMixins, mobileWidth, tabletWidth} from '@/utils/style'
import Logo from '@/utils/Logo'
import Box from '@mui/material/Box'
import {AsideLinkCompact} from '@/features/Home/Aside/AsideLinkCompact'
import {AsideMenu} from '@/features/Home/Aside/AsideMenu'
import {sanitizeId} from '@/features/Home/Section'
import {Divider, ToggleButton, ToggleButtonGroup} from '@mui/material'
import {Cv} from '@/i18n/Cv'
import {Lang} from '@/i18n/I18nContext'
import {Lan} from '@mui/icons-material'
import {ModeSwitch} from '@/features/Home/ModeSwitch'

export const asideWidth = 306
export const asideWidthCompact = 260

export const Aside = ({m, lang, setLang}: {m: Cv, lang?: Lang, setLang: any}) => {
  return (
    <Box
      component="aside"
      sx={{
        position: 'fixed',
        top: 16,
        pr: 1,
        display: 'flex',
        flexDirection: 'column',
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
      <Box sx={{flex: 1}}>
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
            size={80}
            src="avatar3.jpeg"
          />
          <Box>
            <Box sx={{fontSize: cssMixins.fontMainTitle, textAlign: 'center'}}>Alexandre Annic</Box>
            <Box sx={{color: 'text.secondary', fontSize: '1.2em', fontWeight: 500}}>
              {m.job}
            </Box>
          </Box>
        </Box>

        <AsideLinkCompact m={m}/>

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
          fontWeight: 500,
          color: 'text.disabled',
          fontSize: '1.1rem',
          'b': {
            color: 'text.primary',
            fontWeight: 500,
          },
          // color: 'text.secondary',
          '& p': {
            mt: 0,
            mb: 1,
          },
          mb: 2,
          textAlign: 'justify'
        }}/>

        {m.various.articles.map(_ =>
          <Box dangerouslySetInnerHTML={{__html: _}} key={_} sx={{fontSize: '1.1rem', mt: 1.5}}/>
        )}
      </Box>

      <Box sx={{mb: 1, display: 'flex', alignItems: 'center', gap: 1}}>
        <ToggleButtonGroup color="primary" exclusive fullWidth size="small" value={lang} onChange={(_, value) => {
          setLang(value)
        }}>
          <ToggleButton value={Lang.fr}>FR</ToggleButton>
          <ToggleButton value={Lang.en}>EN</ToggleButton>
        </ToggleButtonGroup>
        <ModeSwitch/>
      </Box>
    </Box>
  )
}
