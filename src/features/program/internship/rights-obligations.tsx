import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipRightsObligations() {
  const internshipRightsObligations = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Hak dan Kewajiban',
    image: {
      src: '/program/rights-obligations-image-1.svg',
      alt: 'rights-obligations-image-1-coop-indonesia',
    },
    titleRights: 'Hak Peserta',
    contentRights: `1. **Selama di Indonesia**
    1. Akomodasi, konsumsi dan kebutuhan perlengkapan ATK selama masa pelatihan selama 90 hari.
    2. Mengikuti kurikulum pelatihan, antara lain:
      1. Budaya dan Bahasa Jepang.
      2. Olahraga / latihan fisik.
      3. Mental dan Ideologi untuk membangun karakter.
      4. Keterampilan lainnya

2. **Selama di Jepang**
    1. Pendidikan keterampilan selama 1 (satu) bulan pertama.
    2. Akomodasi dan uang saku (honor)
    3. Asuransi kesehatan dan kecelakaan kerja.
    4. Penempatan program magang sesuai kontrak kerja selama 3 tahun`,
    titleObligations: 'Hak Peserta',
    contentObligations: `1. Menyelesaikan program magang sesuai kontrak kerja yang telah disepakati dan ditandatangani.\n\n2. Mematuhi peraturan yang ditetapkan oleh perusahaan penerima peserta magang dan undang-undang yang berlaku selama masa penempatan di Jepang.\n\n3. Menerima sanksi hukum sesuai ketentuan Negara setempat (Jepang) bilamana tidak melaksanakan point 1 & 2 diatas.\n\n4. Melengkapi dokumen/berkas yang diperlukan untuk proses penempatan di Jepang.`,
  }

  const {
    info,
    title,
    image,
    titleRights,
    contentRights,
    titleObligations,
    contentObligations,
  } = internshipRightsObligations

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="2xl">
          <div className="mx-auto shrink-0 lg:w-[28.75rem]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src={image.src}
              alt={image.alt}
            />
          </div>
          <Flexbox flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {titleRights}
            </Typo>
            <Markdown size="lg">{contentRights}</Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {titleObligations}
            </Typo>
            <Markdown size="lg">{contentObligations}</Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
