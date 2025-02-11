import { useTranslations } from 'next-intl'
import Link from 'next/link'

type MenuContactUsProps = {
  onClose: () => void
}

export default function MenuContactUs({ onClose }: MenuContactUsProps) {
  const t = useTranslations()

  return (
    <Link
      href={t('programPage.menu.contact.href')}
      className="w-full rounded-lg border border-gray-200 p-4 text-base font-semibold text-gray-900 hover:bg-gray-25"
      onClick={onClose}
    >
      {t('programPage.menu.contact.label')}
    </Link>
  )
}
