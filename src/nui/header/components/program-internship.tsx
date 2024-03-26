import Link from 'next/link'

type MenuInternshipProps = {
  onclose?: () => void
}

export default function MenuProgramInternship({
  onclose,
}: MenuInternshipProps) {
  const menuItems = [
    { href: '/program/internship/registration', label: 'Pendaftaran' },
    {
      href: '/program/internship/three-career-path',
      label: 'Cara Berkarir di Jepang',
    },
    {
      href: '/program/internship/terms-conditions',
      label: 'Syarat & Ketentuan',
    },
    { href: '/program/internship/documents', label: 'Kelengkapan Dokumen' },
    {
      href: '/program/internship/rights-obligations',
      label: 'Hak & Kewajiban',
    },
    { href: '/program/internship/program-flow', label: 'Alur Program' },
    {
      href: '/program/internship/educational-material',
      label: 'Materi Program',
    },
    {
      href: '/program/internship/placement-progress',
      label: 'Proses Penempatan',
    },
    { href: '/program/internship/pre-selection', label: 'Pra Seleksi' },
    { href: '/program/internship/selection', label: 'Seleksi' },
    { href: '/program/internship/training', label: 'Pelatihan' },
    { href: '/program/internship/placement', label: 'Penempatan' },
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
