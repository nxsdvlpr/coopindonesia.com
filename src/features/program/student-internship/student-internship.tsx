import { studentInternshipDataStatic } from '@/app/api/student-internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'

export default function StudentInternship() {
  const { info, title, contents } = studentInternshipDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox align="normal" flow="col" gap="2xl">
          <Flexbox flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {contents.title}
            </Typo>
            <Markdown size="lg">{contents.body}</Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
