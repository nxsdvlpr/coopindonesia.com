import { useRef } from 'react'
import { useMenuItem } from 'react-aria'
import { MenuItemProps } from '../types'

export function MenuItem({ closeOnSelect = true, item, state }: MenuItemProps) {
  const ref = useRef(null)

  const { menuItemProps } = useMenuItem(
    { key: item.key, closeOnSelect },
    state,
    ref
  )

  return (
    <li
      {...menuItemProps}
      ref={ref}
      className="outline-none focus:outline-none"
    >
      {item.rendered}
    </li>
  )
}
