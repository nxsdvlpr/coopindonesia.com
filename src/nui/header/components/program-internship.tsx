import { useTranslations } from 'next-intl'
import Link from 'next/link'

type MenuInternshipProps = {
  onclose?: () => void
}

export default function MenuProgramInternship({
  onclose,
}: MenuInternshipProps) {
  const t = useTranslations()
  // const { internship } = menuDataStatic.program

  return (
    <div className="grid shrink-0 grid-cols-2 content-start border-l border-primary-50 p-8 xl:w-[43rem]">
      {t.raw('programPage.menu.program.internship').map((item: any) => (
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
