import { intershipRegistrationDataStatic } from '@/app/[locale]/api/internship'
import { Flexbox, Markdown, Typo } from '@/nui'

export default function Requirement() {
  const { title, body } = intershipRegistrationDataStatic.requirement

  return (
    <Flexbox flow="col" align="start" gap="none">
      <Typo size="2xl" fontWeight="bold" color="gray-900">
        {title}
      </Typo>
      <Markdown size="lg">{body}</Markdown>
    </Flexbox>
  )
}
