import { flexboxStyle } from './flexbox.style'
import { FlexboxProps } from './types'

export function Flexbox({
  flow = 'row',
  gap = 'md',
  align = 'center',
  justify = 'normal',
  children,
}: FlexboxProps) {
  return (
    <div className={flexboxStyle({ flow, gap, align, justify })}>
      {children}
    </div>
  )
}
