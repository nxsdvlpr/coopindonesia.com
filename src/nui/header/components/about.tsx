'use client'

import { Icon, MenuButton, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { Item } from 'react-stately'

export default function MenuAbout() {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuButton
      label={t('sharedContent.menuNavbar.AboutUs')}
      placement="bottom right"
      items={t.raw('programPage.menu.about')}
      isOpen={isOpen}
      closeOnSelect={false}
      onOpenChange={() => setIsOpen((e) => !e)}
    >
      {t.raw('programPage.menu.about').map((item: any, index: number) => (
        <Item key={index} textValue={item.label}>
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="flex w-[30rem] items-center gap-6 rounded-lg p-6 font-semibold text-gray-900 outline-none hover:bg-primary-25"
          >
            <div className="rounded-lg bg-primary-50 p-2.5 text-primary-500">
              <Icon icon={item.icon} />
            </div>
            <div className="text-start">
              <Typo size="lg" fontWeight="bold" color="primary-500">
                {item.label}
              </Typo>
              <Typo>{item.description}</Typo>
            </div>
          </Link>
        </Item>
      ))}
    </MenuButton>
  )
}
