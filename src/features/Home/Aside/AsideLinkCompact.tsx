import {ProfileLink} from '@/features/Home/Aside/ProfileLink'
import {AsideSection} from '@/features/Home/Aside/AsideSection'
import React from 'react'
import {useI18n} from '@/i18n/I18nContext'
import Box from '@mui/material/Box'
import {ModeSwitch} from '@/features/Home/ModeSwitch'
import Icon from '@mui/material/Icon'

export const AsideLinkCompact = () => {
  const {m} = useI18n()
  return (
    <AsideSection>
      <ProfileLink iconColor="text.disabled" icon={{iconMat: 'location_on'}}>{m.location}</ProfileLink>
      <ProfileLink iconColor="text.disabled" icon={{iconMat: 'email'}}>
        <a href="mailto:alexandre.annic1@gmail.com">alexandre.annic1@gmail.com</a>
      </ProfileLink>
      <Box sx={{maxWidth: 400, display: 'flex', mt: 1, mb: -1, alignItems: 'center', justifyContent: 'space-around'}}>
        {m.links.map(link =>
          <ProfileLink
            size={26}
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