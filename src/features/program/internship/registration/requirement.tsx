import { intershipRegistrationDataStatic } from '@/app/[locale]/api/internship'
import { Flexbox, Markdown, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function Requirement() {
  const t = useTranslations()
  const { title, body } = intershipRegistrationDataStatic.requirement

  return (
    <Flexbox flow="col" align="start" gap="none">
      <Typo size="2xl" fontWeight="bold" color="gray-900">
        {t('internshipRegistration.requirement.title')}
      </Typo>
      <Markdown size="lg">
        {t('internshipRegistration.requirement.body')}
      </Markdown>
    </Flexbox>
  )
}
