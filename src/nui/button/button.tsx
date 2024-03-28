import { forwardRef } from 'react'
import { buttonStyle } from './button.style'
import { ButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { size = 'md', wider = 'none', rounded = 'full', children, ...otherProps },
    forwardRef
  ) {
    return (
      <button
        ref={forwardRef}
        className={buttonStyle({ size, wider, rounded })}
        {...otherProps}
      >
        {children}
      </button>
    )
  }
)
