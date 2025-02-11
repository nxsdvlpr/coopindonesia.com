import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import { useTranslations } from 'next-intl'

export default function NihonggoAnabuki() {
  const t = useTranslations()

  const items = t
    .raw('nihonggoAnabuki.images')
    .map((image: any, i: number) => (
      <ImageNui key={i} src={image.src} alt={image.alt} />
    ))

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('nihonggoAnabuki.info')}
          title={t('nihonggoAnabuki.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {t('nihonggoAnabuki.content.title')}
          </Typo>
          <Flexbox align="start" gap="md">
            <div className="mx-auto w-[2.3444rem] pt-6">
              <ImageNui
                src={t('nihonggoAnabuki.content.image.src')}
                alt={t('nihonggoAnabuki.content.image.alt')}
              />
            </div>
            <Markdown size="lg">{t('nihonggoAnabuki.content.body')}</Markdown>
          </Flexbox>
          <Carousel items={items} />
        </Flexbox>
      </Section>
      <Menu showMenuNihonggo />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
