import { Button, Flexbox, Typo } from '@/nui'

export default function ListCareer() {
  return (
    <table className="border-separate border-spacing-0 overflow-hidden rounded-lg border border-gray-200">
      <thead>
        <tr>
          <th className="w-[300px] px-6 py-8"></th>
          <th className="w-[300px] px-6 py-8">
            <Typo size="lg" fontWeight="bold" color="primary-700">
              Peserta Magang
            </Typo>
            <Typo size="lg" fontWeight="semibold" color="gray-900">
              Ginou Jisshusei
            </Typo>
          </th>
          <th className="w-[300px] bg-primary-25 px-6 py-8">
            <Typo size="lg" fontWeight="bold" color="primary-700">
              Visa Kerja Keahlian Khusus
            </Typo>
            <Typo size="lg" fontWeight="semibold" color="gray-900">
              Tokutei Ginou
            </Typo>
          </th>
          <th className="w-[300px] px-6 py-8">
            <Typo size="lg" fontWeight="bold" color="primary-700">
              Sekolah Bahasa Jepang
            </Typo>
            <Typo size="lg" fontWeight="semibold" color="gray-900">
              Nihongo Gakkou
            </Typo>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-8">
            <Typo size="sm" fontWeight="bold" color="gray-900">
              Biaya-biaya
            </Typo>
          </td>
          <td className="px-6 py-8">
            <Flexbox flow="col" gap="xs">
              <Typo size="3xl" fontWeight="bold" color="black">
                <span className="text-sm font-normal">Rp</span> 27,5jt
              </Typo>
              <Button>Daftar</Button>
              <ul className="flex list-image-[url('/check.svg')] flex-col gap-3 pl-6">
                <li className="pl-1 text-gray-700">
                  Untuk technical intern training 1A & 2B untuk biaya pelatihan
                  pra keberangkatan di Pusdiklat LPK Coop Indonesia
                </li>
                <li className="pl-1 text-gray-700">
                  Technical intern training 3B: <strong>Free</strong>
                </li>
              </ul>
            </Flexbox>
          </td>
          <td className="bg-primary-25 px-6 py-8">
            <Flexbox flow="col" gap="xs">
              <Typo size="3xl" fontWeight="bold" color="black">
                <span className="text-sm font-normal">Rp</span> 10jt*
              </Typo>
              <Button>Daftar</Button>
              <ul className="flex list-image-[url('/check.svg')] flex-col gap-3 pl-6">
                <li className="pl-1 text-gray-700">
                  Untuk alumni peserta magang dari sending organization (SO)
                  lain dan kandidat non alumni
                </li>
                <li className="pl-1 text-gray-700">
                  Alumni peserta magang LPK Coop Indonesia:{' '}
                  <strong>Free</strong>
                </li>
              </ul>
            </Flexbox>
          </td>
          <td className="px-6 py-8">
            {' '}
            <Flexbox flow="col" gap="xs">
              <Typo size="3xl" fontWeight="bold" color="black">
                <span className="text-sm font-normal">¥</span> 575rb
              </Typo>
              <Button>Daftar</Button>
              <ul className="flex list-image-[url('/check.svg')] flex-col gap-3 pl-6">
                <li className="pl-1 text-gray-700">
                  Rincian: Biaya pendaftaran & dokumen: 50,000 Yen Biaya
                  pendidikan 1 tahun: 525,000 Yen
                </li>
                <li className="pl-1 text-gray-700">
                  Belum termasuk biaya asrama 6 bulan: ± 205,000 Yen
                </li>
              </ul>
            </Flexbox>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-8">
            <Typo size="sm" fontWeight="bold" color="gray-900">
              Persyaratan Calon Kandidat
            </Typo>
          </td>
          <td className="flex flex-col items-start px-6 py-8">
            <ul className="flex list-image-[url('/check.svg')] flex-col items-start gap-3 pl-6">
              <li className="pl-1 text-gray-700">
                Pendidikan Minimal SMA/SMK sederajat
              </li>
              <li className="pl-1 text-gray-700">
                Pengalaman kerja sesuai bidang pemagangan (minimal 1 tahun)
              </li>
              <li className="pl-1 text-gray-700">
                Belum pernah ke Jepang dengan program apapun
              </li>
            </ul>
          </td>
          <td className="bg-primary-25 px-6 py-8">
            <ul className="flex list-image-[url('/check.svg')] flex-col items-start gap-3 pl-6">
              <li className="pl-1 text-gray-700">
                Alumni peserta magang (ginou jisshusei) yang bersertifikat
                minimal program technical intern training 2b (3 tahun).
              </li>
              <li className="pl-1 text-gray-700">
                Untuk non alumni peserta magang: (a) Memiliki sertifikat
                kemampuan bahasa Jepang minimal n4, (b) Pendidikan minimal
                sma/smk sederajat, & (c) Lulus ujian kompetensi sesuai bidang
                pekerjaan yang dipilih.
              </li>
              <li className="pl-1 text-gray-700">
                Untuk alumni peserta magang yang ingin pindah bidang pekerjaan,
                wajib mengikuti ujian kompetensi.
              </li>
            </ul>
          </td>
          <td className="px-6 py-8">Mexico</td>
        </tr>
      </tbody>
    </table>
  )
}
