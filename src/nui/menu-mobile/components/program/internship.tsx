import Link from 'next/link'
import { useState } from 'react'
import Button from './button'

type MenuInternshipProps = {
  onclose?: () => void
}

export default function MenuProgramInternship({
  onclose,
}: MenuInternshipProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/program/internship/registration', label: 'Pendaftaran' },
    {
      href: '/program/internship/three-career-path',
      label: 'Cara Berkarir di Jepang',
    },
    {
      href: '/program/internship/terms-conditions',
      label: 'Syarat & Ketentuan',
    },
    { href: '/program/internship/documents', label: 'Kelengkapan Dokumen' },
    {
      href: '/program/internship/rights-obligations',
      label: 'Hak & Kewajiban',
    },
    { href: '/program/internship/program-flow', label: 'Alur Program' },
    {
      href: '/program/internship/educational-material',
      label: 'Materi Program',
    },
    {
      href: '/program/internship/placement-progress',
      label: 'Proses Penempatan',
    },
    { href: '/program/internship/pre-selection', label: 'Pra Seleksi' },
    { href: '/program/internship/selection', label: 'Seleksi' },
    { href: '/program/internship/training', label: 'Pelatihan' },
    { href: '/program/internship/placement', label: 'Penempatan' },
  ]

  return (
    <>
      <Button
        isActive={isOpen}
        onClick={() => setIsOpen((e) => !e)}
        icon="lucide:graduation-cap"
        label="Pemagangan ke Jepang"
      />
      {isOpen && (
        <div className="flex flex-col pl-9">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onclose}
              className="px-4 py-1.5 text-base text-gray-500 hover:text-gray-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
