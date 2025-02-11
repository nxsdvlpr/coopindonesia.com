import { Icon } from '@/nui/icon'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type MenuProgramStudentInternshipProps = {
  onclose: () => void
}

export default function MenuProgramStudentInternship({
  onclose,
}: MenuProgramStudentInternshipProps) {
  const t = useTranslations()

  return (
    <Link
      href={t('programPage.menu.program.studentInternship.href')}
      onClick={onclose}
      className="flex w-full items-center gap-x-3 p-4 text-gray-500 hover:bg-primary-25"
    >
      <div className="rounded bg-primary-50 p-1.5 text-primary-500">
        <Icon
          size="sm"
          icon={t('programPage.menu.program.studentInternship.icon')}
        />
      </div>
      <div className="text-base font-semibold text-primary-500">
        {t('programPage.menu.program.menu.1.label')}
      </div>
    </Link>
  )
}
