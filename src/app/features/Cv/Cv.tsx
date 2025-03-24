import {PdfSlide} from '@/app/shared/Pdf/PdfSlide'
import {Pdf} from '@/app/shared/Pdf/PdfLayout'
import Box from '@mui/material/Box'
import React from 'react'
import {useI18n} from '@/app/i18n/I18nContext'
import {CvPanel} from '@/app/features/Cv/CvPanel'
import {CvSkill} from '@/app/features/Cv/CvSkill'
import Logo from '@/app/utils/Logo'
import {cssMixins, shortUrl} from '@/app/utils/style'
import {Grid2} from '@mui/material'
import {CvSection} from '@/app/features/Cv/CvSection'
import {CvSideLink} from '@/app/features/Cv/CvSideLink'
import {CvLink} from '@/app/features/Cv/CvLink'
import {TagContainer} from '@/app/features/Home/Tag'

export const Cv = () => {
  const {m} = useI18n()
  return (
    <Pdf>
      <PdfSlide format="vertical">
        <Box sx={{p: 2, display: 'flex'}}>
          <Box sx={{width: 260, mr: 2.5,}}>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
              <Logo
                sx={{backgroundColor: 'rgba(0,0,0,.4)', mb: -.5, backgroundSize: '110%', borderRadius: '50%', marginRight: 1.5}}
                size={55}
                src="avatar.png"
              />
              <Box>
                <Box sx={{fontSize: cssMixins.fontTitle}}>Alexandre Annic</Box>
                <Box sx={{color: 'primary.main', fontSize: cssMixins.fontBig, fontWeight: 500}}>
                  {m.job}
                </Box>
              </Box>
            </Box>
            <Box sx={{mb: 1}}>
              <CvSideLink link={{icon: {iconMat: 'location_on'}, label: m.location}}/>
              <CvSideLink link={{
                url: 'https://alexandreannic.web.app/',
                label: 'alexandreannic.web.app',
                icon: {iconMat: 'account_circle'},
              }}/>
              {m.links.map(_ => <CvSideLink link={_}/>)}
            </Box>
            <Box dangerouslySetInnerHTML={{__html: m.summary}} sx={{color: 'text.primary', textAlign: 'justify', mb: 1.5}}/>

            {m.skills.articles.map(s =>
              <CvSection title={s.title}>
                <Grid2 container spacing={1}>
                  {s.content.map((c, j) => (
                    <Grid2 size={12}>
                      <CvSkill key={j} icon={c.icon} title={c.title} rate={c.rate}>
                        {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}
                      </CvSkill>
                    </Grid2>
                  ))}
                </Grid2>
              </CvSection>
            )}
            <CvSection title={m.various.label}>
              {m.various.articles.map(_ =>
                <Box dangerouslySetInnerHTML={{__html: _}}/>
              )}
            </CvSection>
          </Box>
          <Box sx={{flex: 1}}>
            <CvSection icon="school" title={m.education.label}>
              <Box sx={{display: 'flex'}}>
                {m.education.articles.map((e, i) => (
                  <CvPanel
                    horizontal
                    isFirst={i === 0}
                    key={i}
                    title={e.shortTitle}
                    subTitle={e.shortLocation ?? e.location}
                    logo={e.logo}
                  >
                    <Box sx={{color: 'text.disabled'}}>{e.period}</Box>
                    {e.honor}
                  </CvPanel>
                ))}
              </Box>
            </CvSection>

            <CvSection title={m.work.label}>
              {m.work.articles.map((e, i) => (
                <CvPanel isFirst={i === 0} step={e.period} honor={e.honor} title={e.title} subTitle={e.shortLocation ?? e.location} logo={e.logo}>
                  <Box dangerouslySetInnerHTML={{__html: e.content}}/>
                  <TagContainer sx={{mt: 1, fontSize: cssMixins.fontMedium}}>
                    {e.links?.map(_ =>
                      <CvLink key={_.url} url={_.url} icon={_.icon} label={shortUrl(_.url)}/>
                    )}
                  </TagContainer>
                </CvPanel>
              ))}
            </CvSection>
          </Box>
        </Box>
      </PdfSlide>
    </Pdf>
  )
}