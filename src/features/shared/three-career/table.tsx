import {
  Flexbox,
  Markdown,
  Table,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  Typo,
} from '@/nui'
type ThreeCareerTableProps = {
  threeCareers: any
}

export default function ThreeCareerTable({
  threeCareers,
}: ThreeCareerTableProps) {
  const threeCareerTable = {
    costs: [
      {
        price: '27,5jt',
        desc: '* Untuk technical intern training 1A & 2B untuk biaya pelatihan pra keberangkatan di Pusdiklat LPK Coop Indonesia\n* Technical intern training 3B: **Free**',
      },
      {
        price: '10jt*',
        desc: '* Untuk alumni peserta magang dari sending organization (SO) lain dan kandidat non alumni\n* Alumni peserta magang LPK Coop Indonesia: **Free**',
      },
      {
        price: '575rb',
        desc: '* Rincian:\n  * Biaya pendaftaran & dokumen: 50,000 Yen\n  * Biaya pendidikan 1 tahun: 525,000 Yen\n* Belum termasuk biaya asrama 6 bulan: ± 205,000 Yen',
      },
    ],
    requirements: [
      '* Pendidikan Minimal SMA/SMK sederajat\n* Pengalaman kerja sesuai bidang pemagangan (minimal 1 tahun)\n* Belum pernah ke Jepang dengan program apapun',
      '* Alumni peserta magang (ginou jisshusei) yang bersertifikat minimal program technical intern training 2b (3 tahun).\n* Untuk non alumni peserta magang:\n  1. Memiliki sertifikat kemampuan bahasa Jepang minimal n4,\n  2. Pendidikan minimal sma/smk sederajat, &\n  3. Lulus ujian kompetensi sesuai bidang pekerjaan yang dipilih.\n* Untuk alumni peserta magang yang ingin pindah bidang pekerjaan, wajib mengikuti ujian kompetensi.',
      '* Pendidikan Minimal SMA/SMK sederajat\n* Memiliki penjamin (guarantor) dari orang tua dari keluarga mengenai kemampuan membayar biaya pendidikan selama di jepang.\n* Jika siswa adalah alumni peserta magang (ginou jisshusei), wajib berada di indonesia minimal 1 (satu) tahun setelah selesai kembali ke indonesia.\n* Masa pendidikan di sekolah bahasa jepang adalah maksimal 2 tahun.',
    ],
    periodic: [
      '**3 - 5 tahun**\n* Technical intern training 1B: 1 thn\n* Technical intern training 2B: 2 thn\n* Technical intern training 3B: 3 thn',
      '**5 - 10 tahun**\n* Tokutei Ginou No.1 : 5 tahun\n* Tokutei Ginou No.2: 5 tahun',
      '**Tidak Terbatas**\n* Selama siswa dapat menyelesaikan kewajiban biaya pendidikan ke sekolah bahasa di jepang.\n* Setelah menyelesaikan pendidikan di sekolah bahasa jepang, siswa dapat mengupgrade visa kerja untuk bekerja ke perusahaan di jepang sebagai tenaga profesional.',
    ],
    advantages: [
      '* Peserta yang belum dapat menyesuaikan pekerjaan di Jepang akan mendapat pendampingan/bimbingan dari lembaga penerima (AO) ataupun pihak perusahaan\n* Tidak ada tuntutan kemampuan bahasa Jepang\n* Untuk technical intern training 3b bisa mengambil cuti ke indonesia setiap tahun**\n* Biaya terjangkau',
      '* Biaya gratis untuk alumni peserta magang lpk coop indonesia.\n* Masa tinggal di jepang lebih lama.\n* Memiliki hak cuti setiap tahun untuk kembali ke indonesia**.\n* Untuk tokutei ginou no.2 dapat membawa keluarga dari indonesia.\n* Dapat menentukan apartment/ tempat tinggal sendiri.',
      '* Tidak melewati proses seleksi masuk ke sekolah.\n* Tidak diperlukan basic kemampuan bahasa jepang dasar.\n* Kuota penerimaan tidak terbatas dan masa penerimaan siswa setiap bulan april dan oktober.\n* Memiliki peluang untuk bekerja tanpa batas waktu di jepang, setelah lulus sekolah bahasa di jepang.\n* Status visa setelah mendapat pekerjaan di jepang adalah visa kerja dengan level sama dengan karyawan lokal di jepang.\n* Dapat melanjutkan pendidikan ke universitas di Jepang',
    ],
    weakness: [
      '* Jangka waktu penempatan ditentukan\n* Wajib mengikuti seleksi perusahaan\n* Ketentuan asrama ditentukan oleh pihak perusahaan',
      '* Masa kontrak wajib diselesaikan selama 5 tahun.\n* Wajib memiliki kemampuan level bahasa jepang bersertifikat minimal n4 atau memiliki sertifikat technical intern training 2b.\n* Wajib mengikuti proses seleksi perusahaan.',
      '* Biaya lebih mahal.\n* Wajib memiliki guarantor (penjamin).',
    ],
  }

  const { costs, requirements, periodic, advantages, weakness } =
    threeCareerTable

  return (
    <div className="hidden lg:block">
      <Table>
        <TableHead>
          <TableHeadCell />
          <TableHeadCell title="Peserta Magang">Ginou Jisshusei</TableHeadCell>
          <TableHeadCell background title="Visa Kerja Keahlian Khusus">
            Tokutei Ginou
          </TableHeadCell>
          <TableHeadCell title="Sekolah Bahasa Jepang">
            Nihongo Gakkou
          </TableHeadCell>
        </TableHead>
        <tbody>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                Biaya-biaya
              </Typo>
            </TableBodyCell>
            {costs.map((item, index) => (
              <TableBodyCell background={index === 1} key={index}>
                <Flexbox flow="col" gap="xs">
                  {/* <Typo size="3xl" fontWeight="bold" color="black">
                    <span className="text-sm font-normal">Rp</span> {item.price}
                  </Typo>
                  <Button size="sm">Daftar</Button> */}
                  <Markdown size="lg" variant="table">
                    {item.desc}
                  </Markdown>
                </Flexbox>
              </TableBodyCell>
            ))}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                Persyaratan Calon Kandidat
              </Typo>
            </TableBodyCell>
            {requirements.map((item, index) => (
              <TableBodyCell background={index === 1} key={index}>
                <Markdown size="lg" variant="table">
                  {item}
                </Markdown>
              </TableBodyCell>
            ))}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                Jangka Waktu Penempatan
              </Typo>
            </TableBodyCell>
            {periodic.map((item, index) => (
              <TableBodyCell background={index === 1} key={index}>
                <Markdown size="lg" variant="table">
                  {item}
                </Markdown>
              </TableBodyCell>
            ))}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                Kelebihan
              </Typo>
            </TableBodyCell>
            {advantages.map((item, index) => (
              <TableBodyCell background={index === 1} key={index}>
                <Markdown size="lg" variant="table">
                  {item}
                </Markdown>
              </TableBodyCell>
            ))}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                Kelebihan
              </Typo>
            </TableBodyCell>
            {weakness.map((item, index) => (
              <TableBodyCell background={index === 1} key={index}>
                <Markdown size="lg" variant="table">
                  {item}
                </Markdown>
              </TableBodyCell>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
