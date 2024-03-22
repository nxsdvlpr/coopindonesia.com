import { ReactNode } from 'react'

export type TableProps = {
  children?: ReactNode
}

export type TableHeadProps = Pick<TableProps, 'children'>

export type TableHeadCellProps = {
  title?: string
  children?: ReactNode
  background?: boolean
}

export type TableBodyCellProps = {
  children?: ReactNode
  background?: boolean
}
