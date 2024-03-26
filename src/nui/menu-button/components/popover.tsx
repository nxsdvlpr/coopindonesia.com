import { DismissButton, Overlay, usePopover } from 'react-aria'
import { PopoverProps } from '../types'
import { useRef } from 'react'

export function Popover(props: PopoverProps) {
  let ref = useRef<HTMLDivElement>(null)

  let { state, children } = props

  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
    },
    state
  )

  return (
    <Overlay>
      <div {...underlayProps} className="fixed inset-0" />
      <div
        {...popoverProps}
        ref={ref}
        className="z-10 mt-4 rounded-lg border border-gray-200 bg-white p-4"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}
