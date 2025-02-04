import { menuDataStatic } from '@/app/[locale]/api/menu'
import { Icon } from '@/nui/icon'
import Link from 'next/link'

type MenuProgramStudentInternshipProps = {
  onclose: () => void
}

export default function MenuProgramStudentInternship({
  onclose,
}: MenuProgramStudentInternshipProps) {
  const { studentInternship } = menuDataStatic.program

  const { icon, href, label } = studentInternship

  return (
    <Link
      href={href}
      onClick={onclose}
      className="flex w-full items-center gap-x-3 p-4 text-gray-500 hover:bg-primary-25"
    >
      <div className="rounded bg-primary-50 p-1.5 text-primary-500">
        <Icon size="sm" icon={icon} />
      </div>
      <div className="text-base font-semibold text-primary-500">{label}</div>
    </Link>
  )
}
