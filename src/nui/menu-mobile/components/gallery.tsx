import { useTranslations } from 'next-intl'
import Card from './card'
import Link from './link'

type MenuGalleryProps = {
  onClose: () => void
}

export default function MenuGallery({ onClose }: MenuGalleryProps) {
  const t = useTranslations()

  return (
    <Card title="GALLERY">
      {t.raw('programPage.menu.galleries').map((item: any) => (
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
