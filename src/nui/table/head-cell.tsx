import { Typo } from '@/nui'
import { tableHeadCellStyle } from './head-cell.style'
import { TableHeadCellProps } from './types'

export function TableHeadCell({
  title,
  background = false,
  children,
}: TableHeadCellProps) {
  return (
    <th className={tableHeadCellStyle({ background })}>
      {title && (
        <>
          <Typo size="lg" fontWeight="bold" color="primary-500">
            {title}
          </Typo>
          <Typo size="lg" fontWeight="semibold" color="gray-900">
            {children}
          </Typo>
        </>
      )}
    </th>
  )
}
