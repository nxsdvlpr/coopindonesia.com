import { ImageNui } from '@/nui'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { footerLinkStyle } from './link.style'

export type LinkProps = {
  href: string
  src: string | StaticImageData
  children?: ReactNode
}

export default function FooterLink({ href, src, children }: LinkProps) {
  const { wrapper, box, image } = footerLinkStyle()

  return (
    <Link className={wrapper()} href={href} target="_blank" rel="no follow">
      <div className={box()}>
        <ImageNui src={src} alt="follow-us" className={image()} />
      </div>
      {children}
    </Link>
  )
}
