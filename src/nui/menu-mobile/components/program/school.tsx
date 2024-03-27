import Link from 'next/link'
import { useState } from 'react'
import Button from './button'

type MenuProgramSchoolProps = {
  onclose?: () => void
}

export default function MenuProgramSchool({ onclose }: MenuProgramSchoolProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/program/nihonggo', label: ' Persyaratan Calon Siswa & Dokumen' },
    { href: '/program/nihonggo/anabuki', label: 'Sekolah Anabuki' },
    { href: '/program/nihonggo/isb', label: 'Sekolah ISB' },
  ]

  return (
    <>
      <Button
        isActive={isOpen}
        onClick={() => setIsOpen((e) => !e)}
        icon="lucide:languages"
        label="Sekolah Bahasa"
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
