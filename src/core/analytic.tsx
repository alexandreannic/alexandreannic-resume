'use client'

import {appConf} from '@/core/config'
import {initializeApp} from 'firebase/app'
import {Analytics, getAnalytics, isSupported} from 'firebase/analytics'
import {logEvent} from '@firebase/analytics'
import {usePathname, useSearchParams} from 'next/navigation'
import {Suspense, useEffect} from 'react'

export let appAnalytics: Analytics | null
isSupported().then((supported) => {
  if (!supported) return
  const app = initializeApp(appConf)
  appAnalytics = getAnalytics(app)
})

export const PageTrackerContent = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!appAnalytics) return
    logEvent(appAnalytics, 'page_view', {
      page_path: pathname + (searchParams.toString() ? `?${searchParams}` : ''),
    })
  }, [pathname, searchParams])

  return null
}

export const PageTracker = () => {
  return (
    <Suspense fallback={null}>
      <PageTrackerContent/>
    </Suspense>
  )
}