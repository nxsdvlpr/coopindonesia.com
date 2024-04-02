import { Variants } from 'framer-motion'

export const contentVariants: Variants = {
  open: {
    opacity: 1,
    translateX: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
