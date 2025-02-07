import { Button, Checkbox, Input, Textarea } from '@/nui'
import { useTranslations } from 'next-intl'
import { contactUsFormStyle } from './form.style'

export default function ContactUsForm() {
  const t = useTranslations()
  const { wrapper, stack } = contactUsFormStyle()

  return (
    <div className={wrapper()}>
      <div className={stack()}>
        <Input placeholder={t('form.firstName')} />
        <Input placeholder={t('form.lastName')} />
      </div>
      <Input placeholder={t('form.email')} />
      <Textarea placeholder={t('form.desc')} />
      <div className="flex items-center">
        <Checkbox label={t('form.privacy')} />
        <span className="ml-1 mt-0.5 font-semibold text-primary-500">
          {t('form.policy')}
        </span>
      </div>
      <Button rounded="lg" size="sm" wider="md">
        {t('form.message')}
      </Button>
    </div>
  )
}
