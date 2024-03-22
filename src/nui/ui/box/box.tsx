import { boxStyle } from './box.style'
import { BoxProps } from './types'

export function Box({
  padding = 'lg',
  withBorder = false,
  rounded = 'md',
  children,
}: BoxProps) {
  return (
    <div className={boxStyle({ padding, border: withBorder, rounded })}>
      {children}
    </div>
  )
}
