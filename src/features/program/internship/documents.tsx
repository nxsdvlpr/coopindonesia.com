import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipDocuments() {
  const internshipDocument = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Kelengkapan Dokumen',
    image: {
      src: '/program/document-image-1.svg',
      alt: 'document-image-1-coop-indonesia',
    },
    document: {
      title: 'Kelengkapan Dokumen',
      body: `1. PASPOR (ASLI) - Masa Berlaku 4 tahun.\n\n2. PAS FOTO Terbaru latar belakang : Putih (softcopy).\n\n3. Scan Ijazah Asli (SD, SMP, SMA/SMK sederajat).\n\n4. Scan KTP Asli.\n\n5. Scan Kartu Keluarga Asli.\n\n6. Scan Akte Kelahiran Asli.\n\n7. Surat keterangan kerja (optional)\n\n8. Surat Keterangan Catatan Kepolisian (SKCK).\n\n9. Surat pernyataan ijin orang tua/wali bermaterai untuk mengikuti program magang di Jepang (versi LPK COOP Indonesia).\n\n10. Pernyataan bermaterai bahwa bersedia dan sanggup mengikuti program pemagangan di perusahaan kecil dan menengah di Jepang selama 3 tahun atau lebih (versi LPK COOP Indonesia).`,
    },
  }

  const { title, info, image, document } = internshipDocument

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="content">
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
              {document.title}
            </Typo>
            <Markdown size="lg">{document.body}</Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
