import { forwardRef } from '../../utils'
import { textareaStyle } from './textarea.style'
import { TextareaProps } from './types'

export const Textarea = forwardRef<'input', TextareaProps>(
  ({ placeholder }, ref) => {
    return (
      <textarea
        ref={ref}
        placeholder={placeholder}
        className={textareaStyle()}
      />
    )
  }
)
