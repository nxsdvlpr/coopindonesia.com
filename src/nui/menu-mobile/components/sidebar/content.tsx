import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { contentVariants } from './content.style'

export type ContentProps = {
  children?: ReactNode
}

export const Content = ({ children }: ContentProps) => (
  <motion.ul variants={contentVariants}>{children}</motion.ul>
)
