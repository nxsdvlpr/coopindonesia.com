import { Flexbox, Typo } from '@/nui'
import Link from 'next/link'

export default function Copyright() {
  return (
    <div className="pt-8">
      <Flexbox justify="between">
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
      </Flexbox>
    </div>
  )
}
