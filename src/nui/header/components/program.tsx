'use client'

import { menuDataStatic } from '@/app/api/menu'
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

  const { menu } = menuDataStatic.program

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
              {menu.map((item) => (
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
