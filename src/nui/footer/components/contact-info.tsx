import { Flexbox, Icon, ImageNui, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function ContactInfo() {
  const t = useTranslations()
  return (
    <div className="max-w-2xl">
      <div className="flex flex-col gap-x-8 gap-y-6 lg:flex-row">
        <div className="h-[3.75rem] w-[3.75rem] shrink-0">
          <ImageNui src="/logo.png" alt="hero-image-coop-indonesia" />
        </div>
        <div className="grid gap-x-8 gap-y-6 lg:grid-cols-2">
          <Flexbox gap="lg" align="start" flow="col">
            <Flexbox gap="2xs" align="start" flow="col">
              <Typo size="md" fontWeight="semibold" color="gray-900">
                {t('sharedContent.contactInfo.label')}
              </Typo>
              <Typo size="sm" color="gray-900">
                {t('sharedContent.contactInfo.address')}
              </Typo>
            </Flexbox>
            <Flexbox gap="2xs" align="start" flow="col">
              <Flexbox align="center" gap="xs">
                <div className="h-4 w-4 text-gray-500">
                  <Icon size="sm" icon="lucide:phone" />
                </div>
                <Typo size="sm" fontWeight="medium" color="gray-900">
                  {t('sharedContent.contactInfo.phone')}
                </Typo>
              </Flexbox>
              <Flexbox align="center" gap="xs">
                <div className="h-4 w-4 text-gray-500">
                  <Icon size="sm" icon="lucide:mail" />
                </div>
                <Typo size="sm" fontWeight="medium" color="gray-900">
                  {t('sharedContent.contactInfo.email')}{' '}
                </Typo>
              </Flexbox>
            </Flexbox>
          </Flexbox>
          <Flexbox gap="2xs" align="start" flow="col">
            <Typo size="md" fontWeight="semibold" color="gray-900">
              {t('sharedContent.contactTrainingCenter.label')}
            </Typo>
            <Typo size="sm" color="gray-900">
              {t('sharedContent.contactTrainingCenter.address')}
            </Typo>
          </Flexbox>
        </div>
      </div>
    </div>
  )
}
