import { Icon, Typo } from '@/nui'
import Link from 'next/link'

type MenuProps = {
  icon?: string
  label?: string
  description?: string
  onClick?: () => void
  link?: string
}

export default function Menu({
  icon,
  label,
  description,
  onClick,
  link,
}: MenuProps) {
  if (link) {
    return (
      <Link
        onClick={onClick}
        href={link}
        className="flex shrink-0 items-center gap-6 p-8 font-semibold text-gray-900 outline-none hover:bg-primary-25 lg:w-[25rem] xl:w-[31.25rem]"
      >
        <div className="rounded-lg bg-primary-50 p-2.5 text-primary-500">
          <Icon icon={icon} />
        </div>
        <div className="text-start">
          <Typo size="lg" fontWeight="bold" color="primary-500">
            {label}
          </Typo>
          <Typo>{description}</Typo>
        </div>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className="flex shrink-0 items-center gap-6 p-8 font-semibold text-gray-900 outline-none hover:bg-primary-25 lg:w-[25rem] xl:w-[31.25rem]"
    >
      <div className="rounded-lg bg-primary-50 p-2.5 text-primary-500">
        <Icon icon={icon} />
      </div>
      <div className="text-start">
        <Typo size="lg" fontWeight="bold" color="primary-500">
          {label}
        </Typo>
        <Typo>{description}</Typo>
      </div>
    </button>
  )
}
