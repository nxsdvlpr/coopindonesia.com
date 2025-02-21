import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import PostInternshipContent from './content'

export default function PostInternshiProselindoTea() {
  const t = useTranslations()

  const items = t
    .raw('postInternshipRoselindoTea.contents.images')
    .map((image: any, i: number) => (
      <ImageNui key={i} src={image.src} alt={image.alt} />
    ))

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('postInternshipRoselindoTea.info')}
          title={t('postInternshipRoselindoTea.title')}
        />
      </Section>
      <PostInternshipContent
        title={t('postInternshipRoselindoTea.contents.title')}
        items={items}
        makdown={t('postInternshipRoselindoTea.contents.body')}
      >
        {t
          .raw('postInternshipRoselindoTea.postContents')
          .map((item: any, index: number) => (
            <Flexbox key={index} flow="col" gap="none" align="normal">
              <Typo size="2xl" fontWeight="bold" color="gray-900">
                {item.title}
              </Typo>
              <Markdown size="lg">{item.content}</Markdown>
              <Flexbox gap="xs">
                {(item.title === 'Ketersediaan' || item.title === '購入方法') &&
                  t
                    .raw('postInternshipRoselindoTea.followUsImages')
                    .map((image: any) => (
                      <div className="w-5">
                        <ImageNui src={image} alt="image-follow-us" />
                      </div>
                    ))}
              </Flexbox>
            </Flexbox>
          ))}
      </PostInternshipContent>
      <Menu showMenuPostInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
