import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Section, SectionTitle } from '@/nui'
import Image from 'next/image'
import PostInternshipContent from './content'

export default function PostInternshipFurusatoAgribisnis() {
  const furusatoAgribisnis = {
    title: 'Furusato Agribisnis',
    content: {
      title: 'Furusato Agribisnis for Better Life',
      body: 'LPK COOP Indonesia bekerjasama dengan salah satu lembaga NPO dari Tahara City, Jepang membangun "Center of Excellence" bidang Pertanian yang Ramah Lingkungan di BumiAji, Batu, Malang, Jawa Timur.<br/><br/> Kegiatan di BumiAji akan diprakarsai oleh para alumni peserta magang yang telah kembali ke Tanah Air agar dapat mengembangkan ilmu yang diperoleh selama mengikuti program pemagangan di Jepang. Selain itu, Tenaga Ahli dari Tahara City akan melakukan pendampingan untuk mencapai hasil yang optimal.<br/><br/> Tujuan dari program ini adalah :\n1. Memberi kesempatan secara gratis bagi masyarakat sekitar untuk belajar tentang Usaha Pertanian Modern, khususnya masyarakat muda.\n2. Menjadikan kawasan BumiAji, Batu, Malang, Jawa Timur sebagai Center of Excellence bagi Industri Pertanian Ramah Lingkungan, yang dapat bersaing dengan produk luar di pasar domestik.\n3. Menjadikan kawasan BumiAji, Batu, Malang, Jawa Timur sebagai Center of Excellence bagi Industri Pertanian Ramah Lingkungan, yang dapat bersaing dengan produk luar di pasar domestik.\n4. Menfasilitasi Kota Batu, Indonesia dan Tahara City, Jepang agar kelak dapat menjadi Sister City melalui kerjasama antara Walikota Kota Batu dengan Walikota Tahara City',
    },
    images: [
      {
        src: '/training/training-image-1.png',
        alt: 'training-image-1-coop-indonesia',
      },
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

  const { title, images, content } = furusatoAgribisnis

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
          info="PROGRAM USAHA MANDIRI"
          title={title}
        />
      </Section>
      <PostInternshipContent
        title={content.title}
        items={items}
        makdown={content.body}
      />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
