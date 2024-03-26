import { AriaMenuProps, AriaPopoverProps, Placement } from 'react-aria'
import { MenuTriggerProps, OverlayTriggerState } from 'react-stately'

export type MenuButtonProps<T> = AriaMenuProps<T> &
  MenuTriggerProps & {
    label?: string
    placement?: Placement
    closeOnSelect?: boolean
  }

export type MenuProps<T> = {
  closeOnSelect?: boolean
} & AriaMenuProps<T>

export type MenuItemProps = {
  closeOnSelect?: boolean
  item: any
  state: any
}

export type PopoverProps = Omit<AriaPopoverProps, 'popoverRef'> & {
  children: React.ReactNode
  state: OverlayTriggerState
}
