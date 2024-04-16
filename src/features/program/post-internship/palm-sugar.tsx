import { postInternshipPalmSugarDataStatic } from '@/app/api/post-internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import PostInternshipContent from './content'

export default function PostInternshipPalmSugar() {
  const { info, title, images, content, benefits } =
    postInternshipPalmSugarDataStatic

  const items = images.map((image, i) => (
    <ImageNui key={i} src={image.src} alt={image.alt} />
  ))

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <PostInternshipContent
        title={content.title}
        items={items}
        makdown={content.body}
      >
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {benefits.title}
          </Typo>
          <Markdown size="lg">{benefits.body}</Markdown>
        </Flexbox>
      </PostInternshipContent>
      <Menu showMenuPostInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
