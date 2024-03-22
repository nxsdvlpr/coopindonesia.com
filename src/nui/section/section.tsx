import { ReactNode } from 'react'

export type SectionProps = {
  children?: ReactNode
}

export function Section({ children }: SectionProps) {
  return (
    <section className="m-auto mb-[7.5rem] max-w-[75rem] overflow-hidden">
      {children}
    </section>
  )
}
