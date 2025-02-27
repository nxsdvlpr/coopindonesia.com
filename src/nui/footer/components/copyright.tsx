import { Flexbox, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { copyrightStyle } from './copyright.style'

export default function Copyright() {
  const t = useTranslations()
  const { wrapper, main } = copyrightStyle()

  return (
    <div className={wrapper()}>
      <div className={main()}>
        <Typo size="sm" color="gray-400">
          {t('sharedContent.copyright.title')}
        </Typo>
        <Flexbox>
          <Link
            className="font-semibold text-primary-500 hover:text-primary-700"
            href="/term"
          >
            {t('sharedContent.copyright.menuTerm')}
          </Link>
          <Link
            className="font-semibold text-primary-500 hover:text-primary-700"
            href="/privacy"
          >
            {t('sharedContent.copyright.menuPrivacy')}
          </Link>
          <Link
            className="font-semibold text-primary-500 hover:text-primary-700"
            href="/cookies"
          >
            {t('sharedContent.copyright.menuCookies')}
          </Link>
        </Flexbox>
      </div>
    </div>
  )
}
