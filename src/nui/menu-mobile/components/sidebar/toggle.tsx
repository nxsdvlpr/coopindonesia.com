import { Path } from './path'
import { toggleStyle, pathVariants } from './toggle.style'

export type ToggleProps = {
  toggle: any
}

export const Toggle = ({ toggle }: ToggleProps) => (
  <button onClick={toggle} className={toggleStyle()}>
    <svg width="20" height="20" viewBox="0 0 20 20">
      <Path variants={pathVariants.top} />
      <Path
        d="M 2 9.423 L 16 9.423"
        variants={pathVariants.middle}
        transition={{ duration: 0.1 }}
      />
      <Path variants={pathVariants.bottom} />
    </svg>
  </button>
)
