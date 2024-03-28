import { Flexbox, Typo } from '@/nui'
import FooterLink from './link'

export default function FollowUs() {
  return (
    <div className="lg:w-[9.6875rem]">
      <Flexbox align="start" flow="col" gap="sm">
        <Typo size="md" fontWeight="semibold" color="gray-900">
          Follow Us
        </Typo>
        <Flexbox align="start" flow="col" gap="xs">
          <FooterLink
            href="https://www.facebook.com/lpkcoopindonesia/"
            src="/follow-us/facebook.svg"
          >
            Facebook
          </FooterLink>
          <FooterLink
            href="https://twitter.com/coop_indonesia"
            src="/follow-us/twitter.svg"
          >
            Twitter
          </FooterLink>
          <FooterLink
            href="https://www.youtube.com/@coopindonesia"
            src="/follow-us/youtube.svg"
          >
            Youtube
          </FooterLink>
          <FooterLink
            href="https://www.instagram.com/coopindonesia/"
            src="/follow-us/instagram.svg"
          >
            Instagram
          </FooterLink>
        </Flexbox>
      </Flexbox>
    </div>
  )
}
