import Link from 'next/link'
type MenuHomeProps = {
  onClose: () => void
}

export default function MenuHome({ onClose }: MenuHomeProps) {
  return (
    <Link
      href="/"
      className="w-full rounded-lg border border-gray-200 p-4 text-base font-semibold text-gray-900 hover:bg-gray-25"
      onClick={onClose}
    >
      HOME
    </Link>
  )
}
