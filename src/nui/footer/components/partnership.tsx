import { Flexbox, Typo } from '@/nui'
import FooterLink from './link'

export default function Partnership() {
  const partnerships = [
    {
      name: 'Gakken Nihongo 4Me E-learning',
      href: 'https://gakken-nihongo4me.jp/',
      src: '/partnership/4me.svg',
    },
    {
      name: 'Re Net',
      href: 'https://corp.renet.jp/',
      src: '/partnership/re-net.svg',
    },
    {
      name: 'NTT Docomo',
      href: 'https://www.ntt.com/business/lp/topgun.html?rdl=1',
      src: '/partnership/ntt-docomo.svg',
    },
    {
      name: 'BALITTAS Malang',
      href: 'http://balittas.litbang.pertanian.go.id/index.php',
      src: '/partnership/balittas-malang.svg',
    },
  ]

  return (
    <Flexbox align="start" flow="col" gap="sm">
      <Typo size="md" fontWeight="semibold" color="gray-900">
        Partnership
      </Typo>
      <Flexbox align="start" flow="col" gap="xs">
        {partnerships.map((partnership, index) => (
          <FooterLink key={index} href={partnership.href} src={partnership.src}>
            {partnership.name}
          </FooterLink>
        ))}
      </Flexbox>
    </Flexbox>
  )
}
