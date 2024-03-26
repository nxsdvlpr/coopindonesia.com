import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'
import 'react-alice-carousel/lib/alice-carousel.css'

export default function InternshipPlacement() {
  const images = [
    {
      src: '/pre-selection/pre-selection-image-1.png',
      alt: 'pre-selection-image-1-coop-indonesia',
    },
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
  ]

  const content = `Setelah mengikuti serangkaian kegiatan seleksi dan pelatihan maka peserta akan segera di tempatkan di perusahaan masing-masing di Jepang.

  Berikut foto-foto penempatan peserta **LPK COOP Indonesia** di Jepang
`

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
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Penempatan"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            Penempatan di Jepang
          </Typo>
          <Typo size="lg">
            <Markdown>{content}</Markdown>
          </Typo>
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
