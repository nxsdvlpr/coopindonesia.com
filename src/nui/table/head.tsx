import { TableHeadProps } from './types'

export function TableHead({ children }: TableHeadProps) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}
