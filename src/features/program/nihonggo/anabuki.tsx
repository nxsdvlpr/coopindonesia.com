import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'

export default function NihonggoAnabuki() {
  const nihonggoAnabuki = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Sekolah Anabuki',
    content: {
      title: 'Sekolah Anabuki',
      image: {
        src: '/nihonggo/logo-anabuki.png',
        alt: 'logo-anabuki-coop-indonesia',
      },
      body: '   **Anabuki College Group** is a vocational school group with 14 vocational schools in the Chugoku-Shikoku area. Berikut foto-foto kegiatan di sekolah Anabuki',
    },
    images: [
      {
        src: '/training/training-image-2.png',
        alt: 'training-image-2-coop-indonesia',
      },
      {
        src: '/training/training-image-3.png',
        alt: 'training-image-3-coop-indonesia',
      },
      {
        src: '/training/training-image-4.png',
        alt: 'training-image-4-coop-indonesia',
      },
      {
        src: '/training/training-image-5.png',
        alt: 'training-image-5-coop-indonesia',
      },
    ],
  }

  const { info, title, images, content } = nihonggoAnabuki

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
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {content.title}
          </Typo>
          <Flexbox align="start" gap="md">
            <div className="mx-auto w-[2.3444rem] pt-6">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src={content.image.src}
                alt={content.image.alt}
              />
            </div>
            <Markdown size="lg">{content.body}</Markdown>
          </Flexbox>
          <Carousel items={items} />
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
