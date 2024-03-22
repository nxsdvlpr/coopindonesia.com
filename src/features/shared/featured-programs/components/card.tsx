import { Box, Button, Flexbox, Typo } from '@/nui'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type CardProps = {
  src: string | StaticImageData
  alt: string
  title: string
  titleButton?: string
  children?: ReactNode
}

export default function Card({
  src,
  alt,
  title,
  titleButton = 'Pelajari',
  children,
}: CardProps) {
  return (
    <Box withBorder>
      <Flexbox align="start" flow="col" gap="md">
        <div className="h-[11.5rem] w-[19.375rem] overflow-hidden">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-full"
            src={src}
            alt={alt}
          />
        </div>
        <Flexbox align="start" flow="col" gap="xs">
          <Typo size="xl" fontWeight="bold" color="gray-900">
            {title}
          </Typo>
          <Typo size="md">{children}</Typo>
        </Flexbox>
        <Button>{titleButton}</Button>
      </Flexbox>
    </Box>
  )
}