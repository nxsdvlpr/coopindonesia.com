import { sectionMainStyle, sectionStyle } from './section.style'
import { SectionProps } from './types'

export function Section({
  maxWidth = 'md',
  variant = 'none',
  children,
}: SectionProps) {
  return (
    <section className={sectionStyle({ variant })}>
      <div className={sectionMainStyle({ maxWidth })}>{children}</div>
    </section>
  )
}
