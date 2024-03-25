import { tv } from 'tailwind-variants'

export const markdownStyle = tv({
  base: 'prose',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
    },
    variant: {
      table: 'markdown-nui-theme-table',
      normal: 'markdown-nui-theme',
    },
  },
})
