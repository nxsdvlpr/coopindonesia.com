import { Flexbox, Typo } from '@/nui'
import Link from 'next/link'
type MenuProgramSchoolProps = {
  onclose?: () => void
}

export default function MenuProgramSchool({ onclose }: MenuProgramSchoolProps) {
  return (
    <div className="w-[43rem] border-l border-primary-50 p-8">
      <Link
        href="/"
        onClick={onclose}
        className="flex flex-col gap-y-3 rounded-lg p-4 hover:bg-primary-25"
      >
        <Typo size="lg" color="primary-600" fontWeight="bold">
          Persyaratan Calon Siswa & Dokumen
        </Typo>
        <Typo>
          Program Sekolah Bahasa Jepang atau Nihonggo Gakko (sekolah Bahasa
          Jepang Mandiri) merupakan peluang bagi Masyarakat Indonesia
        </Typo>
      </Link>
      <Flexbox align="normal" justify="between">
        <Link
          href="/"
          onClick={onclose}
          className="flex w-1/2 flex-col gap-y-3 rounded-lg p-4 hover:bg-primary-25"
        >
          <Typo size="lg" color="primary-600" fontWeight="bold">
            Sekolah Anabuki
          </Typo>
          <Typo>
            Anabuki College Group is a vocational school group with 14
            vocational schools in the Chugoku-Shikoku area.
          </Typo>
        </Link>
        <Link
          href="/"
          onClick={onclose}
          className="flex w-1/2 flex-col gap-y-3 rounded-lg p-4 hover:bg-primary-25"
        >
          <Typo size="lg" color="primary-600" fontWeight="bold">
            Sekolah ISB
          </Typo>
          <Typo>
            Everyone has a dream.How to achieve that dream may be of the utmost
            importance to a young person.
          </Typo>
        </Link>
      </Flexbox>
    </div>
  )
}
