import Card from './card'
import Link from './link'

type MenuAboutUsProps = {
  onClose: () => void
}

export default function MenuAboutUs({ onClose }: MenuAboutUsProps) {
  return (
    <Card title="ABOUT US">
      <Link
        icon="lucide:image"
        title="At a Glance"
        href="/about/at-a-glance"
        onClick={onClose}
      />
      <Link
        icon="lucide:image"
        title="Mission and Vision"
        href="/about/vision-and-mission"
        onClick={onClose}
      />
      <Link
        icon="lucide:image"
        title="Organization"
        href="/about/organization"
        onClick={onClose}
      />
      <Link
        icon="lucide:image"
        title="Organization Structure"
        href="/about/organization-structure"
        onClick={onClose}
      />
    </Card>
  )
}
