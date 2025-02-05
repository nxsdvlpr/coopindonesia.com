import { aboutOrganizationStructure } from '@/app/[locale]/api/about'
import { Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import ContactInfo from './contact-info'

export default function RepresentativeOffice() {
  const t = useTranslations()
  const { title, members } = aboutOrganizationStructure.representativeOffice

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="flex flex-col gap-12 text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          {t('aboutPage.aboutOrganizationStructure.representativeOffice.title')}
        </Typo>
        <ContactInfo
          src={
            t.raw(
              'aboutPage.aboutOrganizationStructure.representativeOffice.members'
            )[0].src
          }
          name={
            t.raw(
              'aboutPage.aboutOrganizationStructure.representativeOffice.members'
            )[0].name
          }
          position={
            t.raw(
              'aboutPage.aboutOrganizationStructure.representativeOffice.members'
            )[0].position
          }
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {t
          .raw(
            'aboutPage.aboutOrganizationStructure.representativeOffice.members'
          )
          .slice(1, 5)
          .map((member: any, index: number) => (
            <ContactInfo
              key={index}
              name={member.name}
              position={member.position}
              src={member.src}
            />
          ))}
      </div>
      <ContactInfo
        src={
          t.raw(
            'aboutPage.aboutOrganizationStructure.representativeOffice.members'
          )[5].src
        }
        name={
          t.raw(
            'aboutPage.aboutOrganizationStructure.representativeOffice.members'
          )[5].name
        }
        position={
          t.raw(
            'aboutPage.aboutOrganizationStructure.representativeOffice.members'
          )[5].position
        }
      >
        {
          t.raw(
            'aboutPage.aboutOrganizationStructure.representativeOffice.members'
          )[5].additionalInfo
        }
      </ContactInfo>
    </>
  )
}
