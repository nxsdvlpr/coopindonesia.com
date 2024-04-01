import { intershipRegistrationDataStatic } from '@/app/api/internship'
import {
  AskedQuestion,
  Banner,
  FeaturedPrograms,
  ThreeCareer,
} from '@/features/shared'

export default function InternshipThreeCareerPath() {
  const { infoThreeCareer } = intershipRegistrationDataStatic
  return (
    <>
      <ThreeCareer sizeTitle="6xl" info={infoThreeCareer} />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
