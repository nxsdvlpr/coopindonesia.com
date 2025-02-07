import { postInternshipDataStatic } from '@/app/[locale]/api/post-internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { ImageNui, Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'
import PostInternshipContent from './content'

export default function PostInternship() {
  const t = useTranslations()
  const { info, title, images, contents } = postInternshipDataStatic

  const items = images.map((image, i) => (
    <ImageNui key={i} src={image.src} alt={image.alt} />
  ))

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('postInternship.info')}
          title={t('postInternship.title')}
        />
      </Section>
      <PostInternshipContent
        title={t('postInternship.contents.title')}
        items={items}
        makdown={t('postInternship.contents.body')}
      />
      <Menu showMenuPostInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
