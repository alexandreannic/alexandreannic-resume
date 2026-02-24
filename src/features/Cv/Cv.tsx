import {PdfSlide} from '@/shared/Pdf/PdfSlide'
import {Pdf} from '@/shared/Pdf/PdfLayout'
import Box from '@mui/material/Box'
import React, {useEffect} from 'react'
import {CvPanel} from '@/features/Cv/CvPanel'
import {CvSkill} from '@/features/Cv/CvSkill'
import {cssMixins, shortUrl} from '@/utils/style'
import {CvSection} from '@/features/Cv/CvSection'
import {CvSideLink} from '@/features/Cv/CvSideLink'
import {CvLink} from '@/features/Cv/CvLink'
import {TagContainer} from '@/features/Home/Tag'
import {map} from '@axanc/ts-utils'
import {cvEn} from '@/i18n/cv.en'
import Logo from '@/utils/Logo'
import {cvFr} from '@/i18n/cv.fr'

export const Cv = ({lang = 'en'}: {lang?: 'fr' | 'en'}) => {
  useEffect(() => {
    document.title = 'alexandre_annic.cv.se.' + lang
  }, [lang])
  // const {m} = useI18n()
  const m = lang === 'en' ? cvEn : cvFr
  return (
    <Pdf>
      <PdfSlide format="vertical">
        <Box sx={{px: 2.5, py: 2, display: 'flex'}}>
          <Box sx={{width: 245, mr: 2.5,}}>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
              {/*<Logo*/}
              {/*  sx={{backgroundColor: 'rgba(0,0,0,.4)', mb: 0, backgroundSize: '110%', borderRadius: '50%', marginRight: 1.5}}*/}
              {/*  size={50}*/}
              {/*  src="avatar3.jpeg"*/}
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
            <div>
              <Box component="i" className="fa-solid fa-quote-right" sx={{float: 'left', ml: -1, mr: .5, color: 'divider', fontSize: 34, transform: 'rotate(180deg)'}}/>
              {/*<Icon sx={{float: 'left', ml: '-8px', fontSize: 36, transform: 'rotate(180deg)'}} color="disabled">format_quote</Icon>*/}
              <Box
                dangerouslySetInnerHTML={{__html: m.summary}}
                sx={{
                  'b': {
                    fontWeight: 400,
                    color: 'black',
                  },
                  '& p': {
                    mt: 0,
                    mb: .5,
                  },
                  fontWeight: 400,
                  fontSize: cssMixins.fontSmall,
                  color: 'text.disabled',
                  textAlign: 'justify',
                  mb: 1.5
                }}/>
            </div>

            {m.skills.articles.map(s =>
              <CvSection title={s.title} sx={{mt: 2}} titleSx={{fontSize: '1rem', textTransform: 'uppercase', color: 'text.secondary'}}>
                {s.content.map((c, j) => (
                  <CvSkill key={j} icon={{...c.icon, iconSizeRation: (c.icon.iconSizeRation ?? 1) * .9}} title={c.title} rate={c.rate} sx={{mb: 1}}>
                    {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}
                  </CvSkill>
                ))}
              </CvSection>
            )}
            <CvSection title={m.various.label} titleSx={{fontSize: '1rem', textTransform: 'uppercase', color: 'text.secondary'}}>
              {m.various.articles.map(_ =>
                <Box dangerouslySetInnerHTML={{__html: _}} sx={{mb: .5}}/>
              )}
            </CvSection>
          </Box>
          <Box sx={{flex: 1}}>
            <CvSection icon="school" title={m.education.label}>
              <Box sx={{display: 'flex', gap: .25}}>
                {m.education.articles.map((e, i) => (
                  <CvPanel
                    sx={{flex: 1,}}
                    horizontal
                    isFirst={i === 0}
                    key={i}
                    title={e.title}
                    subTitle={e.shortLocation ?? e.location}
                    logo={e.logo}
                  >
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                      <Box sx={{color: 'text.disabled'}}>{e.period}</Box>
                      <Box>{e.honor}</Box>
                    </Box>
                  </CvPanel>
                ))}
              </Box>
            </CvSection>

            <CvSection title={m.work.label}>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: .25}}>
                {m.work.articles.map((e, i) => (
                  <CvPanel
                    isFirst={i === 0}
                    step={e.period}
                    honor={e.honor}
                    title={e.title}
                    subTitle={(map(e.shortLocation ?? e.location, loc => loc) ?? '') + (e.remote ? ` (${e.remote})` : '')}
                    logo={e.logo}
                  >
                    {e.content && (
                      <Box dangerouslySetInnerHTML={{__html: e.content}}/>
                    )}
                    <TagContainer sx={{mt: 1, mr: -10, fontSize: cssMixins.fontMedium}}>
                      {e.links?.map(_ =>
                        <CvLink key={_.url} url={_.url} icon={_.icon} label={shortUrl(_.url)}/>
                      )}
                    </TagContainer>
                  </CvPanel>
                ))}
              </Box>
            </CvSection>
          </Box>
        </Box>
      </PdfSlide>
    </Pdf>
  )
}