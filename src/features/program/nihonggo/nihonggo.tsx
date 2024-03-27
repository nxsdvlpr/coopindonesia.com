import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function Nihonggo() {
  const nihonggo = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Program Sekolah Bahasa',
    image: {
      src: '/nihonggo/nihonggo-image-1.svg',
      alt: 'nihonggo-image-1-coop-indonesia',
    },
    contents: [
      {
        body: 'Program Sekolah Bahasa Jepang atau Nihonggo Gakko (sekolah Bahasa Jepang Mandiri) merupakan peluang bagi Masyarakat Indonesia yang berminat mempelajari secara langsung budaya dan bahasa Jepang di Negeri Sakura, yang kemudian dapat dilanjutkan dengan peluang bekerja di Perusahaan Jepang sesuai minat yang diinginkan.',
      },
      {
        title: 'Kelebihan Program',
        body: 'Mendapatkan jaminan bekerja paruh waktu (Part time) atau Arubaito oleh Sekolah Bahasa dengan gaji sesuai Upah Minimal (UMP).',
      },
      {
        title: 'Persyaratan Calon Siswa',
        body: '1. Lulus Ujian N-5, atau sederajat (sertifikasi kursus bahasa jepang)\n2. Usia minimal 18 tahun\n3. Pendidikan: Lulus SMA/SMK sederajat\n4. FIT Medical Check Up test\n5. Mendapatkan garansi pembiayaan dari Orang Tua/Wali',
      },
      {
        title: 'Dokumen yang Diperlukan',
        body: '1. Softcopy KTP, Kartu Keluarga, Akte Lahir\n2. Softcopy Passfoto (latar belakang Putih)\n3. Softcopy Ijazah : SD, SMP, SMA/SMK Sederajat, (S1 Optional)\n4. Sertifikasi lembaga kursus Bahasa Jepang atau Sertifikat N-5 (asli dan softcopy)\n5. Surat pernyataan bermaterai kesediaan orang tua/wali sebagai penjamin calon siswa(i)\n6. Surat Keterangan Kesehatan (Medical Check Up)\n\nSoftcopy dikirim via email ke email: **coopindonesia@gmail.com** dengan subjek: **Program Sekolah Bahasa Jepang**.',
      },
      {
        body: 'Rep Office:\nLPK COOP Indonesia<br/>Wisma 46 Kota BNI, Lantai 50, Jl. Jend Sudirman Kav. 1, Jakarta 10220<br/>Tel. +62 21 5748879, 5748845<br/>Fax. +62 21 5748888<br/>Email: tokyotaiseigakuin@gmail.com',
      },
    ],
  }

  const { info, title, image, contents } = nihonggo

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="content">
        <Flexbox align="normal" flow="col" gap="xl">
          <div className="mx-auto max-w-[28.75rem]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src={image.src}
              alt={image.alt}
            />
          </div>

          {contents.map((content, index) => (
            <Flexbox key={index} flow="col" gap="none" align="normal">
              {content.title && (
                <Typo size="2xl" fontWeight="bold" color="gray-900">
                  {content.title}
                </Typo>
              )}
              <Markdown size="lg">{content.body}</Markdown>
            </Flexbox>
          ))}
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
