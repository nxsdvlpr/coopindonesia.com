import { menuDataStatic } from '@/app/[locale]/api/menu'
import { useTranslations } from 'next-intl'
import Card from './card'
import Link from './link'

type MenuAboutUsProps = {
  onClose: () => void
}

export default function MenuAboutUs({ onClose }: MenuAboutUsProps) {
  const t = useTranslations()
  const { about } = menuDataStatic

  return (
    <Card title="ABOUT US">
      {t.raw('programPage.menu.about').map((item: any) => (
        <Link
          key={item.id}
          icon={item.icon}
          title={item.label}
          href={item.href}
          onClick={onClose}
        />
      ))}
    </Card>
  )
}
