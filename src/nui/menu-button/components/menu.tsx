import { useMenu } from 'react-aria'
import { useTreeState } from 'react-stately'
import { MenuProps } from '../types'
import { MenuItem } from './item'
import { useRef } from 'react'

export function Menu<T extends object>(props: MenuProps<T>) {
  // Create menu state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = useRef(null)

  const { menuProps } = useMenu(props, state, ref)

  return (
    <ul {...menuProps} ref={ref} className="outline-none focus:outline-none">
      {[...state.collection].map((item) => (
        <MenuItem
          closeOnSelect={props.closeOnSelect}
          key={item.key}
          item={item}
          state={state}
        />
      ))}
    </ul>
  )
}
