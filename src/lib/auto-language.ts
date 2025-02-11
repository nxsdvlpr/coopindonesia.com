'use client'

import { usePathname, useRouter } from '@/i18n/routing'
import { getBrowserLanguage } from '@/utils/client'
import { useEffect } from 'react'

export function AutoLanguage() {
  const router = useRouter()

  const pathname = usePathname()

  useEffect(() => {
    const enabledAutoLanguage = sessionStorage.getItem('enabledAutoLanguage')
    if (enabledAutoLanguage === 'true') return
    const browserLanguage = getBrowserLanguage()
    const activeLanguage = browserLanguage.split('-')[0] === 'en' ? 'id' : 'ja'
    router.push(`/${activeLanguage}${pathname}`)
    document.documentElement.lang = activeLanguage ?? 'id'
  }, [])

  return null
}
