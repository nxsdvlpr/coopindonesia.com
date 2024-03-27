import { Flexbox, Markdown, Typo } from '@/nui'

export default function Requirement() {
  const requirement = {
    title: 'Ketentuan Pendaftaran',
    body: `1. Calon peserta dapat mendaftar secara perorangan atau melalui mitra **LPK COOP Indonesia** di daerah.\n\n2. Calon peserta akan mengikuti **Pra-Seleksi** yang diselenggarakan oleh LPK COOP Indonesia yang meliputi: test fisik, test psikologi/IQ, test akademis, wawancara, dll\n\n3. Setelah dinyatakan lulus Pra Seleksi, peserta dapat mengikuti Seleksi dengan Perusahaan Penerima Jepang, yang meliputi: **Test Praktek, Wawancara,** (atau test lainnya yang diperlukan)\n\n4. Setelah dinyatakan lulus, peserta wajib melengkapi dokumen yang diperlukan dan mengikuti Pelatihan Pra Penempatan Selama 90 hari di Indonesia yang meliputi **Pembentukan Fisik, Mental dan Disiplin (FMD), Bahasa dan Budaya Jepang,** dengan biaya ditanggung oleh calon peserta.`,
  }

  const { title, body } = requirement

  return (
    <Flexbox flow="col" align="start" gap="none">
      <Typo size="2xl" fontWeight="bold" color="gray-900">
        {title}
      </Typo>
      <Markdown size="lg">{body}</Markdown>
    </Flexbox>
  )
}
