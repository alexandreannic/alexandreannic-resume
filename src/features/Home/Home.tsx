'use client'
import React from 'react'
import {Aside, asideWidth, asideWidthCompact} from './Aside/Aside'
import Section from './Section'
import {Panel} from '@/features/Home/Panel/Panel'
import {cssMixins, mobileWidth, tabletWidth} from '@/utils/style'
import Box from '@mui/material/Box'
import {Skill} from '@/features/Home/Skill'
import {Tag} from '@/features/Home/Tag'
import {Link} from '@/features/Home/Link'
import {Animated} from '@/features/Home/Animated'
import {Project} from '@/features/Home/Project'
import {Grid2} from '@mui/material'
import {Lang, useI18n} from '@/i18n/I18nContext'

export const Home = ({lang: defaultLang}: {lang?: Lang} = {}) => {
  const {m, lang, setLang} = useI18n(defaultLang)
  return (
    <Box sx={{
      position: 'relative',
      padding: 2,
      lineHeight: cssMixins.lineHeight,
      display: 'flex',
      [`@media (max-width:${mobileWidth}px)`]: {
        padding: 1,
        flexDirection: 'column',
        alignItems: 'center',
      },
    }}>
      <Box sx={{
        mb: 4,
        mr: 1,
        width: asideWidth,
        [`@media (max-width:${tabletWidth}px)`]: {
          width: asideWidthCompact,
        },
        [`@media (max-width:${mobileWidth}px)`]: {
          width: 'auto',
        },
      }}>
        <Aside m={m} lang={lang} setLang={setLang}/>
      </Box>
      <Box sx={{
        flex: 1,
        ml: 1,
        [`@media (max-width:${mobileWidth}px)`]: {
          ml: 0,
        },
      }}>
        <Box sx={{flex: 1, maxWidth: 900, margin: '0 auto'}}>
          <Section title={m.skills.label}>
            {/*<Box dangerouslySetInnerHTML={{__html: m.summary}} sx={{mb: 1}}/>*/}
            <Grid2 container spacing={2}>
              <Grid2 size={{xs: 12, md: 6}}>
                {m.skills.articles.filter(_ => _.title === 'Languages').map(((s, i) =>
                    <Animated delay={200} key={i}>
                      <Panel title={s.title} sx={{mb: 2}}>
                        {s.content.map((c, j) => (
                          <Skill key={j} icon={c.icon} title={c.title} rate={c.rate}>
                            {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}
                          </Skill>
                        ))}
                      </Panel>
                    </Animated>
                ))}
                {m.skills.articles.filter(_ => _.title === 'Persistence').map(((s, i) =>
                    <Animated delay={100} key={i}>
                      <Panel title={s.title}>
                        {s.content.map((c, j) => (
                          <Skill key={j} icon={c.icon} title={c.title} rate={c.rate}>
                            {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}
                          </Skill>
                        ))}
                      </Panel>
                    </Animated>
                ))}
              </Grid2>
              <Grid2 size={{xs: 12, md: 6}}>
                {m.skills.articles.filter(_ => _.title === 'Framework').map(((s, i) =>
                    <Animated key={i}>
                      <Panel title={s.title} sx={{mb: 2}}>
                        {s.content.map((c, j) => (
                          <Skill key={j} icon={c.icon} title={c.title} rate={c.rate}>
                            {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}
                          </Skill>
                        ))}
                      </Panel>
                    </Animated>
                ))}
                {m.skills.articles.filter(_ => _.title === 'DevOps').map(((s, i) =>
                    <Animated key={i}>
                      <Panel title={s.title} sx={{mb: 2}}>
                        {s.content.map((c, j) => (
                          <Skill key={j} icon={c.icon} title={c.title} rate={c.rate}>
                            {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}
                          </Skill>
                        ))}
                      </Panel>
                    </Animated>
                ))}
              </Grid2>
            </Grid2>
          </Section>

          <Section title={m.work.label}>
            {m.work.articles.map((e, i) => (
              <Animated delay={100 + i * 50} key={i}>
                <Panel isFirst={i === 0} step={e.period} honor={e.honor} title={e.title} subTitle={e.location} logo={e.logo}>
                  {e.content && <Box dangerouslySetInnerHTML={{__html: e.content}}/>}
                  <Box sx={{mt: 1, display: 'flex', gap: 1,}}>
                    {e.tags?.map((_, i) =>
                      <Tag key={_} label={_} index={i}/>
                    )}
                  </Box>
                  <Box sx={{mt: 1, fontSize: cssMixins.fontMedium}}>
                    {e.links?.map(_ =>
                      <Link key={_.url} url={_.url} icon={_.icon} label={_.label}/>
                    )}
                  </Box>
                </Panel>
              </Animated>
            ))}
          </Section>

          <Section icon="school" title={m.education.label}>
            {m.education.articles.map((e, i) => (
              <Panel
                isFirst={i === 0}
                key={i}
                title={e.title}
                honor={e.honor}
                step={e.period}
                subTitle={e.location}
                logo={e.logo}
              >
                {e.content && <Box dangerouslySetInnerHTML={{__html: e.content}}/>}
              </Panel>
            ))}
          </Section>

          <Section title={m.projects.label}>
            <Grid2 container spacing={2}>
              {m.projects.articles.map((_, i) =>
                <Grid2 size={{xs: 12, md: 6}} key={i}>
                  <Project project={_} sx={{flex: '33%', height: '100%'}}/>
                </Grid2>
              )}
            </Grid2>
          </Section>
        </Box>
      </Box>
    </Box>
  )
}
