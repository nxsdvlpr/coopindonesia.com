'use client'

import { usePathname, useRouter } from '@/i18n/routing'
import { getBrowserLanguage } from '@/utils/client'
import { useEffect } from 'react'

export function AutoLanguage() {
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    const browserLanguage = getBrowserLanguage()
    const activeLanguage = browserLanguage.split('-')[0] === 'en' ? 'in' : 'ja'
    router.push(`/${activeLanguage}${pathname}`)
    document.documentElement.lang = activeLanguage ?? 'in'
  }, [])

  return null
}
