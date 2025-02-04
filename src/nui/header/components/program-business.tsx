import { menuDataStatic } from '@/app/[locale]/api/menu'
import Link from 'next/link'

type MenuProgramBusinessProps = {
  onclose?: () => void
}

export default function MenuProgramBusiness({
  onclose,
}: MenuProgramBusinessProps) {
  const { business } = menuDataStatic.program

  return (
    <div className="grid shrink-0 grid-cols-2 content-start border-l border-primary-50 p-8 lg:w-[43rem]">
      {business.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onclose}
          className="px-4 py-2.5 text-lg font-bold text-primary-500 hover:text-primary-700"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
