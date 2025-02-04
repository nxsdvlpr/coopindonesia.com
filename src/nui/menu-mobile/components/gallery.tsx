import { menuDataStatic } from '@/app/[locale]/api/menu'
import Card from './card'
import Link from './link'

type MenuGalleryProps = {
  onClose: () => void
}

export default function MenuGallery({ onClose }: MenuGalleryProps) {
  const { galleries } = menuDataStatic

  return (
    <Card title="GALLERY">
      {galleries.map((item) => (
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
