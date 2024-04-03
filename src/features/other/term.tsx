import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function Term() {
  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" title="Ketentuan Pengguna" />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" align="normal" gap="2xl">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-full"
            src="term-image.svg"
            alt="term"
          />
          <Markdown size="lg">
            Selamat datang di situs kami. Dengan mengakses atau menggunakan
            situs ini, Anda setuju untuk terikat dengan ketentuan dan syarat
            penggunaan yang tercantum di bawah ini. Jika Anda tidak setuju
            dengan ketentuan ini, mohon untuk tidak mengakses atau menggunakan
            situs ini.
          </Markdown>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Informasi yang Kami Kumpulkan
            </Typo>
            <Markdown size="lg">
              Kami dapat mengumpulkan informasi pribadi Anda saat Anda
              menggunakan situs ini. Informasi ini dapat mencakup namun tidak
              terbatas pada nama, alamat email, dan informasi kontak lainnya.
              Kami dapat menggunakan informasi ini untuk keperluan internal
              seperti analisis dan peningkatan layanan.
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Penggunaan Cookie
            </Typo>
            <Markdown size="lg">
              Situs kami dapat menggunakan cookie dan teknologi pelacakan serupa
              untuk meningkatkan pengalaman pengguna. Anda dapat mengatur
              preferensi cookie Anda melalui pengaturan browser Anda.
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Penggunaan Informasi
            </Typo>
            <Markdown size="lg">
              Informasi yang kami kumpulkan dapat digunakan untuk berbagai
              tujuan, termasuk untuk menyediakan, menjaga, dan meningkatkan
              layanan kami, serta untuk keperluan analisis data internal.
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Pengungkapan kepada Pihak Ketiga
            </Typo>
            <Markdown size="lg">
              Kami tidak akan mengungkapkan informasi pribadi Anda kepada pihak
              ketiga tanpa izin Anda, kecuali jika diperlukan oleh hukum.
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Perubahan pada Kebijakan Privasi
            </Typo>
            <Markdown size="lg">
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu.
              Kami akan memberi tahu Anda tentang perubahan material dengan
              memposting kebijakan privasi baru di situs ini.
            </Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
    </>
  )
}
