import Card from './card'
import Link from './link'
type MenuPublicationProps = {
  onClose: () => void
}

export default function MenuPublication({ onClose }: MenuPublicationProps) {
  return (
    <Card title="PUBLICATION">
      <Link
        icon="lucide:play"
        title="Vlog"
        href="/publication/vlog"
        onClick={onClose}
      />
      <Link
        icon="lucide:newspaper"
        title="From Our Social Media Account"
        href="/publication/instagram"
        onClick={onClose}
      />
    </Card>
  )
}
