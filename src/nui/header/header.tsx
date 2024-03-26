import Image from 'next/image'
import Link from 'next/link'
import { Flexbox } from '../flexbox'
import MenuAbout from './components/about'
import MenuGallery from './components/gallery'
import { MenuProgram } from './components/program'
import MenuPublication from './components/publication'

export function Header() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-30 h-[4.5rem] bg-white">
        <div className="relative m-auto flex h-full max-w-[80rem] items-center justify-between px-10">
          <Link href="/" className="w-[80px]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src="/logo-text.png"
              alt="logo-coop-indonesia"
            />
          </Link>
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
        </div>
      </div>
      <div className="mb-[120px] h-[4.5rem]" />
    </>
  )
}
