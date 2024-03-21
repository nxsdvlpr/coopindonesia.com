import { ReactNode } from 'react'

export type SectionProps = {
  children?: ReactNode
}

export function Section({ children }: SectionProps) {
  return <div className="pb-[120px]">{children}</div>
}
