import { intershipRegistrationDataStatic } from '@/app/[locale]/api/internship'
import { Flexbox, Icon, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function HowToRegistration() {
  const t = useTranslations()
  const { title, titleStep, steps } =
    intershipRegistrationDataStatic.howToRegistration

  return (
    <Flexbox flow="col" align="normal" gap="xs">
      <Typo color="gray-900" size="2xl" fontWeight="bold">
        {t('internshipRegistration.howToRegistration.title')}
      </Typo>
      <div className="flex flex-col gap-3 px-4">
        <Typo size="lg" color="gray-700">
          {t('internshipRegistration.howToRegistration.titleStep')}
        </Typo>
        <Flexbox flow="col" gap="2xs" align="normal">
          {t
            .raw('internshipRegistration.howToRegistration.steps')
            .map((step: any, index: number) => (
              <Flexbox key={index} align="start" gap="2xs">
                <div className="pt-1 text-gray-700">
                  <Icon size="sm" icon={step.icon} />
                </div>
                <div className="flex flex-wrap gap-x-1">
                  <Typo size="lg">{step.label}</Typo>
                  <Typo
                    size="lg"
                    color={
                      step.label === 'E-mail:' ? 'primary-700' : 'gray-900'
                    }
                    fontWeight="semibold"
                  >
                    {step.content}
                  </Typo>
                </div>
              </Flexbox>
            ))}
        </Flexbox>
      </div>
    </Flexbox>
  )
}
