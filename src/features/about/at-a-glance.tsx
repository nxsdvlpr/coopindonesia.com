import { Flexbox, Markdown, Section, SectionTitle } from '@/nui'
import Image from 'next/image'
import { AskedQuestion, Banner, FeaturedPrograms } from '../shared'

export default function AtaGlance() {
  const atAGlance = {
    title: 'At a Glance',
    subtitle: `**LPK COOP Indonesia** sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau **Sending Organization (SO)** memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.`,
    contents: [
      {
        image: '/about/at-a-glance-image-1.svg',
        alt: 'at-a-glance-image-1-coop-indonesia',
        content: `LPK COOP Indonesia melakukan proses rekrutmen calon peserta sampai pelaksanaan pendidikan dan pelatihan pra-penempatan peserta di Jepang yang telah teruji sesuai dengan kebutuhan yang diperlukan oleh perusahaan-perusahaan di Jepang yang meliputi: Bahasa dan Budaya Jepang, Fisik, Mental, Disiplin dan Pembentukan Karakter (Character Building), Pendidikan Kerohanian, Kewirausahaan dan Pelatihan teknis menyesuaikan bidang pemagangan.

Dalam rancangan kerangka kerja sama internasional antara Jepang dan Indonesia, LPK COOP Indonesia telah membuka kantor perwakilan di Tokyo, Osaka dan Aichi guna memperlancar pelaksanaan program penempatan peserta pemagangan di Jepang. Dan saat ini kami telah menempatkan sekitar 2,500 peserta pemagangan ke beberapa Perusahaan di Jepang di berbagai bidang antara lain: Kontruksi, Keperawatan, Pengelasan, Pertanian, Perikanan, Peternakan, Manufaktur, Industri Olahan Makanan, Tata Operasi Darat (Ground Handling), dan lain sebagainya.`,
      },
      {
        image: '/about/at-a-glance-image-2.svg',
        alt: 'at-a-glance-image-2-coop-indonesia',
        content: `Selain itu, LPK COOP Indonesia juga mempersiapkan dan manfasilitasi program pasca pemagangan bagi mereka yang telah menyelesaikan program pemagangan di Jepang. Diharapkan progam ini dapat mendorong para alumni peserta untuk memiliki usaha mandiri baik secara individual atau kelompok sesuai dengan pengalaman yang telah didapatkan di Jepang. Untuk mewujudkan tujuan tersebut, LPK COOP Indonesia telah bekerja sama dengan Pemerintah Daerah, Kementerian Terkait, Balai-Balai Penelitian atau Riset, Perusahaan lokal maupun internasional.

LPK COOP Indonesia meyakini bahwa **Program Pengembangan Usaha Mandiri** melalui Pemagangan ke Jepang dapat memberi manfaat, antara lain:
* Melahirkan Pengusaha muda yang Mandiri, Kreatif dan Berdaya Saing.
* Mendorong pertumbuhan ekonomi daerah yang dapat berkontribusi mengurangi angka pengangguran nasional.
* Meningkatkan daya saing produk nasional pada pasar Internasional.`,
      },
    ],
  }

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="ABOUT US" title={atAGlance.title}>
          <Markdown size="lg">{atAGlance.subtitle}</Markdown>
        </SectionTitle>
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="4xl">
          {atAGlance.contents.map((item, index) => (
            <div
              key={item.alt}
              className={
                index === 1
                  ? 'flex flex-col-reverse lg:flex-row-reverse'
                  : 'flex flex-col lg:flex-row '
              }
            >
              <Markdown size="lg">{item.content}</Markdown>
              <div className="max-w-[30rem] shrink-0">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-auto w-full"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
            </div>
          ))}
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
