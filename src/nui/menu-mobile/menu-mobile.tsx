'use client'

import { Icon } from '@/nui'
import { useRef } from 'react'
import { useButton, useOverlayTrigger } from 'react-aria'
import { useOverlayTriggerState } from 'react-stately'
import MenuAboutUs from './components/about-us'
import MenuContactUs from './components/contact-us'
import MenuGallery from './components/gallery'
import MenuHome from './components/home'
import { Modal } from './components/modal'
import MenuProgram from './components/program'
import MenuPublication from './components/publication'

export function MenuMobile() {
  const ref = useRef<HTMLButtonElement>(null)

  const state = useOverlayTriggerState({})

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state
  )

  const { buttonProps } = useButton(triggerProps, ref)

  const onClose = () => state.setOpen(false)

  return (
    <>
      <button
        {...buttonProps}
        className="block rounded-lg p-2 hover:bg-gray-100 lg:hidden"
      >
        <Icon size="md" icon="lucide:align-left" />
      </button>
      {state.isOpen && (
        <Modal state={state}>
          <div className="h-screen overflow-scroll" {...overlayProps}>
            <div className="relative flex flex-col items-end justify-end gap-3 p-4">
              <button
                onClick={onClose}
                className="block w-fit rounded-lg p-2 hover:bg-gray-100 lg:hidden"
              >
                <Icon size="md" icon="lucide:x" />
              </button>
              <MenuHome onClose={onClose} />
              <MenuProgram onClose={onClose} />
              <MenuPublication onClose={onClose} />
              <MenuGallery onClose={onClose} />
              <MenuAboutUs onClose={onClose} />
              <MenuContactUs onClose={onClose} />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
