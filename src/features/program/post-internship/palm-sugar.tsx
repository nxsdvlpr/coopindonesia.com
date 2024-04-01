import { postInternshipPalmSugarDataStatic } from '@/app/api/post-internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import PostInternshipContent from './content'

export default function PostInternshipPalmSugar() {
  const { info, title, images, content, benefits } =
    postInternshipPalmSugarDataStatic

  const items = images.map((image, i) => (
    <Image
      key={i}
      width="0"
      height="0"
      sizes="100vw"
      className="h-full w-full rounded-lg object-cover"
      src={image.src}
      alt={image.alt}
    />
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
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
