import Image from 'next/image'
import Link from 'next/link'
import { Flexbox } from '../flexbox'

export function Header() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-30 h-[4.5rem] bg-white">
        <div className="m-auto flex h-full max-w-6xl items-center justify-between">
          <Link href="/">
            <Image
              width={40}
              height={40}
              src="/logo.png"
              alt="logo-coop-indonesia"
            />
          </Link>
          <Flexbox gap="xl">
            <Link href="/" className="font-semibold text-gray-900">
              Home
            </Link>
            <Link href="/" className="font-semibold text-gray-900">
              Programs
            </Link>
            <Link href="/" className="font-semibold text-gray-900">
              Publications
            </Link>
            <Link href="/" className="font-semibold text-gray-900">
              Gallery
            </Link>
            <Link href="/about" className="font-semibold text-gray-900">
              About Us
            </Link>
            <Link href="/" className="font-semibold text-gray-900">
              Contact Us
            </Link>
          </Flexbox>
        </div>
      </div>
      <div className="mb-[120px] h-[4.5rem]" />
    </>
  )
}
