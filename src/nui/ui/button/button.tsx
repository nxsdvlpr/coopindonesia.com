import { buttonStyle } from './button.style'
import { ButtonProps } from './types'

export function Button({ children }: ButtonProps) {
  return <button className={buttonStyle()}>{children}</button>
}
