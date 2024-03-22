import { ReactNode } from 'react'

export type SectionProps = {
  children?: ReactNode
}

export function Section({ children }: SectionProps) {
  return <section className="pb-[120px]">{children}</section>
}
