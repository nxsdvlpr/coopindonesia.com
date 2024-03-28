import { Box, Flexbox, Typo } from '@/nui'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

type ContactInfoAboutProps = {
  src?: string | StaticImageData
  alt?: string
  name?: string
  position?: string
  children?: ReactNode
}

export default function OrganizationStructureContactInfo({
  src,
  alt = 'image-default',
  name,
  position,
  children,
}: ContactInfoAboutProps) {
  if (!name) return null

  return (
    <div className="mx-auto shrink-0 py-3 lg:min-w-[15rem]">
      <Box padding="xs">
        <Flexbox flow="col" gap="xs">
          <div className="h-auto w-[4.5rem] shrink-0 rounded-full border border-gray-200 bg-gray-50 p-4 text-gray-500">
            {src ? (
              <Image
                height="0"
                width="0"
                sizes="100vw"
                className="h-auto w-full"
                src={src}
                alt={alt}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            )}
          </div>
          <div className="text-center">
            <Typo size="lg" fontWeight="semibold" color="gray-900">
              {name}
            </Typo>
            <Typo color="gray-400">{position}</Typo>
            {children && (
              <div className="max-w-[18.75rem]">
                <Typo size="md" color="gray-500">
                  {children}
                </Typo>
              </div>
            )}
          </div>
        </Flexbox>
      </Box>
    </div>
  )
}
