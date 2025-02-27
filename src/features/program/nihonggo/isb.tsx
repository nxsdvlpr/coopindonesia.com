import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import { useTranslations } from 'next-intl'

export default function NihonggoIsb() {
  const t = useTranslations()

  const items = t
    .raw('nihonggoISB.images')
    .map((image: any, i: number) => (
      <ImageNui key={i} src={image.src} alt={image.alt} />
    ))

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('nihonggoISB.info')}
          title={t('nihonggoISB.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {t('nihonggoISB.content.title')}
          </Typo>
          <Flexbox gap="md">
            <div className="h-10 w-10">
              <ImageNui
                src={t('nihonggoISB.content.image.src')}
                alt={t('nihonggoISB.content.image.alt')}
              />
            </div>
            <Markdown size="lg">{t('nihonggoISB.subtitle')}</Markdown>
          </Flexbox>
        </Flexbox>
        <Markdown size="lg">{t('nihonggoISB.content.body')}</Markdown>
        <Carousel items={items} />
      </Section>
      <Menu showMenuNihonggo />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
