import { useDimensions } from '@/utils/use-dimension'
import { motion, useCycle } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import { sidebar, sidebarStyle } from './sidebar.style'
import { Content } from './sidebar/content'
import { Toggle } from './sidebar/toggle'

export type SidebarProps = {
  children?: (onClose: () => void) => ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const containerRef = useRef(null)

  const { width } = useDimensions(containerRef)

  const onClose = () => toggleOpen()

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={width}
      ref={containerRef}
    >
      <motion.div className={sidebarStyle()} variants={sidebar}>
        <Content>{children && children(onClose)}</Content>
      </motion.div>
      <Toggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
