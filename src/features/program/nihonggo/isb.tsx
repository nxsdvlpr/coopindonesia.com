import { nihonggoIsbDataStatic } from '@/app/api/nihonggo'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'

export default function NihonggoIsb() {
  const { info, title, subtitle, images, content } = nihonggoIsbDataStatic

  const items = images.map((image, i) => (
    <ImageNui key={i} src={image.src} alt={image.alt} />
  ))

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {content.title}
          </Typo>
          <Flexbox gap="md">
            <div className="h-10 w-10">
              <ImageNui src={content.image.src} alt={content.image.alt} />
            </div>
            <Markdown size="lg">{subtitle}</Markdown>
          </Flexbox>
        </Flexbox>
        <Markdown size="lg">{content.body}</Markdown>
        <Carousel items={items} />
      </Section>
      <Menu showMenuNihonggo />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
