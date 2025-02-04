import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  let locale = await requestLocale

  // Ensure that the incoming `locale` is valid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (
      await (locale === 'in'
        ? // When using Turbopack, this will enable HMR for `in`
          import('../translations/in.json')
        : import(`../translations/${locale}.json`))
    ).default,
  }
})
