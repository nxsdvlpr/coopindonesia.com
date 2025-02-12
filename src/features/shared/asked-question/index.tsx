'use client'

import { Flexbox, ImageNui, Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Card from './components/card'

export default function AskedQuestion() {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState('cardOne')

  return (
    <Section>
      <Flexbox align="normal" flow="col" gap="2xl">
        <SectionTitle title={t('sharedContent.askedQuestion.title')}>
          {t('sharedContent.askedQuestion.subtitle')}
        </SectionTitle>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex w-full flex-col gap-6">
            {t
              .raw('sharedContent.askedQuestion.questions')
              .map((question: any, index: number) => (
                <Card
                  key={index}
                  id={question.id}
                  title={question.title}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                >
                  {question.content}
                </Card>
              ))}
          </div>
          <div className="shrink-0 overflow-hidden lg:h-[21.875rem] lg:w-[25rem]">
            <ImageNui
              src={t('sharedContent.askedQuestion.image.src')}
              alt={t('sharedContent.askedQuestion.image.alt')}
            />
          </div>
        </div>
      </Flexbox>
    </Section>
  )
}
