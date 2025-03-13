import React from 'react'
import {cssMixins} from '../../utils/style'
import {useI18n} from '../../i18n/I18nContext'
import Logo from '../../utils/Logo'
import Box from '@mui/material/Box'
import {AsideLinkCompact} from '@/app/Cv/Aside/AsideLinkCompact'


export const Aside = () => {
  const {m} = useI18n()

  return (
    <Box
      component="aside"
      sx={{width: 320, marginRight: 1.5}}
    >
      {/* Header */}
      <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
        <Logo
          sx={{backgroundColor: 'rgba(0,0,0,.4)', backgroundSize: '110%', borderRadius: '50%', marginRight: 1.5}}
          size={100}
          src="avatar.png"
        />
        <Box>
          <Box sx={{fontSize: cssMixins.fontMainTitle, textAlign: 'center'}}>Alexandre Annic</Box>
          <Box sx={{color: 'primary.main', fontSize: '1.2em', fontWeight: 500}}>
            {m.job}
          </Box>
        </Box>
      </Box>

      {/* Contact Links */}
      <AsideLinkCompact/>

      {/* Skills */}
      {/*{m.skills.map((s, i) => (*/}
      {/*  <AsideSection title={s.title} key={i}>*/}
      {/*    {s.content.map((c, j) => (*/}
      {/*      <Skill key={j} logoStr={c.logoStr} logo={c.logo} logoFa={c.logoFa} title={c.title} rate={c.rate}>*/}
      {/*        {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}*/}
      {/*      </Skill>*/}
      {/*    ))}*/}
      {/*  </AsideSection>*/}
      {/*))}*/}

      {/* Various Articles */}
      {/*<AsideSection title={m.various.label}>*/}
      {/*  {m.various.articles.map((v, i) => (*/}
      {/*    <Box sx={{marginBottom: 0.5}} key={i} dangerouslySetInnerHTML={{__html: v}}/>*/}
      {/*  ))}*/}
      {/*</AsideSection>*/}
    </Box>
  )
}
