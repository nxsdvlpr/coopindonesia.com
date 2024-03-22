import { Flexbox } from '../ui'
import ContactInfo from './components/contact-info'
import Copyright from './components/copyright'
import FollowUs from './components/follow-us'
import Partnership from './components/partnership'

export function Footer() {
  return (
    <div className="border-t border-gray-200">
      <div className="m-auto flex max-w-[1200px] flex-col gap-16 divide-y divide-gray-200 pb-12 pt-16">
        <Flexbox justify="between">
          <ContactInfo />
          <Flexbox align="start" gap="xl">
            <FollowUs />
            <Partnership />
          </Flexbox>
        </Flexbox>
        <Copyright />
      </div>
    </div>
  )
}
