import { postInternshiProselindoTeaDataStatic } from '@/app/api/post-internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import PostInternshipContent from './content'

export default function PostInternshiProselindoTea() {
  const { info, title, contents, postContents, followUsImages } =
    postInternshiProselindoTeaDataStatic

  const images = contents.images

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
      >
        {postContents.map((item, index) => (
          <Flexbox key={index} flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {item.title}
            </Typo>
            <Markdown size="lg">{item.content}</Markdown>
            <Flexbox gap="xs">
              {item.title === 'Ketersediaan' &&
                followUsImages.map((image) => (
                  <div className="w-5">
                    <Image
                      className="h-auto w-full"
                      src={image}
                      alt="image-follow-us"
                      width="0"
                      height="0"
                      sizes="100vw"
                    />
                  </div>
                ))}
            </Flexbox>
          </Flexbox>
        ))}
      </PostInternshipContent>
      <Menu showMenuPostInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
