import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Section, SectionTitle } from '@/nui'
import Image from 'next/image'
import PostInternshipContent from './content'

export default function PostInternship() {
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
          title="Pendahuluan"
        />
      </Section>
      <PostInternshipContent
        title="Pengembangan Usaha Mandiri"
        items={items}
        makdown={`
Program Pengembangan Usaha Mandiri adalah kegiatan Pasca Magang dari Jepang yang diselenggarakan oleh LPK COOP Indonesia untuk memfasilitasi para peserta yang telah selesai mengikuti program magang di Jepang dan kembali ke Tanah Air. Diharapkan para peserta tersebut berkeinginan untuk memulai usaha mandiri sebagaimana Tagline dari program magang itu sendiri yaitu "**THE ENTREPRENEUR**".<br/><br/>
Program Pasca Magang dari Jepang bertujuan untuk melakukan pendampingan bagi para peserta agar kelak bisa memulai usaha mandiri baik secara perorangan maupun berkelompok.<br/><br/>
Alumni Peserta Magang dari LPK COOP Indonesia saat ini telah bergerak diberbagai bidang usaha, diantaranya : **Pertanian Gula Aren, Peternakan Sapi Perah dan Pedaging, Pertanian Teh Roselindo, Perikanan darat, ** dan lain-lain.<br/><br/>
Dalam hal pemasaran dan peningkatan kualitas hasil produksi, LPK COOP Indonesia bekerjasama dengan beberapa pihak baik swasta maupun institusi terkait dari pemerintah daerah sehingga dapat meningkatkan daya saing ke pasar domestik maupun global.
`}
      />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
