import { Icon } from '@/nui'

export type NextArrowProps = {
  onClick: () => void
}

export default function NextArrow({ onClick }: NextArrowProps) {
  return (
    <button
      type="button"
      className="absolute right-4 top-1/2 flex items-center justify-center rounded-full bg-white p-1 text-gray-700"
      onClick={onClick}
    >
      <Icon size="sm" icon="lucide:chevron-right" />
    </button>
  )
}
