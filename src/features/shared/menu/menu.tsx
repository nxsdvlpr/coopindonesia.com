'use client'

import { menuDataStatic } from '@/app/[locale]/api/menu'
import { Section, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations()
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
            t('sharedContent.menuProgramBusiness.title')}
        </Typo>
        <div className={container()}>
          {showMenuAbout && renderLinks(about)}
          {showMenuInternship &&
            renderLinks(
              t.raw('sharedContent.menuProgramInternship.internship')
            )}
          {showMenuNihonggo && renderLinks(nihonggo)}
          {showMenuPostInternship &&
            renderLinks(t.raw('sharedContent.menuProgramBusiness.business'))}
        </div>
      </div>
    </Section>
  )
}
