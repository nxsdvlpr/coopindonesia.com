import { Typo } from '@/nui'

type CardTitleProps = {
  title?: string
  subtitle?: string
}

export default function CardTitle({ title, subtitle }: CardTitleProps) {
  return (
    <div className="mb-14 text-center">
      <Typo size="lg" fontWeight="bold" color="primary-500">
        {title}
      </Typo>
      <Typo size="lg" fontWeight="semibold" color="gray-900">
        {subtitle}
      </Typo>
    </div>
  )
}
