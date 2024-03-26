import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'

export default function InternshipPreSelection() {
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
          title="Pra Seleksi"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            Kegiatan Pra Seleksi
          </Typo>
          <Typo size="lg">
            Merupakan kegiatan pra-seleksi yang dilakukan oleh{' '}
            <strong>Divisi Pengembangan SDM COOP Indonesia</strong> dalam rangka
            mencari calon peserta yang memenuhi kriteria peserta magang.
            <br />
            <br /> Berikut foto-foto kegiatan pra - seleksi di LPK Coop
            Indonesia
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
