import { homeDataStatic } from '@/app/api/home'
import { Flexbox, ImageNui, Markdown, Section, Typo } from '@/nui'

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
          <ImageNui src={image.src} alt={image.alt} />
        </div>
      </div>
    </Section>
  )
}
