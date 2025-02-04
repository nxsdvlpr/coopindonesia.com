import { menuDataStatic } from '@/app/[locale]/api/menu'
import Card from './card'
import Link from './link'

type MenuAboutUsProps = {
  onClose: () => void
}

export default function MenuAboutUs({ onClose }: MenuAboutUsProps) {
  const { about } = menuDataStatic

  return (
    <Card title="ABOUT US">
      {about.map((item) => (
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
