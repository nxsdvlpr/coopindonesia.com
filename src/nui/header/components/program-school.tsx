import { Flexbox, Typo } from '@/nui'
import Image from 'next/image'
import Link from 'next/link'
type MenuProgramSchoolProps = {
  onclose?: () => void
}

export default function MenuProgramSchool({ onclose }: MenuProgramSchoolProps) {
  return (
    <div className="w-[43rem] border-l border-primary-50 p-8">
      <Link
        href="/program/nihonggo"
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
          href="/program/nihonggo/anabuki"
          onClick={onclose}
          className="flex w-1/2 flex-col gap-y-3 rounded-lg p-4 hover:bg-primary-25"
        >
          <Flexbox gap="xs">
            <div className="h-8 w-4">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/nihonggo/logo-anabuki.png"
                alt="logo-anabuki"
              />
            </div>
            <Typo size="lg" color="primary-600" fontWeight="bold">
              Sekolah Anabuki
            </Typo>
          </Flexbox>
          <Typo>
            Anabuki College Group is a vocational school group with 14
            vocational schools in the Chugoku-Shikoku area.
          </Typo>
        </Link>
        <Link
          href="/program/nihonggo/isb"
          onClick={onclose}
          className="flex w-1/2 flex-col gap-y-3 rounded-lg p-4 hover:bg-primary-25"
        >
          <Flexbox gap="xs">
            <div className="h-7 w-7">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/nihonggo/logo-isb.png"
                alt="logo-anabuki"
              />
            </div>
            <Typo size="lg" color="primary-600" fontWeight="bold">
              Sekolah ISB
            </Typo>
          </Flexbox>

          <Typo>
            Everyone has a dream.How to achieve that dream may be of the utmost
            importance to a young person.
          </Typo>
        </Link>
      </Flexbox>
    </div>
  )
}
