import { forwardRef } from 'react'
import { buttonStyle } from './button.style'
import { ButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, ...otherProps }, forwardRef) {
    return (
      <button ref={forwardRef} className={buttonStyle()} {...otherProps}>
        {children}
      </button>
    )
  }
)
