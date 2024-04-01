import { homeDataStatic } from '@/app/api/home'
import { Flexbox, Markdown, Section, Typo } from '@/nui'
import Image from 'next/image'

export function HomeHero() {
  const { info, title, desc, image } = homeDataStatic.hero

  return (
    <Section>
      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        <Flexbox flow="col" gap="xl">
          <Flexbox align="start" flow="col" gap="xs">
            <Typo size="md" fontWeight="extrabold" color="primary-500">
              {info}
            </Typo>
            <Typo size="6xl" fontWeight="extrabold" color="gray-900">
              {title}
            </Typo>
          </Flexbox>
          <Markdown size="lg">{desc}</Markdown>
        </Flexbox>
        <div className="w-full shrink-0 lg:w-[33.6875rem]">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full"
            src={image.src}
            alt={image.alt}
          />
        </div>
      </div>
    </Section>
  )
}
