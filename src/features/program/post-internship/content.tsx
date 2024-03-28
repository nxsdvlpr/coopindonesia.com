import { Flexbox, Markdown, Section, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import { ReactNode } from 'react'

type PostInternshipContentProps = {
  title: string
  makdown: string
  items: any
  children?: ReactNode
}

export default function PostInternshipContent({
  title,
  makdown,
  items,
  children,
}: PostInternshipContentProps) {
  return (
    <Section maxWidth="sm">
      <Flexbox align="normal" flow="col" gap="2xl">
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {title}
          </Typo>
          <Markdown size="lg">{makdown}</Markdown>
        </Flexbox>
        {children}
        <Carousel items={items} />
      </Flexbox>
    </Section>
  )
}
