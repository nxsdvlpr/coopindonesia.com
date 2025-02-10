import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import PostInternshipContent from './content'

export default function PostInternshipPalmSugar() {
  const t = useTranslations()

  const items = t
    .raw('postInternshipPalmSugar.images')
    .map((image: any, i: number) => (
      <ImageNui key={i} src={image.src} alt={image.alt} />
    ))

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('postInternshipPalmSugar.info')}
          title={t('postInternshipPalmSugar.title')}
        />
      </Section>
      <PostInternshipContent
        title={t('postInternshipPalmSugar.content.title')}
        items={items}
        makdown={t('postInternshipPalmSugar.content.body')}
      >
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {t('postInternshipPalmSugar.benefits.title')}
          </Typo>
          <Markdown size="lg">
            {t('postInternshipPalmSugar.benefits.body')}
          </Markdown>
        </Flexbox>
      </PostInternshipContent>
      <Menu showMenuPostInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
