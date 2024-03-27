import { Flexbox } from '../flexbox'
import ContactInfo from './components/contact-info'
import Copyright from './components/copyright'
import FollowUs from './components/follow-us'
import Partnership from './components/partnership'
import { footerStyle } from './footer.style'

export function Footer() {
  const { wrapper, container, main } = footerStyle()

  return (
    <div className={wrapper()}>
      <div className={container()}>
        <div className={main()}>
          <ContactInfo />
          <Flexbox align="start" gap="xl">
            <FollowUs />
            <Partnership />
          </Flexbox>
        </div>
        <Copyright />
      </div>
    </div>
  )
}
