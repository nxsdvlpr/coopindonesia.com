import { boxStyle } from './box.style'
import { BoxProps } from './types'

export function Box({
  padding = 'lg',
  withBorder = false,
  children,
}: BoxProps) {
  return (
    <div className={boxStyle({ padding, border: withBorder })}>{children}</div>
  )
}
