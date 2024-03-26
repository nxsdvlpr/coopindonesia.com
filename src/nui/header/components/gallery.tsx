'use client'

import { Icon, MenuButton, Typo } from '@/nui'
import Link from 'next/link'
import { useState } from 'react'
import { Item } from 'react-stately'

export default function MenuGallery() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      id: 1,
      label: 'Kunjungan Kerja',
      description: 'Foto-foto kunjungan kerja',
      link: '/gallery/work-visit',
    },
    {
      id: 2,
      label: 'Kerjasama',
      description: 'Foto-foto kerjasama COOP Indonesia',
      link: '/gallery/collaboration',
    },
    {
      id: 3,
      label: 'Kegiatan Magang',
      description: 'Foto-foto peserta dalam kegiatan magang',
      link: '/gallery/internship-activities',
    },
    {
      id: 4,
      label: 'Pusdiklat Magang',
      description: 'Foto-foto kegiatan di pusdiklat magang',
      link: '/gallery/training-center',
    },
  ]

  return (
    <MenuButton
      label="Gallery"
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
              <Icon icon="lucide:image" />
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
