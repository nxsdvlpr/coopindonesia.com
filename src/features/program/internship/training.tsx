import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'

export default function InternshipTraining() {
  const internshipTraining = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Pelatihan',
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
      title: 'Masa Pelatihan',
      body: 'Merupakan persiapan bagi para Calon Peserta Magang selama 90 hari di Pusat Pendidikan dan Pelatihan sebelum penempatan di Perusahaan Jepang yang meliputi:\n\n 1. Pendidikan Bahasa Jepang\n\n2. Pengenalan Budaya Jepang\n\n3. Pelatihan Fisik, Mental dan Disiplin\n\n4. Keterampilan Kerja sesuai bidang penempatan\n\n\n\nBerikut foto-foto kegiatan pelatihan di LPK Coop Indonesia:',
    },
  }

  const { info, title, images, content } = internshipTraining

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
