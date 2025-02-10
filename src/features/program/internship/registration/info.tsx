import { Flexbox, Icon, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import { infoStyle } from './info.style'

export default function Info() {
  const t = useTranslations()
  const { wrapper, main, icon } = infoStyle()

  return (
    <div className={wrapper()}>
      <Typo size="lg">{t('internshipRegistration.contactInfo.title')}</Typo>
      <div className={main()}>
        {t
          .raw('internshipRegistration.contactInfo.contacts')
          .map((contact: any, index: number) => (
            <Flexbox gap="2xs" key={index}>
              <div className={icon()}>
                <Icon size="xs" icon={contact.icon} />
              </div>
              <Typo size="lg">
                {contact.admin} : <strong>{contact.phone}</strong>
              </Typo>
            </Flexbox>
          ))}
      </div>
    </div>
  )
}
