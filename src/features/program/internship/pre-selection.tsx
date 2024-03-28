import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'

export default function InternshipPreSelection() {
  const internshipPreSelection = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Pra Seleksi',
    images: [
      {
        src: '/pre-selection/pre-selection-image-2.png',
        alt: 'pre-selection-image-2-coop-indonesia',
      },
      {
        src: '/pre-selection/pre-selection-image-3.png',
        alt: 'pre-selection-image-3-coop-indonesia',
      },
      {
        src: '/pre-selection/pre-selection-image-4.png',
        alt: 'pre-selection-image-4-coop-indonesia',
      },
      {
        src: '/pre-selection/pre-selection-image-5.png',
        alt: 'pre-selection-image-5-coop-indonesia',
      },
      {
        src: '/pre-selection/pre-selection-image-6.png',
        alt: 'pre-selection-image-6-coop-indonesia',
      },
      {
        src: '/pre-selection/pre-selection-image-7.png',
        alt: 'pre-selection-image-7-coop-indonesia',
      },
    ],
    content: {
      title: 'Kegiatan Pra Seleksi',
      body: 'Merupakan kegiatan pra-seleksi yang dilakukan oleh **Divisi Pengembangan SDM COOP Indonesia** dalam rangka mencari calon peserta yang memenuhi kriteria peserta magang.\n\n Berikut foto-foto kegiatan pra - seleksi di LPK Coop Indonesia',
    },
  }

  const { info, title, images, content } = internshipPreSelection

  const items = images.map((image, i) => (
    <Image
      key={i}
      width="0"
      height={343}
      sizes="100vw"
      className="h-auto w-full rounded-lg object-cover"
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
