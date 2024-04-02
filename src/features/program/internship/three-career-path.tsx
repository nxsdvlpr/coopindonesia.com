import { intershipRegistrationDataStatic } from '@/app/api/internship'
import {
  AskedQuestion,
  Banner,
  FeaturedPrograms,
  ThreeCareer,
} from '@/features/shared'
import { Menu } from '@/features/shared/menu'

export default function InternshipThreeCareerPath() {
  const { infoThreeCareer } = intershipRegistrationDataStatic
  return (
    <>
      <ThreeCareer sizeTitle="6xl" info={infoThreeCareer} />
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
