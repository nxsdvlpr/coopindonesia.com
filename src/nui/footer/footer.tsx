import Link from 'next/link'
import { Flexbox, Typo } from '../ui'

export function Footer() {
  return (
    <div className="border-t border-gray-200">
      <div className="m-auto flex max-w-[1200px] flex-col gap-16 divide-y divide-gray-200 pb-12 pt-16">
        <Flexbox justify="between">
          <div>ds</div>
          <div>ds</div>
        </Flexbox>
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
      </div>
    </div>
  )
}
