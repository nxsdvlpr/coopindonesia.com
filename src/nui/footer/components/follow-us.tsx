import { Flexbox, Typo } from '@/nui'
import FooterLink from './link'

export default function FollowUs() {
  return (
    <div className="w-[155px]">
      <Flexbox align="start" flow="col" gap="sm">
        <Typo size="sm" fontWeight="semibold" color="gray-900">
          Follow Us
        </Typo>
        <Flexbox align="start" flow="col" gap="xs">
          <FooterLink href="/" src="/follow-us/facebook.svg">
            Facebook
          </FooterLink>
          <FooterLink href="/" src="/follow-us/twitter.svg">
            Twitter
          </FooterLink>
          <FooterLink href="/" src="/follow-us/youtube.svg">
            Youtube
          </FooterLink>
          <FooterLink href="/" src="/follow-us/instagram.svg">
            Instagram
          </FooterLink>
        </Flexbox>
      </Flexbox>
    </div>
  )
}
