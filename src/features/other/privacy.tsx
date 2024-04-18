import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'

export default function Privacy() {
  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" title="Kebijakan Privasi" />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" align="normal" gap="2xl">
          <ImageNui src="privacy-image.svg" alt="privacy" />
          <Markdown size="lg">
            Kami menghormati privasi pengguna kami dan berkomitmen untuk
            melindungi informasi pribadi yang Anda berikan kepada kami.
            Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan,
            menggunakan, dan melindungi informasi pribadi Anda.
          </Markdown>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Informasi yang Kami Kumpulkan
            </Typo>
            <Markdown size="lg">
              Kami dapat mengumpulkan informasi pribadi Anda seperti nama,
              alamat email, dan informasi kontak lainnya saat Anda mendaftar
              atau menggunakan layanan kami. Kami juga dapat mengumpulkan
              informasi non-pribadi seperti data penggunaan situs.
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Keamanan Informasi
            </Typo>
            <Markdown size="lg">
              Kami mengambil langkah-langkah yang wajar untuk melindungi
              informasi pribadi Anda dari akses, penggunaan, atau pengungkapan
              yang tidak sah.
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Akses dan Kontrol Informasi Anda
            </Typo>
            <Markdown size="lg">
              Anda dapat mengakses dan memperbarui informasi pribadi Anda yang
              kami simpan dengan menghubungi kami. Anda juga dapat memilih untuk
              tidak menerima surel pemasaran dari kami dengan mengikuti petunjuk
              di surel tersebut.
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Hubungi Kami
            </Typo>
            <Markdown size="lg">
              Jika Anda memiliki pertanyaan atau komentar tentang kebijakan
              privasi kami, silakan hubungi kami melalui informasi kontak yang
              tersedia di situs ini. Terima kasih telah membaca kebijakan
              privasi dan ketentuan penggunaan kami. Dengan menggunakan situs
              kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
            </Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
    </>
  )
}
