import { menuDataStatic } from '@/app/api/menu'
import Link from 'next/link'

type MenuInternshipProps = {
  onclose?: () => void
}

export default function MenuProgramInternship({
  onclose,
}: MenuInternshipProps) {
  const { internship } = menuDataStatic.program

  return (
    <div className="grid shrink-0 grid-cols-2 content-start border-l border-primary-50 p-8 xl:w-[43rem]">
      {internship.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onclose}
          className="px-4 py-2.5 text-lg font-bold text-primary-500 hover:text-primary-500"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
