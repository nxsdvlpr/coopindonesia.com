import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'

export default function InternshipPlacement() {
  const internshipPlacement = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Penempatan',
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
    content: {
      title: 'Penempatan di Jepang',
      body: 'Setelah mengikuti serangkaian kegiatan seleksi dan pelatihan maka peserta akan segera di tempatkan di perusahaan masing-masing di Jepang.\n\nBerikut foto-foto penempatan peserta **LPK COOP Indonesia** di Jepang',
    },
  }

  const { info, title, images, content } = internshipPlacement

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
          <Typo size="lg">
            <Markdown size="lg">{content.body}</Markdown>
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
