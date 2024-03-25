import { sectionStyle } from './section.style'
import { SectionProps } from './types'

export function Section({ variant = 'white', children }: SectionProps) {
  return (
    <section className={sectionStyle({ variant })}>
      <div className="m-auto max-w-[75rem]">{children}</div>
    </section>
  )
}
