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
            className="font-semibold text-primary-600 hover:text-primary-700"
            href="/"
          >
            Terms
          </Link>
          <Link
            className="font-semibold text-primary-600 hover:text-primary-700"
            href="/"
          >
            Privacy
          </Link>
          <Link
            className="font-semibold text-primary-600 hover:text-primary-700"
            href="/"
          >
            Cookies
          </Link>
        </Flexbox>
      </div>
    </div>
  )
}
