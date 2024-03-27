import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import PostInternshipContent from './content'

export default function PostInternshipPalmSugar() {
  const palmSugar = {
    title: 'Gula Aren',
    content: {
      title: 'Gula Aren',
      body: 'Merupakan hasil olahan dari salah satu alumni peserta magang yang berasal dari Cianjur, Jawa Barat. LPK COOP Indonesia membantu kemasan dan pemasaran hasil produksi Gula Aren tersebut ke pasar domestik maupun Jepang.<br/><br/> Gula aren sendiri merupakan gula merah asil yang memiliki khasiat banyak untuk kesehatan. Meskipun begitu, mayoritas masyarakat saat ini lebih memilih gula merah biasa atau gula pasir dibandingkan dengan gula aren. Hal tersebut disebabkan karena gula aren memiliki warna merah yang dapat merusak warna dasar pada makanan ataupun minuman yang akan disajikan. Meskipun demikian, gula aren ini dapat dijadikan sebagai pewarna alami pada makanan-makanan tertentu seperti jenang, gado-gado dan lain sebagainya.<br/><br/> Gula aren merupakan pemanis alami yang terbuat dari air nira yang berasal dari tandan bunga jantan pada pohon aren. Aren merupakan salah satu tanaman palem-paleman yang kaya akan kandungan karbohidrat yang terdapat dalam bentuk glukosa. Kadar gula aren ini cukup tinggi dibandingkan dengan gula merah ataupun gula pasir. Meskipun tinggi, gula aren memiliki banyak khasiat untuk kesehatan tubuh.',
    },
    benefits: {
      title: 'Khasiat Gula Aren',
      body: '* Mengobati Sariawan\n* Mencegah Anemia\n* Untuk Penderita Diabetes\n* Meningkatkan Stamina Tubuh\n* Untuk Kecantikan\n* Mencegah Penyakit Hepatitis\n* Mengurangi Kadar Kalori di Dalam Tubuh\n* Mengurangi Rasa Sakit Untuk Penderita Maag\n* Sebagai Bahan Campuran Obat Tradisional\n* Sebagai Sumber Antioksidan\n* Gula Aren dan Manfaatnya Untuk Sistem Syaraf',
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

  const { title, images, content, benefits } = palmSugar

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
      >
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {benefits.title}
          </Typo>
          <Markdown size="lg">{benefits.body}</Markdown>
        </Flexbox>
      </PostInternshipContent>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
