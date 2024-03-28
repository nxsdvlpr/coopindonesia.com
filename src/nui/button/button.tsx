import { forwardRef } from '../../utils'
import { buttonStyle } from './button.style'
import { ButtonProps } from './types'

export const Button = forwardRef<'button', ButtonProps>(
  (
    {
      as,
      size = 'md',
      wider = 'none',
      rounded = 'full',
      children,
      ...otherProps
    },
    ref
  ) => {
    const Component = as ?? 'button'
    return (
      <Component
        ref={ref}
        className={buttonStyle({ size, wider, rounded })}
        {...otherProps}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'
