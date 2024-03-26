'use client'

import { Icon, MenuButton, Typo } from '@/nui'
import Link from 'next/link'
import { useState } from 'react'
import { Item } from 'react-stately'

export default function MenuAbout() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      id: 1,
      label: 'At a Glance',
      description: 'Overview about LPK COOP Indonesia',
      link: '/about/at-a-glance',
      icon: 'lucide:building-2',
    },
    {
      id: 2,
      label: 'Mission and Vision',
      description: 'More about our core views',
      link: '/about/vision-and-mission',
      icon: 'lucide:scan-eye',
    },
    {
      id: 3,
      label: 'Organization',
      description: 'Leadership, board, and staff',
      link: '/about/organization',
      icon: 'lucide:scan-eye',
    },
    {
      id: 4,
      label: 'Organization Structure',
      description: 'Leadership, board, and staff',
      link: '/about/organization-structure',
      icon: 'lucide:scan-eye',
    },
  ]

  return (
    <MenuButton
      label="About Us"
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
