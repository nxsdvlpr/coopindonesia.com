import { Flexbox, ImageNui, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function Partnership() {
  const t = useTranslations()
  const partnerships = [
    {
      src: '/sponsor/fursato-logo.png',
      alt: 'fursato-logo-coop-indonesia',
    },
    {
      src: '/sponsor/coop-global.png',
      alt: 'coop-global-logo-indonesia',
    },
    {
      src: '/sponsor/coop-japan-logo.png',
      alt: 'coop-japan-logo-coop-indonesia',
    },
    {
      src: '/sponsor/other-sponsor-logo.png',
      alt: 'other-sponsor-logo-coop-indonesia',
    },
    {
      src: '/sponsor/igs-logo.png',
      alt: 'igs-logo-coop-indonesia',
    },
  ]

  return (
    <Flexbox align="start" flow="col" gap="sm">
      <Typo size="md" fontWeight="semibold" color="gray-900">
        {t('sharedContent.partnership.label')}
      </Typo>
      <Flexbox align="start" gap="xs">
        {partnerships.map((partnership, index) => (
          <ImageNui
            className="h-5 w-full object-scale-down grayscale hover:grayscale-0"
            key={index}
            src={partnership.src}
            alt={partnership.alt}
          />
        ))}
      </Flexbox>
    </Flexbox>
  )
}
