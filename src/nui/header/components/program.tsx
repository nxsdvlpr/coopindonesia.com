'use client'

import { Flexbox, MenuButton } from '@/nui'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Item } from 'react-stately'
import Menu from './menu'
import MenuProgramBusiness from './program-business'
import MenuProgramInternship from './program-internship'

export function MenuProgram() {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const [state, setState] = useState('internship')

  // const menu = t.raw('programPage.menu.program.menu')

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
              {t.raw('programPage.menu.program.menu').map((item: any) => (
                <Menu
                  key={item.label}
                  label={item.label}
                  description={item.description}
                  icon={item.icon}
                  link={item.href}
                  onClick={() =>
                    item.state ? setState(item.state) : setIsOpen(false)
                  }
                />
              ))}
            </Flexbox>
            {state === 'internship' && (
              <MenuProgramInternship onclose={() => setIsOpen(false)} />
            )}
            {/* {state === 'school' && (
              <MenuProgramSchool onclose={() => setIsOpen(false)} />
            )} */}
            {state === 'business' && (
              <MenuProgramBusiness onclose={() => setIsOpen(false)} />
            )}
          </div>
        </Item>
      </MenuButton>
    </>
  )
}
