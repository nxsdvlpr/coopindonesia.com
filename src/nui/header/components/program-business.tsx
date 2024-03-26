import Link from 'next/link'

type MenuProgramBusinessProps = {
  onclose?: () => void
}

export default function MenuProgramBusiness({
  onclose,
}: MenuProgramBusinessProps) {
  const menuItems = [
    { href: '/', label: 'Pendahuluan' },
    {
      href: '/',
      label: 'Furusato Agribisnis',
    },
    {
      href: '/',
      label: 'Gula Aren',
    },
    { href: '/', label: 'Roselindo Tea' },
  ]

  return (
    <div className="grid w-[43rem] shrink-0 grid-cols-2 content-start border-l border-primary-50 p-8">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onclose}
          className="px-4 py-2.5 text-lg font-bold text-primary-600 hover:text-primary-700"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
