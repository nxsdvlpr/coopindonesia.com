import { Icon } from '../icon'
import { HTMLNUIProps, forwardRef } from '../utils'
import { checkboxStyle } from './checkbox.style'

export type CheckboxProps = {
  label?: string
} & HTMLNUIProps<'input'>

export const Checkbox = forwardRef<'input', CheckboxProps>(
  ({ label: labelInput, id = 'check' }, ref) => {
    const { wrapper, main, checkbox, icon, label } = checkboxStyle()

    return (
      <div className={wrapper()}>
        <label className={main()} htmlFor={id}>
          <input ref={ref} type="checkbox" className={checkbox()} id={id} />
          <span className={icon()}>
            <Icon size="xs" icon="lucide:check" />
          </span>
        </label>
        <label className={label()} htmlFor={id}>
          {labelInput}
        </label>
      </div>
    )
  }
)

// export function Checkbox() {
//   const { wrapper, main, checkbox, icon, label } = checkboxStyle()

//   const checkboxId = 'check'

//   return (
//     <div className={wrapper()}>
//       <label className={main()} htmlFor={checkboxId}>
//         <input type="checkbox" className={checkbox()} id={checkboxId} />
//         <span className={icon()}>
//           <Icon size="xs" icon="lucide:check" />
//         </span>
//       </label>
//       <label className={label()} htmlFor={checkboxId}>
//         You agree to our friendly
//       </label>
//     </div>
//   )
// }
