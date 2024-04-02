import { Box, Flexbox, Section, Typo } from '@/nui'
import Image from 'next/image'
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
  const galleries = [
    {
      href: '/gallery/work-visit',
      src: '/gallery/explore-more-galleries-4.svg',
      alt: 'explore-more-galleries-4-coop-indonesia',
      title: 'Kunjungan Kerja',
      hide: hideWorkVisit,
    },
    {
      href: '/gallery/collaboration',
      src: '/gallery/explore-more-galleries-1.svg',
      alt: 'explore-more-galleries-1-coop-indonesia',
      title: 'Kerjasama',
      hide: hideCollaboration,
    },
    {
      href: '/gallery/internship-activities',
      src: '/gallery/explore-more-galleries-2.svg',
      alt: 'explore-more-galleries-2-coop-indonesia',
      title: 'Kegiatan Magang',
      hide: hideInternshipActivities,
    },
    {
      href: '/gallery/training-center',
      src: '/gallery/explore-more-galleries-3.svg',
      alt: 'explore-more-galleries-3-coop-indonesia',
      title: 'Pusdiklat Magang',
      hide: hideTrainingCenter,
    },
  ]

  return (
    <Section variant="gray">
      <Flexbox flow="col" gap="2xl">
        <Typo size="5xl" color="gray-900" fontWeight="semibold">
          Explore More Galleries
        </Typo>
        <div className="flex flex-col gap-8 lg:flex-row">
          {galleries.map(
            (gallery, index) =>
              !gallery.hide && (
                <Link key={index} href={gallery.href}>
                  <Box withBorder>
                    <Flexbox flow="col" gap="sm">
                      <div className="aspect-video w-full lg:max-w-[19.6875rem]">
                        <Image
                          width="0"
                          height="0"
                          sizes="100vw"
                          className="h-auto w-full"
                          src={gallery.src}
                          alt={gallery.alt}
                        />
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
