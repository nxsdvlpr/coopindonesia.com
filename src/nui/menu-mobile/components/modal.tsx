import { ReactNode, useRef } from 'react'
import { Overlay, useModalOverlay } from 'react-aria'
import { OverlayTriggerState } from 'react-stately'

type ModalProps = {
  state: OverlayTriggerState
  children?: ReactNode
}

export function Modal({ state, children, ...props }: ModalProps) {
  const ref = useRef(null)

  const { modalProps, underlayProps } = useModalOverlay(props, state, ref)

  return (
    <Overlay>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-[100] bg-white"
        {...underlayProps}
      >
        <div {...modalProps} ref={ref}>
          {children}
        </div>
      </div>
    </Overlay>
  )
}
