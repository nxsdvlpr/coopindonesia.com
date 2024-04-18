import { StaticImageData } from 'next/image'

export type ImageNuiProps = {
  src: string | StaticImageData
  alt: string
  className?: string
}
