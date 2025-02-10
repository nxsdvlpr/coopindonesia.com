'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { tv } from 'tailwind-variants'

export const menuLangButtonStyle = tv({
  base: 'rounded px-1 py-0.5 font-semibold',
  variants: {
    variant: {
      gray: 'text-gray-400',
      none: '',
    },
  },
})

export default function MenuLang() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <div className="ml-4 flex items-center gap-x-2">
      <Image
        width={16}
        height={16}
        sizes="100vw"
        src="/navbar-lang/emojione_flag-for-indonesia.svg"
        alt="flag-indo"
      />
      {
        <button
          className={menuLangButtonStyle({
            variant: locale === 'ja' ? 'gray' : 'none',
          })}
          onClick={() => router.push(`/in${pathname}`)}
        >
          ID
        </button>
      }
      <p className="text-gray-400">|</p>
      <Image
        width={16}
        height={16}
        sizes="100vw"
        src="/navbar-lang/emojione_flag-for-japan.svg"
        alt="flag-japan"
      />
      <button
        className={menuLangButtonStyle({
          variant: locale === 'in' ? 'gray' : 'none',
        })}
        onClick={() => router.push(`/ja${pathname}`)}
      >
        JA
      </button>
    </div>
  )
}
