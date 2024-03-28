import { Button, Flexbox, Markdown, Typo } from '@/nui'

type CardItemProps = {
  title?: string
  price?: string
  body?: string
}

export default function CardItem({ title, price, body }: CardItemProps) {
  return (
    <div className="mb-14 last:mb-0">
      <Flexbox align={price ? 'center' : 'normal'} flow="col" gap="xs">
        {title && (
          <Typo size="md" fontWeight="bold" color="gray-900">
            {title}
          </Typo>
        )}
        {price && (
          <>
            <Typo size="3xl" fontWeight="bold" color="gray-900">
              <span className="text-sm font-normal">Rp</span> {price}
            </Typo>
            <Button size="sm">Daftar</Button>
          </>
        )}
        {body && (
          <Markdown size="lg" variant="table">
            {body}
          </Markdown>
        )}
      </Flexbox>
    </div>
  )
}
