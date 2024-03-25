import { tv } from 'tailwind-variants'

export const markdownStyle = tv({
  base: 'prose max-w-max text-base text-gray-700',
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
