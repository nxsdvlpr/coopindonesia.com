import { Flexbox, Icon, Typo } from '@/nui'
import { infoStyle } from './info.style'

export default function Info() {
  const info = {
    title:
      'Pertanyaan lebih lanjut seputar program magang di LPK COOP Indonesia, silahkan menghubungi:',
    contacts: [
      {
        admin: 'Admin #1',
        phone: '0821-4081-3864',
        icon: 'mdi:whatsapp',
      },
      {
        admin: 'Admin #2',
        phone: '0822-3238-8961',
        icon: 'mdi:whatsapp',
      },
    ],
  }

  const { wrapper, main, icon } = infoStyle()

  const { title, contacts } = info

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
