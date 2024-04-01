import { postInternshipDataStatic } from '@/app/api/post-internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Section, SectionTitle } from '@/nui'
import Image from 'next/image'
import PostInternshipContent from './content'

export default function PostInternship() {
  const { info, title, images, contents } = postInternshipDataStatic

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
        title={contents.title}
        items={items}
        makdown={contents.body}
      />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
