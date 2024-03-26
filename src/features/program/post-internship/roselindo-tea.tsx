import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import PostInternshipContent from './content'

export default function PostInternshiProselindoTea() {
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
          title="Roselindo Tea"
        />
      </Section>
      <PostInternshipContent
        title="Roselindo Tea"
        items={items}
        makdown={`ROSELINDO TEA adalah jenis lain dari minuman herbal yg terbuat dari ekstrak calyx varietas unggul Rosela Herbal Indonesia.<br/><br/>
        LPK COOP Indonesia bekerjasama dengan Balai Penelitian Tanaman Pemanis dan Serat (BALITTAS) di Malang dalam memproduksi ROSELINDO TEA. Penggunaan varietas unggul Roselindo merupakan jaminan konsistensi mutu produk ROSELINDO TEA.<br/><br/>
        Proses budidaya Rosela Herbal varietas ROSELINDO dilakukan secara ramah lingkungan tanpa menggunakan pestisida di Nganjuk, Jawa Timur oleh Kelompok Alumni peserta pemagangan dari Jepang.ROSELINDO TEA selain di pasarkan dalam negeri, juga telah dipasarkan di Jepang, dan telah mendapat pengakuan sebagai salah satu Produk Herbal Organic yang baik untuk Kesehatan.`}
      >
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            Mengapa Minum Teh
          </Typo>
          <Markdown size="lg">{`Pada umumnya teh mengandung antioksidan yang membantu tubuh untuk membakar lemak. Teh membantu menurunkan risiko serangan jantung.`}</Markdown>
        </Flexbox>
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            Manfaat Roselindo Tea
          </Typo>
          <Markdown size="lg">{`* Meningkatkan Stamina dan Daya Tahan Tubuh
* Menurunkan Tekanan Darah Tinggi
* Menurunkan Kolesterol & Asam Urat
* Menurunkan Kadar Gula dalam Darah pada Penderita Diabetes
* Mencegah Osteoporosis (Tulang Keropos)
* Mencegah Kanker dan Tumor
* Menjaga Kehalusan Kulit & Menghambat Penuaan Dini
* Meredakan Panas Dalam, Sariawan dan Sakit Tenggorokan
* Melancarkan Peredaran Darah, Buang Air Kecil dan Besar`}</Markdown>
        </Flexbox>
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            Kandungan Nutrisi Roselindo Tea
          </Typo>
          <Markdown size="lg">{`Vitamin C (kadar >200mg / 100g), Beta Carotene (>10mg /100g), Calcium, iron, anthocyanin. dan senyawa-senyawa fitokima dengan akivitas menyehatkan tubuh, seperti : anti bacterial, anti fungal, anti inflamation, anti diabetic, anti oxidant, and anti hypertension activities.`}</Markdown>
        </Flexbox>
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            Ketersediaan
          </Typo>
          <Markdown size="lg">{`Roselindo Tea kini dapat anda peroleh di beberapa Toko Online, antara lain:`}</Markdown>
        </Flexbox>
      </PostInternshipContent>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
