import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import NextLink from 'next/link'
import { ReactNode } from 'react'

export type LinkProps = {
  href: string
  src: string | StaticImport
  children?: ReactNode
}

export default function FooterLink({ href, src, children }: LinkProps) {
  return (
    <NextLink
      className="group flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-gray-700"
      href={href}
    >
      <div className="w-4 overflow-hidden">
        <Image
          className="h-auto w-full grayscale group-hover:grayscale-0"
          src={src}
          alt="balittas-malang-logo"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      {children}
    </NextLink>
  )
}
