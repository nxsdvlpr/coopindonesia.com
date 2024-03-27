import { Icon, Typo } from '@/nui'
import NextLink from 'next/link'

type LinkProps = {
  icon: string
  title: string
  href: string
  onClick?: () => void
}

export default function Link({ icon, title, href, onClick }: LinkProps) {
  return (
    <NextLink href={href} onClick={onClick}>
      <div className="flex w-full items-center gap-x-3 p-4 text-gray-500 hover:bg-primary-25">
        <div className="rounded bg-primary-50 p-1.5 text-primary-600">
          <Icon size="xs" icon={icon} />
        </div>
        <Typo size="md" fontWeight="semibold" color="primary-500">
          {title}
        </Typo>
      </div>
    </NextLink>
  )
}
