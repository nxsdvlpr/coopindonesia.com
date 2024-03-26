'use client'

import { useRef } from 'react'
import { useButton, useMenuTrigger } from 'react-aria'
import { useMenuTriggerState } from 'react-stately'
import { Icon } from '..'
import { Menu } from './components/menu'
import { Popover } from './components/popover'
import { MenuButtonProps } from './types'

export function MenuButton<T extends object>(props: MenuButtonProps<T>) {
  const state = useMenuTriggerState(props)

  // Get props for the button and menu elements
  const ref = useRef<HTMLButtonElement>(null)

  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref)

  const { buttonProps } = useButton(menuTriggerProps, ref)

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="flex items-center gap-2 text-base font-semibold text-gray-900 outline-none focus:outline-none"
        {...buttonProps}
      >
        {props.label}
        <div
          className={
            state.isOpen
              ? 'rotate-180 pt-1 text-gray-500 duration-200 ease-in-out'
              : 'rotate-0 pt-1 text-gray-500 duration-200 ease-in-out'
          }
        >
          <Icon icon="lucide:chevron-down" />
        </div>
      </button>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={ref}
          placement={props.placement ?? 'bottom'}
        >
          <Menu closeOnSelect={props.closeOnSelect} {...props} {...menuProps} />
        </Popover>
      )}
    </>
  )
}
