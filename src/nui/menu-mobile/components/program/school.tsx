import { menuDataStatic } from '@/app/[locale]/api/menu'
import { Listbox } from '@/nui/listbox'
import Link from 'next/link'
import { useState } from 'react'
import Button from './button'

type MenuProgramSchoolProps = {
  onclose?: () => void
}

export default function MenuProgramSchool({ onclose }: MenuProgramSchoolProps) {
  const [isOpen, setIsOpen] = useState(false)

  const { schools } = menuDataStatic.program

  return (
    <>
      <Listbox
        label={
          <Button
            isActive={isOpen}
            onClick={() => setIsOpen((e) => !e)}
            icon="lucide:languages"
            label="Program Internship"
          />
        }
        isOpen={isOpen}
      >
        <div className="flex flex-col pl-9">
          {schools.map((item) => (
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
      </Listbox>
    </>
  )
}
