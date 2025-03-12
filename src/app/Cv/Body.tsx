import React from 'react'
import {Aside} from './Aside/Aside'
import Section from './Section'
import {Panel} from './Panel'
import {cssMixins} from '../utils/style'
import {useI18n} from '../i18n/I18nContext'
import Box from '@mui/material/Box'
import {Skill} from '@/app/Cv/Aside/Skill'
import {Tag} from '@/app/Cv/Tag'
import {Link} from '@/app/Cv/Link'
import {Animated} from '@/app/Cv/Animated'
import {Project} from '@/app/Cv/Project'
import {Grid2} from '@mui/material'

export const Body = () => {
  const {m} = useI18n()
  return (
    <Box sx={{
      position: 'relative',
      // background: defaultTheme.palette.background.paper,
      padding: 2,
      lineHeight: cssMixins.lineHeight,
      display: 'flex',
    }}>
      <Aside/>
      <Box sx={{flex: 1, maxWidth: 900, margin: '0 auto'}}>
        <Section title={m.skills.label}>
          <Box sx={{display: 'flex'}}>
            <Box sx={{mr: 1, flex: 1}}>
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
            </Box>

            <Box sx={{ml: 1, flex: 1}}>
              {m.skills.articles.filter(_ => _.title === 'Languages').map(((s, i) =>
                  <Animated delay={200} key={i}>
                    <Panel title={s.title}>
                      {s.content.map((c, j) => (
                        <Skill key={j} icon={c.icon} title={c.title} rate={c.rate}>
                          {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}
                        </Skill>
                      ))}
                    </Panel>
                  </Animated>
              ))}
            </Box>
          </Box>
        </Section>

        <Section title={m.work.label}>
          {m.work.articles.map((e, i) => (
            <Animated delay={100 + i * 50} key={i}>
              <Panel isFirst={i === 0} step={e.period} honor={e.honor} title={e.title} subTitle={e.location} logo={e.logo}>
                <Box dangerouslySetInnerHTML={{__html: e.content}}/>
                <Box sx={{mt: 1, fontSize: cssMixins.fontMedium}}>
                  {e.links?.map(_ =>
                    <Link key={_.url} url={_.url} icon={_.icon} label={_.label}/>
                  )}
                </Box>
                <Box sx={{mt: 1}}>
                  {e.tags?.map((_, i) =>
                    <Tag key={_} label={_} index={i}/>
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
            />
          ))}
        </Section>

        <Section title={m.projects.label}>
          <Grid2 container spacing={2}>
            {m.projects.articles.map((_, i) =>
              <Grid2 size={{xs: 12, md: 6}} key={i}>
                <Project project={_} sx={{flex: '33%'}}/>
              </Grid2>
            )}
          </Grid2>
        </Section>
      </Box>
    </Box>
  )
}
