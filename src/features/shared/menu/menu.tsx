'use client'

import { menuDataStatic } from '@/app/api/menu'
import { Section, Typo } from '@/nui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { menuLinkstyle, menustyle, wrapperMenuStyle } from './menu.style'

type MenuProps = {
  borderBottom?: boolean
  showMenuAbout?: boolean
  showMenuInternship?: boolean
  showMenuNihonggo?: boolean
  showMenuPostInternship?: boolean
}

export function Menu({
  borderBottom,
  showMenuAbout,
  showMenuInternship,
  showMenuNihonggo,
  showMenuPostInternship,
}: MenuProps) {
  const { about, program } = menuDataStatic

  const { container } = menustyle()

  const pathname = usePathname()

  const internship = program.internship

  const nihonggo = program.schools

  const business = program.business

  const renderLinks = (items: any) =>
    items.map((item: any, index: number) => (
      <Link
        key={index}
        href={item.href}
        className={menuLinkstyle({ isActive: pathname === item.href })}
      >
        {item.label}
      </Link>
    ))

  return (
    <Section>
      <div className={wrapperMenuStyle({ borderBottom })}>
        <Typo size="lg" fontWeight="bold" color="gray-900">
          {showMenuAbout && 'ABOUT'}
          {(showMenuNihonggo || showMenuInternship || showMenuPostInternship) &&
            'PEMAGANGAN KE JEPANG'}
        </Typo>
        <div className={container()}>
          {showMenuAbout && renderLinks(about)}
          {showMenuInternship && renderLinks(internship)}
          {showMenuNihonggo && renderLinks(nihonggo)}
          {showMenuPostInternship && renderLinks(business)}
        </div>
      </div>
    </Section>
  )
}
