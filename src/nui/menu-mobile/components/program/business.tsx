import { menuDataStatic } from '@/app/[locale]/api/menu'
import { Listbox } from '@/nui/listbox'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import Button from './button'

type MenuProgramBusinessProps = {
  onclose?: () => void
}

export default function MenuProgramBusiness({
  onclose,
}: MenuProgramBusinessProps) {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const { business } = menuDataStatic.program

  return (
    <Listbox
      label={
        <Button
          isActive={isOpen}
          onClick={() => setIsOpen((e) => !e)}
          icon="lucide:award"
          label={t('programPage.menu.program.menu.2.label')}
        />
      }
      isOpen={isOpen}
    >
      <div className="flex flex-col pl-9">
        {t.raw('programPage.menu.program.business').map((item: any) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onclose}
            className="px-4 py-1.5 text-base text-gray-500 last:mb-2 hover:text-gray-600"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </Listbox>
  )
}
