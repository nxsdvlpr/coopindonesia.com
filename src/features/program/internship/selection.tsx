import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'

export default function InternshipSelection() {
  const internshipSelection = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Seleksi',
    images: [
      {
        src: '/selection/selection-image-2.png',
        alt: 'selection-image-2-coop-indonesia',
      },
      {
        src: '/selection/selection-image-3.png',
        alt: 'selection-image-3-coop-indonesia',
      },
      {
        src: '/selection/selection-image-4.png',
        alt: 'selection-image-4-coop-indonesia',
      },
    ],
    content: {
      title: 'Kegiatan Seleksi',
      body: 'Merupakan kegiatan seleksi yang diadakan langsung oleh Perusahaan Penerima dari Jepang untuk mencari Calon Peserta yang telah melewati tahap **Pra Seleksi COOP Indonesia**.\n\nBerikut foto-foto kegiatan seleksi di LPK Coop Indonesia',
    },
  }

  const { info, title, images, content } = internshipSelection

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
      <Section maxWidth="content">
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {content.title}
          </Typo>
          <Markdown size="lg">{content.body}</Markdown>
        </Flexbox>
        <div className="h-6" />
        <Carousel items={items} />
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
