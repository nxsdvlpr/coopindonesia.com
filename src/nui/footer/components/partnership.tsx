import { Flexbox, Typo } from '@/nui'
import FooterLink from './link'

export default function Partnership() {
  return (
    <Flexbox align="start" flow="col" gap="sm">
      <Typo size="sm" fontWeight="semibold" color="gray-900">
        Partnership
      </Typo>
      <Flexbox align="start" flow="col" gap="xs">
        <FooterLink
          href="https://gakken-nihongo4me.jp/"
          src="/partnership/4me.svg"
        >
          Gakken Nihongo 4Me E-learning
        </FooterLink>
        <FooterLink href="https://corp.renet.jp/" src="/partnership/re-net.svg">
          Re Net
        </FooterLink>
        <FooterLink
          href="https://www.ntt.com/business/lp/topgun.html?rdl=1"
          src="/partnership/ntt-docomo.svg"
        >
          NTT Docomo
        </FooterLink>
        <FooterLink
          href="http://balittas.litbang.pertanian.go.id/index.php"
          src="/partnership/balittas-malang.svg"
        >
          BALITTAS Malang
        </FooterLink>
      </Flexbox>
    </Flexbox>
  )
}
