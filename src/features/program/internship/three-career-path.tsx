import {
  AskedQuestion,
  Banner,
  FeaturedPrograms,
  ThreeCareer,
} from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { useTranslations } from 'next-intl'

export default function InternshipThreeCareerPath() {
  const t = useTranslations()
  return (
    <>
      <ThreeCareer sizeTitle="6xl" info={t('internship.info')} />
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
