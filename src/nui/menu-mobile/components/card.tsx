import { Typo } from '@/nui'
import { ReactNode } from 'react'

type CardProps = {
  title?: string
  children?: ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="w-full divide-y rounded-lg border border-gray-200">
      <div className="p-4">
        <Typo size="md" fontWeight="semibold" color="gray-900">
          {title}
        </Typo>
      </div>
      <div>{children}</div>
    </div>
  )
}
