import { Box, Flexbox, ImageNui, Section, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type ExploreMoreGalleriesProps = {
  hideWorkVisit?: boolean
  hideCollaboration?: boolean
  hideInternshipActivities?: boolean
  hideTrainingCenter?: boolean
}

export default function ExploreMoreGalleries({
  hideWorkVisit,
  hideCollaboration,
  hideInternshipActivities,
  hideTrainingCenter,
}: ExploreMoreGalleriesProps) {
  const t = useTranslations()
  const hideValues = [
    hideWorkVisit,
    hideCollaboration,
    hideInternshipActivities,
    hideTrainingCenter,
  ]

  const updatedGalleries = t.raw('exploreMoreGalleries.galleries')

  if (Array.isArray(updatedGalleries)) {
    updatedGalleries.forEach((gallery, index) => {
      gallery.hide = hideValues[index]
    })
  }

  return (
    <Section variant="gray">
      <Flexbox flow="col" gap="2xl">
        <Typo size="5xl" color="gray-900" fontWeight="semibold">
          {t('exploreMoreGalleries.label')}
        </Typo>
        <div className="flex flex-col gap-8 lg:flex-row">
          {updatedGalleries.map(
            (gallery: any, index: number) =>
              gallery.hide !== true && (
                <Link key={index} href={gallery.href ?? ''}>
                  <Box withBorder>
                    <Flexbox flow="col" gap="sm">
                      <div className="aspect-video w-full lg:max-w-[19.6875rem]">
                        <ImageNui src={gallery.src} alt={gallery.alt} />
                      </div>
                      <Typo size="2xl" color="gray-900" fontWeight="bold">
                        {gallery.title}
                      </Typo>
                    </Flexbox>
                  </Box>
                </Link>
              )
          )}
        </div>
      </Flexbox>
    </Section>
  )
}
