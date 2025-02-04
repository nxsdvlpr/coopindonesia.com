'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { tv } from 'tailwind-variants'

export const menuLangButtonStyle = tv({
  base: 'rounded px-1 py-0.5',
  variants: {
    variant: {
      gray: 'bg-gray-100',
      none: '',
    },
  },
})

export default function MenuLang() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <div className="flex items-center gap-x-2">
      {
        <button
          className={menuLangButtonStyle({
            variant: locale === 'in' ? 'gray' : 'none',
          })}
          onClick={() => router.push(`/in${pathname}`)}
        >
          IND
        </button>
      }
      <button
        className={menuLangButtonStyle({
          variant: locale === 'ja' ? 'gray' : 'none',
        })}
        onClick={() => router.push(`/ja${pathname}`)}
      >
        JPY
      </button>
    </div>
  )
}
