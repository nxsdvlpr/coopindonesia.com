import Image from 'next/image'
import { ImageNuiProps } from './type'

export function ImageNui({
  src,
  alt,
  className = 'h-full w-full object-cover',
}: ImageNuiProps) {
  return (
    <Image
      width="0"
      height="0"
      sizes="100vw"
      className={className}
      src={src}
      alt={alt}
    />
  )
}
