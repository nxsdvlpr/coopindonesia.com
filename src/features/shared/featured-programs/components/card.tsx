import { Box, Button, Flexbox, ImageNui, Typo } from '@/nui'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type CardProps = {
  src: string | StaticImageData
  alt: string
  href?: string
  title: string
  titleButton?: string
  children?: ReactNode
}

export default function Card({
  src,
  alt,
  href,
  title,
  titleButton = 'Pelajari',
  children,
}: CardProps) {
  return (
    <Box withBorder>
      <Flexbox align="start" flow="col" gap="md">
        <div className="aspect-video w-full overflow-hidden">
          <ImageNui src={src} alt={alt} />
        </div>
        <Flexbox align="start" flow="col" gap="xs">
          <Typo size="xl" fontWeight="bold" color="gray-900">
            {title}
          </Typo>
          <Typo size="md">{children}</Typo>
        </Flexbox>
        <Button as="a" href={href} wider="sm" size="sm">
          {titleButton}
        </Button>
      </Flexbox>
    </Box>
  )
}
