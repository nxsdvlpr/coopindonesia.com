import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '..'
import { Flexbox } from '../flexbox'
import { Typo } from '../typo'

export function Header() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-30 h-[4.5rem] bg-white">
        <div className="relative m-auto flex h-full max-w-[80rem] items-center justify-between px-10">
          <Link href="/">
            <Image
              width={40}
              height={40}
              src="/logo.png"
              alt="logo-coop-indonesia"
            />
          </Link>
          <Flexbox gap="xl">
            <Link href="/" className="font-semibold text-gray-900">
              Home
            </Link>
            <Link href="/" className="font-semibold text-gray-900">
              Programs
            </Link>
            <Link href="/" className="font-semibold text-gray-900">
              Publications
            </Link>
            <Link href="/" className="font-semibold text-gray-900">
              Gallery
            </Link>
            <Link href="/about" className="font-semibold text-gray-900">
              About Us
            </Link>
            <Link href="/" className="font-semibold text-gray-900">
              Contact Us
            </Link>
          </Flexbox>
          <div className="absolute right-0 top-[72px] flex w-[1200px] rounded-lg border border-gray-200 bg-white p-4">
            <Flexbox flow="col" gap="none" align="normal">
              <button className="flex items-center gap-6 rounded-lg p-8 font-semibold text-gray-900 outline-none hover:bg-primary-25">
                <div className="rounded-lg bg-primary-50 p-2.5 text-primary-600">
                  <Icon icon="lucide:graduation-cap" />
                </div>
                <div className="text-start">
                  <Typo size="lg" fontWeight="bold" color="primary-600">
                    Pemagangan ke Jepang
                  </Typo>
                  <Typo>LPK COOP Indonesia melakukan proses rekrutmen</Typo>
                </div>
              </button>
              <button className="flex items-center gap-6 rounded-lg p-8 font-semibold text-gray-900 outline-none hover:bg-primary-25">
                <div className="rounded-lg bg-primary-50 p-2.5 text-primary-600">
                  <Icon icon="lucide:languages" />
                </div>
                <div className="text-start">
                  <Typo size="lg" fontWeight="bold" color="primary-600">
                    Sekolah Bahasa
                  </Typo>
                  <Typo>
                    Nihonggo Gakko untuk mempelajari secara langsung budaya dan
                    bahasa Jepang
                  </Typo>
                </div>
              </button>
              <button className="flex items-center gap-6 rounded-lg p-8 font-semibold text-gray-900 outline-none hover:bg-primary-25">
                <div className="rounded-lg bg-primary-50 p-2.5 text-primary-600">
                  <Icon icon="lucide:award" />
                </div>
                <div className="text-start">
                  <Typo size="lg" fontWeight="bold" color="primary-600">
                    Program Usaha Mandiri
                  </Typo>
                  <Typo>
                    Kegiatan usai magang di Jepang & kembali ke Tanah Air
                  </Typo>
                </div>
              </button>
            </Flexbox>
            <div className="grid w-[688px] shrink-0 grid-cols-2 content-start border-l border-primary-50 p-8">
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Pendaftaran
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Cara Berkarir di Jepang
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Kelengkapan Dokumen
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Hak & Kewajiban
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Alur Program
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Materi Program
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Proses Penempatan
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Pra Seleksi
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Seleksi
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Pelatihan
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
              >
                Penempatan
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[120px] h-[4.5rem]" />
    </>
  )
}
