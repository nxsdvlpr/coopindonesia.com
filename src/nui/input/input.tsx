import { forwardRef } from '../utils'
import { inputStyle } from './input.style'
import { InputProps } from './types'

export const Input = forwardRef<'input', InputProps>(({ placeholder }, ref) => {
  return <input ref={ref} placeholder={placeholder} className={inputStyle()} />
})
