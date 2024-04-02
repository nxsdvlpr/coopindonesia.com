'use client'

import { useResponsive } from '@/utils/use-responsive'
import MenuAboutUs from './components/about-us'
import MenuContactUs from './components/contact-us'
import MenuGallery from './components/gallery'
import MenuHome from './components/home'
import MenuProgram from './components/program'
import MenuPublication from './components/publication'
import { Sidebar } from './components/sidebar'

export function MenuMobile() {
  const { lg } = useResponsive()

  if (lg) return null

  return (
    <div className="lg:hidden">
      <Sidebar>
        {(onClose) => (
          <div className="mt-14 h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-scroll">
            <div className="relative flex flex-col items-end justify-end gap-3 p-4">
              <MenuHome onClose={onClose} />
              <MenuProgram onClose={onClose} />
              <MenuPublication onClose={onClose} />
              <MenuGallery onClose={onClose} />
              <MenuAboutUs onClose={onClose} />
              <MenuContactUs onClose={onClose} />
            </div>
          </div>
        )}
      </Sidebar>
    </div>
  )
}
