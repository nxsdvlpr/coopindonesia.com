import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'

export default function Cookies() {
  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" title="Kebijakan Privasi" />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" align="normal" gap="2xl">
          <ImageNui src="cookies-image.svg" alt="cookies" />
          <Markdown size="lg">
            Selamat datang di halaman Kebijakan Cookie kami. Di bawah ini, kami
            menjelaskan tentang penggunaan cookie di situs kami.
          </Markdown>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Apa itu Cookie
            </Typo>
            <Markdown size="lg">
              Cookie adalah file kecil yang disimpan di perangkat Anda saat Anda
              mengunjungi situs web. Cookie memungkinkan situs web untuk
              mengenali perangkat Anda dan menyimpan informasi tentang
              preferensi atau riwayat Anda.
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Jenis Cookie yang Kami Gunakan
            </Typo>
            <Markdown size="lg">
              {`1. **Essential Cookies:** Cookie ini diperlukan untuk menjalankan situs web dengan lancar. Mereka termasuk cookie yang memungkinkan Anda masuk ke akun Anda dan mengakses fitur keamanan situs.\n\n2. **Analytic Cookies:** Cookie ini membantu kami memahami bagaimana pengunjung menggunakan situs kami. Informasi yang dikumpulkan melalui cookie ini membantu kami melakukan analisis statistik untuk meningkatkan pengalaman pengguna.\n\n3. **Fungsional Cookies:** Cookie ini memungkinkan situs web untuk menyimpan preferensi Anda seperti bahasa atau wilayah, sehingga kami dapat menyediakan pengalaman yang lebih pribadi.`}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Pengelolaan Cookie
            </Typo>
            <Markdown size="lg">
              Anda dapat mengelola preferensi cookie Anda melalui pengaturan
              browser Anda. Anda dapat menghapus cookie yang sudah ada dan
              mengatur browser Anda untuk menolak cookie di masa depan. Namun,
              perlu diperhatikan bahwa menonaktifkan cookie dapat memengaruhi
              pengalaman pengguna Anda dan beberapa fitur situs mungkin tidak
              berfungsi dengan baik.
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              Pertanyaan
            </Typo>
            <Markdown size="lg">
              {`Jika Anda memiliki pertanyaan lebih lanjut tentang penggunaan
              cookie di situs kami, jangan ragu untuk menghubungi kami melalui
              informasi kontak yang tersedia di situs ini.\n\n Terima kasih telah
              membaca halaman Kebijakan Cookie kami. Dengan menggunakan situs
              kami, Anda menyetujui penggunaan cookie sebagaimana dijelaskan
              dalam kebijakan cookie ini.`}
            </Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
    </>
  )
}
