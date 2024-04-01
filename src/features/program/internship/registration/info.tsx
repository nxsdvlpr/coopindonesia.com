import { intershipRegistrationDataStatic } from '@/app/api/internship'
import { Flexbox, Icon, Typo } from '@/nui'
import { infoStyle } from './info.style'

export default function Info() {
  const { wrapper, main, icon } = infoStyle()

  const { title, contacts } = intershipRegistrationDataStatic.contactInfo

  return (
    <div className={wrapper()}>
      <Typo size="lg">{title}</Typo>
      <div className={main()}>
        {contacts.map((contact, index) => (
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
