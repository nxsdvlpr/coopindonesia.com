import Link from 'next/link'
type MenuContactUsProps = {
  onClose: () => void
}

export default function MenuContactUs({ onClose }: MenuContactUsProps) {
  return (
    <Link
      href="/contact-us"
      className="w-full rounded-lg border border-gray-200 p-4 text-base font-semibold text-gray-900 hover:bg-gray-25"
      onClick={onClose}
    >
      CONTACT US
    </Link>
  )
}
