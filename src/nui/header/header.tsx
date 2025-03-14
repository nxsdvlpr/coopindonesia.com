'use client'

import { useResponsive } from '@/utils/use-responsive'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Flexbox } from '../flexbox'
import { ImageNui } from '../image'
import { MenuMobile } from '../menu-mobile/menu-mobile'
import MenuAbout from './components/about'
import MenuGallery from './components/gallery'
import MenuLang from './components/lang'
import { MenuProgram } from './components/program'
import MenuPublication from './components/publication'

export function Header() {
  const t = useTranslations()
  const { lg } = useResponsive()

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 h-[4.5rem] bg-white">
        <nav className=" m-auto flex h-full max-w-[80rem] items-center justify-between px-4 lg:px-10">
          <Link href="/" className="w-[16.625rem]">
            <ImageNui src="/logo-text.png" alt="logo-text-coop-indonesia" />
          </Link>
          <MenuMobile />
          {lg && (
            <Flexbox gap="xl">
              <Link href="/" className="text-base font-semibold text-gray-900">
                {t('sharedContent.menuNavbar.Home')}
              </Link>
              <MenuProgram />
              <MenuPublication />
              <MenuGallery />
              <MenuAbout />
              <Link
                href="/contact-us"
                className="text-base font-semibold text-gray-900"
              >
                {t('sharedContent.menuNavbar.ContactUs')}
              </Link>
              <MenuLang />
            </Flexbox>
          )}
        </nav>
      </header>
      <div className="mb-6 h-[4.5rem] lg:mb-[7.5rem]" />
    </>
  )
}
