import { Box, Icon, Markdown, Typo } from '@/nui'
import { Listbox } from '@/nui/listbox'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { cardIconStyle, cardStyle } from './card.style'

export type CardProps = {
  id: string
  isOpen: string
  setIsOpen: Dispatch<SetStateAction<string>>
  title?: string
  children?: ReactNode
}

export default function Card({
  id,
  isOpen,
  setIsOpen,
  title,
  children,
}: CardProps) {
  const { wrapper, button } = cardStyle()

  const child = typeof children === 'string'

  return (
    <div className={wrapper()}>
      <Box withBorder rounded="sm" padding="md">
        <Listbox
          isOpen={isOpen === id}
          label={
            <button onClick={() => setIsOpen(id)} className={button()}>
              <Typo
                size="xl"
                fontWeight="bold"
                color={isOpen === id ? 'primary-500' : 'gray-900'}
              >
                {title}
              </Typo>
              <div className={cardIconStyle({ isOpen: isOpen === id })}>
                <Icon icon="lucide:chevron-down" />
              </div>
            </button>
          }
        >
          <div className="pt-4">
            {child ? <Markdown size="lg">{children}</Markdown> : children}
          </div>
        </Listbox>
      </Box>
    </div>
  )
}
