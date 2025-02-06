import { aboutOrganizationStructure } from '@/app/[locale]/api/about'
import { Field, Fields, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import ContactInfo from './contact-info'

export default function Mice() {
  const t = useTranslations()
  const { title, subtitle, name, src, position, staffProduct } =
    aboutOrganizationStructure.MICE

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          {t('aboutPage.aboutOrganizationStructure.MICE.title')}
        </Typo>
        <Typo size="md" color="gray-900" fontWeight="semibold">
          {t('aboutPage.aboutOrganizationStructure.MICE.subtitle')}
        </Typo>
      </div>
      <div className="flex flex-col gap-8 lg:items-center">
        <ContactInfo src={src} name={name} position={position} />
        <Fields
          label={t(
            'aboutPage.aboutOrganizationStructure.MICE.staffProduct.title'
          )}
        >
          {t
            .raw(
              'aboutPage.aboutOrganizationStructure.MICE.staffProduct.staffs'
            )
            .map((item: any, index: number) => (
              <Field key={index}>{item}</Field>
            ))}
        </Fields>
      </div>
    </>
  )
}
