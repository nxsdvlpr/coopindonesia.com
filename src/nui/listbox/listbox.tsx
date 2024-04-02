import { motion } from 'framer-motion'
import { listboxStyle, variantListbox } from './listbox.style'
import { ListboxProps } from './types'

export default function Listbox({ label, isOpen, children }: ListboxProps) {
  return (
    <div>
      {label}
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        className={listboxStyle()}
        variants={variantListbox}
      >
        {children}
      </motion.div>
    </div>
  )
}
