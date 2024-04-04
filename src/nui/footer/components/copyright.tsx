import { Flexbox, Typo } from '@/nui'
import Link from 'next/link'
import { copyrightStyle } from './copyright.style'

export default function Copyright() {
  const { wrapper, main } = copyrightStyle()

  return (
    <div className={wrapper()}>
      <div className={main()}>
        <Typo size="sm" color="gray-400">
          Copyright © 2010 - 2023 LPK Coop Indonesia All Rights Reserved
        </Typo>
        <Flexbox>
          <Link
            className="font-semibold text-primary-500 hover:text-primary-700"
            href="/term"
          >
            Terms
          </Link>
          <Link
            className="font-semibold text-primary-500 hover:text-primary-700"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="font-semibold text-primary-500 hover:text-primary-700"
            href="/cookies"
          >
            Cookies
          </Link>
        </Flexbox>
      </div>
    </div>
  )
}
