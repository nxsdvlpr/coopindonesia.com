import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { footerLinkStyle } from './link.style'

export type LinkProps = {
  href: string
  src: string | StaticImport
  children?: ReactNode
}

export default function FooterLink({ href, src, children }: LinkProps) {
  const { wrapper, box, image } = footerLinkStyle()

  return (
    <Link className={wrapper()} href={href} target="_blank" rel="no follow">
      <div className={box()}>
        <Image
          src={src}
          alt="follow-us"
          width="0"
          height="0"
          sizes="100vw"
          className={image()}
        />
      </div>
      {children}
    </Link>
  )
}
