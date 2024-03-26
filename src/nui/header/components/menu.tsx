import { Icon, Typo } from '@/nui'

type MenuProps = {
  icon?: string
  label?: string
  description?: string
  onClick?: () => void
}

export default function Menu({ icon, label, description, onClick }: MenuProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-[31.25rem] shrink-0 items-center gap-6 rounded-lg p-8 font-semibold text-gray-900 outline-none hover:bg-primary-25"
    >
      <div className="rounded-lg bg-primary-50 p-2.5 text-primary-600">
        <Icon icon={icon} />
      </div>
      <div className="text-start">
        <Typo size="lg" fontWeight="bold" color="primary-600">
          {label}
        </Typo>
        <Typo>{description}</Typo>
      </div>
    </button>
  )
}
