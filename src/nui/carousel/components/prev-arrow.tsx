import { Icon } from '@/nui'

export type PrevArrowProps = {
  onClick: () => void
}

export default function PrevArrow({ onClick }: PrevArrowProps) {
  return (
    <button
      type="button"
      className="absolute left-4 top-1/2 flex items-center justify-center rounded-full bg-white p-1 text-gray-700"
      onClick={onClick}
    >
      <Icon size="sm" icon="lucide:chevron-right" />
    </button>
  )
}
