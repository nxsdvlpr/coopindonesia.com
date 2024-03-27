import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import PostInternshipContent from './content'

export default function PostInternshiProselindoTea() {
  const postInternshiProselindoTea = {
    title: 'Roselindo Tea',
    contents: {
      title: 'Roselindo Tea',
      body: 'ROSELINDO TEA adalah jenis lain dari minuman herbal yg terbuat dari ekstrak calyx varietas unggul Rosela Herbal Indonesia.<br/><br/> LPK COOP Indonesia bekerjasama dengan Balai Penelitian Tanaman Pemanis dan Serat (BALITTAS) di Malang dalam memproduksi ROSELINDO TEA. Penggunaan varietas unggul Roselindo merupakan jaminan konsistensi mutu produk ROSELINDO TEA.<br/><br/> Proses budidaya Rosela Herbal varietas ROSELINDO dilakukan secara ramah lingkungan tanpa menggunakan pestisida di Nganjuk, Jawa Timur oleh Kelompok Alumni peserta pemagangan dari Jepang.ROSELINDO TEA selain di pasarkan dalam negeri, juga telah dipasarkan di Jepang, dan telah mendapat pengakuan sebagai salah satu Produk Herbal Organic yang baik untuk Kesehatan.',
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
    },
    postContents: [
      {
        title: 'Mengapa Minum Teh',
        content:
          'Pada umumnya teh mengandung antioksidan yang membantu tubuh untuk membakar lemak. Teh membantu menurunkan risiko serangan jantung.',
      },
      {
        title: 'Manfaat Roselindo Tea',
        content:
          '* Meningkatkan Stamina dan Daya Tahan Tubuh\n* Menurunkan Tekanan Darah Tinggi\n* Menurunkan Kolesterol & Asam Urat\n* Menurunkan Kadar Gula dalam Darah pada Penderita Diabetes\n* Mencegah Osteoporosis (Tulang Keropos)\n* Mencegah Kanker dan Tumor\n* Menjaga Kehalusan Kulit & Menghambat Penuaan Dini\n* Meredakan Panas Dalam, Sariawan dan Sakit Tenggorokan\n* Melancarkan Peredaran Darah, Buang Air Kecil dan Besar',
      },
      {
        title: 'Kandungan Nutrisi Roselindo Tea',
        content:
          'Vitamin C (kadar >200mg / 100g), Beta Carotene (>10mg /100g), Calcium, iron, anthocyanin. dan senyawa-senyawa fitokima dengan akivitas menyehatkan tubuh, seperti : anti bacterial, anti fungal, anti inflamation, anti diabetic, anti oxidant, and anti hypertension activities.',
      },
      {
        title: 'Ketersediaan',
        content:
          'Roselindo Tea kini dapat anda peroleh di beberapa Toko Online, antara lain:',
      },
    ],
    followUsImages: [
      '/follow-us/instagram.svg',
      '/follow-us/facebook.svg',
      '/follow-us/tiktok.svg',
    ],
  }

  const { title, contents, postContents, followUsImages } =
    postInternshiProselindoTea

  const images = contents.images

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
        title={contents.title}
        items={items}
        makdown={contents.body}
      >
        {postContents.map((item, index) => (
          <Flexbox key={index} flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {item.title}
            </Typo>
            <Markdown size="lg">{item.content}</Markdown>
            <Flexbox gap="xs">
              {item.title === 'Ketersediaan' &&
                followUsImages.map((image) => (
                  <div className="w-5">
                    <Image
                      className="h-auto w-full"
                      src={image}
                      alt="image-follow-us"
                      width="0"
                      height="0"
                      sizes="100vw"
                    />
                  </div>
                ))}
            </Flexbox>
          </Flexbox>
        ))}
      </PostInternshipContent>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
