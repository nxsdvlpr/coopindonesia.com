import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { ImageNui, Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'
import PostInternshipContent from './content'

export default function PostInternshipFurusatoAgribisnis() {
  const t = useTranslations()

  const items = t
    .raw('postInternshipFurusatoAgribisnis.images')
    .map((image: any, i: number) => (
      <ImageNui key={i} src={image.src} alt={image.alt} />
    ))

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('postInternshipFurusatoAgribisnis.info')}
          title={t('postInternshipFurusatoAgribisnis.title')}
        />
      </Section>
      <PostInternshipContent
        title={t('postInternshipFurusatoAgribisnis.content.title')}
        items={items}
        makdown={t('postInternshipFurusatoAgribisnis.content.body')}
      />
      <Menu showMenuPostInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
