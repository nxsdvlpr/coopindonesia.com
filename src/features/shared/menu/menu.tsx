'use client'

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

  const { container } = menustyle()

  const pathname = usePathname()

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
          {showMenuAbout && t('sharedContent.menuAbout.title')}
          {(showMenuNihonggo || showMenuInternship || showMenuPostInternship) &&
            t('sharedContent.menuProgramBusiness.title')}
        </Typo>
        <div className={container()}>
          {showMenuAbout && renderLinks(t.raw('sharedContent.menuAbout.about'))}
          {showMenuInternship &&
            renderLinks(
              t.raw('sharedContent.menuProgramInternship.internship')
            )}
          {showMenuNihonggo &&
            renderLinks(t.raw('programPage.menu.program.schools'))}
          {showMenuPostInternship &&
            renderLinks(t.raw('sharedContent.menuProgramBusiness.business'))}
        </div>
      </div>
    </Section>
  )
}
