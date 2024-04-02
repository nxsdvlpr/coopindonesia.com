import { menuDataStatic } from '@/app/api/menu'
import { Flexbox, Typo } from '@/nui'
import Image from 'next/image'
import Link from 'next/link'

type MenuProgramSchoolProps = {
  onclose?: () => void
}

export default function MenuProgramSchool({ onclose }: MenuProgramSchoolProps) {
  const { schools } = menuDataStatic.program

  return (
    <div className="border-l border-primary-50 p-8 lg:w-[43rem]">
      <Link
        href={schools[0].href}
        onClick={onclose}
        className="flex flex-col gap-y-3 rounded-lg p-4 hover:bg-primary-25"
      >
        <Typo size="lg" color="primary-600" fontWeight="bold">
          {schools[0].label}
        </Typo>
        <Typo>{schools[0].body}</Typo>
      </Link>
      <Flexbox align="normal" justify="between">
        {schools.slice(1).map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={onclose}
            className="flex w-1/2 flex-col gap-y-3 rounded-lg p-4 hover:bg-primary-25"
          >
            <Flexbox gap="xs">
              {item.image?.src && (
                <div className="h-8 w-4">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto w-full"
                    src={item.image?.src}
                    alt={item.image?.alt ?? 'logo'}
                  />
                </div>
              )}
              <Typo size="lg" color="primary-600" fontWeight="bold">
                {item.label}
              </Typo>
            </Flexbox>
            <Typo>{item.body}</Typo>
          </Link>
        ))}
      </Flexbox>
    </div>
  )
}
