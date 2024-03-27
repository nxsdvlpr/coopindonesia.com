import { Icon, Typo } from '@/nui'
import {
  buttonIconStyle,
  buttonStyle,
  buttonWrapperStyle,
} from './button.style'

type ButtonProps = {
  icon?: string
  label?: string
  isActive?: boolean
  onClick?: () => void
}

export default function Button({
  icon,
  label,
  isActive,
  onClick,
}: ButtonProps) {
  const { main, boxIcon } = buttonStyle()

  return (
    <button onClick={onClick} className={buttonWrapperStyle({ isActive })}>
      <div className={main()}>
        <div className={boxIcon()}>
          <Icon size="xs" icon={icon} />
        </div>
        <Typo size="md" fontWeight="semibold" color="primary-500">
          {label}
        </Typo>
      </div>
      <div className={buttonIconStyle({ isActive })}>
        <Icon size="sm" icon="lucide:chevron-down" />
      </div>
    </button>
  )
}
