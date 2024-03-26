import Link from 'next/link'

type MenuProgramBusinessProps = {
  onclose?: () => void
}

export default function MenuProgramBusiness({
  onclose,
}: MenuProgramBusinessProps) {
  const menuItems = [
    { href: '/program/post-internship', label: 'Pendahuluan' },
    {
      href: '/program/post-internship/furusato-agribisnis',
      label: 'Furusato Agribisnis',
    },
    {
      href: '/program/post-internship/palm-sugar',
      label: 'Gula Aren',
    },
    { href: '/program/post-internship/roselindo-tea', label: 'Roselindo Tea' },
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
