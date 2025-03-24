import {ProfileLink} from '@/app/features/Home/Aside/ProfileLink'
import {AsideSection} from '@/app/features/Home/Aside/AsideSection'
import React from 'react'
import {useI18n} from '@/app/i18n/I18nContext'
import Box from '@mui/material/Box'
import {ModeSwitch} from '@/app/features/Home/ModeSwitch'
import Icon from '@mui/material/Icon'

export const AsideLinkCompact = () => {
  const {m} = useI18n()
  return (
    <AsideSection>
      <ProfileLink icon={{iconMat: 'location_on'}}>{m.location}</ProfileLink>
      <ProfileLink icon={{iconMat: 'email'}}>
        <a href="mailto:alexandre.annic1@gmail.com">alexandre.annic1@gmail.com</a>
      </ProfileLink>
      <Box sx={{maxWidth: 400, display: 'flex', mt: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        {m.links.map(link =>
          <ProfileLink
            size={28}
            icon={link.icon}
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
        <Icon color="disabled" sx={{fontSize: 14}}>fiber_manual_record</Icon>
        <ModeSwitch/>
      </Box>
    </AsideSection>
  )
}