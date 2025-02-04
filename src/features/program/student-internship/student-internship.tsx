import { studentInternshipDataStatic } from '@/app/[locale]/api/student-internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Markdown, Section, SectionTitle } from '@/nui'

export default function StudentInternship() {
  const { info, title, contents } = studentInternshipDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Markdown size="lg">{contents.body}</Markdown>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
