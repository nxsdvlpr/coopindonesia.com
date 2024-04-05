'use client'

import { useResponsive } from '@/utils/use-responsive'
import Image from 'next/image'
import Link from 'next/link'
import { Flexbox } from '../flexbox'
import { MenuMobile } from '../menu-mobile/menu-mobile'
import MenuAbout from './components/about'
import MenuGallery from './components/gallery'
import { MenuProgram } from './components/program'
import MenuPublication from './components/publication'

export function Header() {
  const { lg } = useResponsive()

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 h-[4.5rem] bg-white">
        <nav className=" m-auto flex h-full max-w-[80rem] items-center justify-between px-4 lg:px-10">
          <Link href="/" className="w-[12.5rem]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src="/logo-text.png"
              alt="logo-text-coop-indonesia"
            />
          </Link>
          <MenuMobile />
          {lg && (
            <Flexbox gap="xl">
              <Link href="/" className="text-base font-semibold text-gray-900">
                Home
              </Link>
              <MenuProgram />
              <MenuPublication />
              <MenuGallery />
              <MenuAbout />
              <Link
                href="/contact-us"
                className="text-base font-semibold text-gray-900"
              >
                Contact Us
              </Link>
            </Flexbox>
          )}
        </nav>
      </header>
      <div className="mb-6 h-[4.5rem] lg:mb-[7.5rem]" />
    </>
  )
}
