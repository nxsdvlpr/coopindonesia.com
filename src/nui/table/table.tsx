import { TableProps } from './types'

export function Table({ children }: TableProps) {
  return (
    <table className="border-separate border-spacing-0 overflow-hidden rounded-lg border border-gray-200">
      {children}
    </table>
  )
}
