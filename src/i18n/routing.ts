import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['in', 'ja'],
  defaultLocale: 'in',
  localePrefix: 'never',
})

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing)
