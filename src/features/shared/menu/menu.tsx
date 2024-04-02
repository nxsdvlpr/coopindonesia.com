import { menuDataStatic } from '@/app/api/menu'
import { Section } from '@/nui'
import Link from 'next/link'

export default function Menu() {
  const { about } = menuDataStatic

  return (
    <Section>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {about.map((item, index) => (
          <Link
            prefetch
            key={index}
            href={item.link}
            className={
              'rounded-full bg-gray-100 px-[1.125rem] py-2.5 text-gray-700 active:bg-primary-100'
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </Section>
  )
}
