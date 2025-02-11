import { useTranslations } from 'next-intl'
import Card from './card'
import Link from './link'
type MenuPublicationProps = {
  onClose: () => void
}

export default function MenuPublication({ onClose }: MenuPublicationProps) {
  const t = useTranslations()
  const publication = t.raw('programPage.menu.publication')

  return (
    <Card title="PUBLICATION">
      {publication.map((item: any) => (
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
