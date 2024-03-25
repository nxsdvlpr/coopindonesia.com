import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipPlacementProgress() {
  const document = `1. PASPOR (ASLI) - Masa Berlaku 4 tahun.
2. PAS FOTO Terbaru latar belakang : Putih (softcopy).
3. Scan Ijazah Asli (SD, SMP, SMA/SMK sederajat).
4. Scan KTP Asli.
5. Scan Kartu Keluarga Asli.
6. Scan Akte Kelahiran Asli.
7. Surat keterangan kerja (optional)
8. Surat Keterangan Catatan Kepolisian (SKCK).
9. Surat pernyataan ijin orang tua/wali bermaterai untuk mengikuti program magang di Jepang (versi LPK COOP Indonesia).
10. Pernyataan bermaterai bahwa bersedia dan sanggup mengikuti program pemagangan di perusahaan kecil dan menengah di Jepang selama 3 tahun atau lebih (versi LPK COOP Indonesia).`

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Progress Penempatan"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="xl" fontWeight="bold" color="gray-900">
            Progress Penempatan
          </Typo>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full"
            src="/program/placement-progress-image-1.svg"
            alt="placement-progress-image-1-coop-indonesia"
          />
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
