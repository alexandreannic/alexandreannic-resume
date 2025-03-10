import React from 'react'
import {Aside} from './Aside/Aside'
import Section from './Section'
import {Article} from './Article'
import {cssMixins} from '../utils/style'
import {useI18n} from '../i18n/I18nContext'
import Box from '@mui/material/Box'

export const Body = () => {
  const {m} = useI18n()
  return (
    <Box sx={{
      background: t => t.palette.background.paper,
      padding: t => t.spacing(2),
      lineHeight: cssMixins.lineHeight,
      display: 'flex',
    }}>
      <Aside/>
      <Box sx={{flex: 1,}}>
        {/* Education Section */}
        <Section icon="school" title={m.education.label}>
          {m.education.articles.map((e, i) => (
            <Article key={i} title={e.title} honor={e.honor} period={e.period} location={e.location} logo={e.logo}/>
          ))}
        </Section>

        {/* Work Experience Section */}
        <Section icon="business_center" title={m.work.label}>
          {m.work.articles.map((e, i) => (
            <Article key={i} title={e.title} honor={e.honor} period={e.period} location={e.location} logo={e.logo}>
              <Box dangerouslySetInnerHTML={{__html: e.content}}/>
            </Article>
          ))}
        </Section>
      </Box>
    </Box>
  )
}
