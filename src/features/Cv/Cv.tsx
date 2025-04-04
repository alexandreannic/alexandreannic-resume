import {PdfSlide} from '@/shared/Pdf/PdfSlide'
import {Pdf} from '@/shared/Pdf/PdfLayout'
import Box from '@mui/material/Box'
import React from 'react'
import {useI18n} from '@/i18n/I18nContext'
import {CvPanel} from '@/features/Cv/CvPanel'
import {CvSkill} from '@/features/Cv/CvSkill'
import Logo from '@/utils/Logo'
import {cssMixins, shortUrl} from '@/utils/style'
import {CvSection} from '@/features/Cv/CvSection'
import {CvSideLink} from '@/features/Cv/CvSideLink'
import {CvLink} from '@/features/Cv/CvLink'
import {TagContainer} from '@/features/Home/Tag'

export const Cv = () => {
  const {m} = useI18n()
  return (
    <Pdf>
      <PdfSlide format="vertical">
        <Box sx={{px: 3, py: 2, display: 'flex'}}>
          <Box sx={{width: 250, mr: 2.5,}}>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
              {/*<Logo*/}
              {/*  sx={{backgroundColor: 'rgba(0,0,0,.4)', mb: -.5, backgroundSize: '110%', borderRadius: '50%', marginRight: 1.5}}*/}
              {/*  size={55}*/}
              {/*  src="avatar.png"*/}
              {/*/>*/}
              <Box>
                <Box sx={{fontSize: cssMixins.fontTitle}}>Alexandre Annic</Box>
                <Box sx={{color: 'text.secondary', fontSize: cssMixins.fontBig, fontWeight: 500}}>
                  {m.job}
                </Box>
              </Box>
            </Box>
            <Box sx={{mb: 1.5}}>
              <CvSideLink link={{icon: {iconMat: 'location_on'}, label: m.location}}/>
              <CvSideLink link={{
                url: 'https://alexandreannic.web.app/',
                label: 'alexandreannic.web.app',
                icon: {iconMat: 'account_circle'},
              }}/>
              {m.links.map(_ => <CvSideLink link={_}/>)}
            </Box>
            <Box
              dangerouslySetInnerHTML={{__html: m.summary}}
              sx={{
                '& p': {
                  mt: 0,
                  mb: .5,
                },
                color: 'text.primary',
                textAlign: 'justify',
                mb: 1.5
              }}/>

            {m.skills.articles.map(s =>
              <CvSection title={s.title}>
                {s.content.map((c, j) => (
                  <CvSkill key={j} icon={c.icon} title={c.title} rate={c.rate} sx={{mb: 1}}>
                    {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}
                  </CvSkill>
                ))}
              </CvSection>
            )}
            <CvSection title={m.various.label}>
              {m.various.articles.map(_ =>
                <Box dangerouslySetInnerHTML={{__html: _}} sx={{mb: .25}}/>
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