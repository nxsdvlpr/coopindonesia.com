import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import PostInternshipContent from './content'

export default function PostInternshipPalmSugar() {
  const images = [
    {
      src: '/pre-selection/pre-selection-image-1.png',
      alt: 'pre-selection-image-1-coop-indonesia',
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
          info="PROGRAM USAHA MANDIRI"
          title="Gula Aren"
        />
      </Section>
      <PostInternshipContent
        title="Gula Aren"
        items={items}
        makdown={`Merupakan hasil olahan dari salah satu alumni peserta magang yang berasal dari Cianjur, Jawa Barat. LPK COOP Indonesia membantu kemasan dan pemasaran hasil produksi Gula Aren tersebut ke pasar domestik maupun Jepang.<br/><br/>
        Gula aren sendiri merupakan gula merah asil yang memiliki khasiat banyak untuk kesehatan. Meskipun begitu, mayoritas masyarakat saat ini lebih memilih gula merah biasa atau gula pasir dibandingkan dengan gula aren. Hal tersebut disebabkan karena gula aren memiliki warna merah yang dapat merusak warna dasar pada makanan ataupun minuman yang akan disajikan. Meskipun demikian, gula aren ini dapat dijadikan sebagai pewarna alami pada makanan-makanan tertentu seperti jenang, gado-gado dan lain sebagainya.<br/><br/>
        Gula aren merupakan pemanis alami yang terbuat dari air nira yang berasal dari tandan bunga jantan pada pohon aren. Aren merupakan salah satu tanaman palem-paleman yang kaya akan kandungan karbohidrat yang terdapat dalam bentuk glukosa. Kadar gula aren ini cukup tinggi dibandingkan dengan gula merah ataupun gula pasir. Meskipun tinggi, gula aren memiliki banyak khasiat untuk kesehatan tubuh.`}
      >
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="lg" fontWeight="bold" color="gray-900">
            Khasiat Gula Aren
          </Typo>
          <Markdown>{`* Mengobati Sariawan
* Mencegah Anemia
* Untuk Penderita Diabetes
* Meningkatkan Stamina Tubuh
* Untuk Kecantikan
* Mencegah Penyakit Hepatitis
* Mengurangi Kadar Kalori di Dalam Tubuh
* Mengurangi Rasa Sakit Untuk Penderita Maag
* Sebagai Bahan Campuran Obat Tradisional
* Sebagai Sumber Antioksidan
* Gula Aren dan Manfaatnya Untuk Sistem Syaraf`}</Markdown>
        </Flexbox>
      </PostInternshipContent>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
