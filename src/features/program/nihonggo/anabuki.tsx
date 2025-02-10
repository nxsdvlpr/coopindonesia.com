import { nihonggoAnabukiDataStatic } from '@/app/[locale]/api/nihonggo'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'

export default function NihonggoAnabuki() {
  const { info, title, images, content } = nihonggoAnabukiDataStatic

  const items = images.map((image, i) => (
    <ImageNui key={i} src={image.src} alt={image.alt} />
  ))

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {content.title}
          </Typo>
          <Flexbox align="start" gap="md">
            <div className="mx-auto w-[2.3444rem] pt-6">
              <ImageNui src={content.image.src} alt={content.image.alt} />
            </div>
            <Markdown size="lg">{content.body}</Markdown>
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
