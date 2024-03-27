import Card from './card'
import Link from './link'
type MenuGalleryProps = {
  onClose: () => void
}

export default function MenuGallery({ onClose }: MenuGalleryProps) {
  return (
    <Card title="GALLERY">
      <Link
        icon="lucide:image"
        title="Kerjasama"
        href="/gallery/collaboration"
        onClick={onClose}
      />
      <Link
        icon="lucide:image"
        title="Kunjungan Kerja"
        href="/gallery/work-visit"
        onClick={onClose}
      />
      <Link
        icon="lucide:image"
        title="Kegiatan Magang"
        href="/gallery/internship-activities"
        onClick={onClose}
      />
      <Link
        icon="lucide:image"
        title="Pusdiklat Magang"
        href="/gallery/training-center"
        onClick={onClose}
      />
    </Card>
  )
}
