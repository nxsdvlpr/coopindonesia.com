import Link from 'next/link'
import { useState } from 'react'
import Button from './button'

type MenuProgramBusinessProps = {
  onclose?: () => void
}

export default function MenuProgramBusiness({
  onclose,
}: MenuProgramBusinessProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/program/post-internship', label: 'Pendahuluan' },
    {
      href: '/program/post-internship/furusato-agribisnis',
      label: 'Furusato Agribisnis',
    },
    {
      href: '/program/post-internship/palm-sugar',
      label: 'Gula Aren',
    },
    { href: '/program/post-internship/roselindo-tea', label: 'Roselindo Tea' },
  ]

  return (
    <>
      <Button
        isActive={isOpen}
        onClick={() => setIsOpen((e) => !e)}
        icon="lucide:award"
        label="Program Usaha Mandiri"
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
