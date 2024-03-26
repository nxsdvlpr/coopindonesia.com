'use client'

import { Flexbox, MenuButton } from '@/nui'
import { useState } from 'react'
import { Item } from 'react-stately'
import Menu from './menu'
import MenuProgramBusiness from './program-business'
import MenuProgramInternship from './program-internship'
import MenuProgramSchool from './program-school'

export function MenuProgram() {
  const [isOpen, setIsOpen] = useState(false)

  const [state, setState] = useState('internship')

  const programItems = [
    {
      icon: 'lucide:graduation-cap',
      label: 'Pemagangan ke Jepang',
      description: 'LPK COOP Indonesia melakukan proses rekrutmen',
      state: 'internship',
    },
    {
      icon: 'lucide:languages',
      label: 'Sekolah Bahasa',
      description:
        'Nihonggo Gakko untuk mempelajari secara langsung budaya dan bahasa Jepang',
      state: 'school',
    },
    {
      icon: 'lucide:award',
      label: 'Program Usaha Mandiri',
      description: 'Kegiatan usai magang di Jepang & kembali ke Tanah Air',
      state: 'business',
    },
  ]

  return (
    <>
      <MenuButton
        isOpen={isOpen}
        closeOnSelect={false}
        onOpenChange={() => setIsOpen((e) => !e)}
        selectionMode="none"
        label="Programs"
      >
        <Item>
          <div className="flex">
            <Flexbox flow="col" gap="none" align="normal">
              {programItems.map((item) => (
                <Menu
                  key={item.label}
                  label={item.label}
                  description={item.description}
                  icon={item.icon}
                  onClick={() => setState(item.state)}
                />
              ))}
            </Flexbox>
            {state === 'internship' && (
              <MenuProgramInternship onclose={() => setIsOpen(false)} />
            )}
            {state === 'school' && (
              <MenuProgramSchool onclose={() => setIsOpen(false)} />
            )}
            {state === 'business' && (
              <MenuProgramBusiness onclose={() => setIsOpen(false)} />
            )}
          </div>
        </Item>
      </MenuButton>
    </>
  )
}
