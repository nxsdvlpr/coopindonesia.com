import { tableBodyCellStyle } from './body-cell.style'
import { TableBodyCellProps } from './types'

export function TableBodyCell({
  background = false,
  children,
}: TableBodyCellProps) {
  return <td className={tableBodyCellStyle({ background })}>{children}</td>
}
