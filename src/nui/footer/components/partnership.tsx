import { Flexbox, Typo } from '@/nui'
import FooterLink from './link'

export default function Partnership() {
  return (
    <Flexbox align="start" flow="col" gap="sm">
      <Typo size="sm" fontWeight="semibold" color="gray-900">
        Partnership
      </Typo>
      <Flexbox align="start" flow="col" gap="xs">
        <FooterLink href="/" src="/partnership/4me.svg">
          Gakken Nihongo 4Me E-learning
        </FooterLink>
        <FooterLink href="/" src="/partnership/re-net.svg">
          Re Net
        </FooterLink>
        <FooterLink href="/" src="/partnership/ntt-docomo.svg">
          NTT Docomo
        </FooterLink>
        <FooterLink href="/" src="/partnership/balittas-malang.svg">
          BALITTAS Malang
        </FooterLink>
      </Flexbox>
    </Flexbox>
  )
}
