import { menuDataStatic } from '@/app/api/menu'
import Card from './card'
import Link from './link'
type MenuPublicationProps = {
  onClose: () => void
}

export default function MenuPublication({ onClose }: MenuPublicationProps) {
  const { publication } = menuDataStatic

  return (
    <Card title="PUBLICATION">
      {publication.map((item) => (
        <Link
          key={item.id}
          icon={item.icon}
          title={item.label}
          href={item.link}
          onClick={onClose}
        />
      ))}
    </Card>
  )
}
