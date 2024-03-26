'use client'

import { Icon, MenuButton, Typo } from '@/nui'
import Link from 'next/link'
import { useState } from 'react'
import { Item } from 'react-stately'

export default function MenuPublication() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      id: 1,
      label: 'Vlog',
      description: 'Watch our latest video log on YouTube',
      link: '/publication/vlog',
      icon: 'lucide:play',
    },
    {
      id: 2,
      label: 'From Our Social Media Account',
      description: 'Updates from our Instagram',
      link: '/publication/instagram',
      icon: 'lucide:newspaper',
    },
  ]

  return (
    <MenuButton
      label="Publication"
      placement="bottom right"
      items={menuItems}
      isOpen={isOpen}
      closeOnSelect={false}
      onOpenChange={() => setIsOpen((e) => !e)}
    >
      {(item) => (
        <Item textValue={item.label}>
          <Link
            href={item.link}
            onClick={() => setIsOpen(false)}
            className="flex w-[30rem] items-center gap-6 rounded-lg p-6 font-semibold text-gray-900 outline-none hover:bg-primary-25"
          >
            <div className="rounded-lg bg-primary-50 p-2.5 text-primary-600">
              <Icon icon={item.icon} />
            </div>
            <div className="text-start">
              <Typo size="lg" fontWeight="bold" color="primary-600">
                {item.label}
              </Typo>
              <Typo>{item.description}</Typo>
            </div>
          </Link>
        </Item>
      )}
    </MenuButton>
  )
}
