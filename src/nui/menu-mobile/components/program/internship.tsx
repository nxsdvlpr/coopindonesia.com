import { menuDataStatic } from '@/app/[locale]/api/menu'
import { Listbox } from '@/nui/listbox'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import Button from './button'

type MenuInternshipProps = {
  onclose?: () => void
}

export default function MenuProgramInternship({
  onclose,
}: MenuInternshipProps) {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const { internship } = menuDataStatic.program

  return (
    <Listbox
      label={
        <Button
          isActive={isOpen}
          onClick={() => setIsOpen((e) => !e)}
          icon="lucide:graduation-cap"
          label={t('programPage.menu.program.menu.0.label')}
        />
      }
      isOpen={isOpen}
    >
      <div className="flex flex-col pl-9">
        {t.raw('programPage.menu.program.internship').map((item: any) => (
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
  )
}
