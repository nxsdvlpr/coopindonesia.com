import { Box, Flexbox, Icon, Typo } from '@/nui'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { cardStyle } from './card.style'

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
  const { wrapper, button, icon, iconActive, iconBox } = cardStyle()

  return (
    <div className={wrapper()}>
      <Box withBorder rounded="sm" padding="md">
        <Flexbox align="normal" justify="between" flow="col" gap="sm">
          <button onClick={() => setIsOpen(id)} className={button()}>
            <Typo
              size="xl"
              fontWeight="bold"
              color={isOpen === id ? 'primary-500' : 'gray-900'}
            >
              {title}
            </Typo>
            <div className={isOpen === id ? iconActive() : icon()}>
              <div className={iconBox()}>
                <Icon icon="lucide:chevron-down" />
              </div>
            </div>
          </button>
          {isOpen === id && <Typo size="lg">{children}</Typo>}
        </Flexbox>
      </Box>
    </div>
  )
}
