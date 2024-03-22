import { Box, Flexbox, Typo } from '@/nui'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import ChevronDownIcon from '../../../../../public/icon/chevron-down'

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
  return (
    <div className="h-fit w-full">
      <Box withBorder rounded="sm" padding="md">
        <Flexbox align="normal" justify="between" flow="col" gap="sm">
          <button
            onClick={() => setIsOpen(id)}
            className="flex items-center justify-between gap-3 hover:text-primary-500"
          >
            <Typo
              size="xl"
              fontWeight="bold"
              color={isOpen === id ? 'primary-500' : 'gray-900'}
            >
              {title}
            </Typo>
            <div
              className={
                isOpen === id
                  ? 'h-fit w-fit rotate-180 text-gray-900 duration-200 ease-in-out'
                  : 'h-fit w-fit text-gray-900 duration-200 ease-in-out'
              }
            >
              <div className="flex h-6 w-6 items-center justify-center">
                <ChevronDownIcon />
              </div>
            </div>
          </button>
          {isOpen === id && <Typo size="md">{children}</Typo>}
        </Flexbox>
      </Box>
    </div>
  )
}
