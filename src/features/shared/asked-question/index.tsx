'use client'

import { askedQuestionDataStatic } from '@/app/api/asked-question'
import { Flexbox, ImageNui, Section, SectionTitle } from '@/nui'
import { useState } from 'react'
import Card from './components/card'

export default function AskedQuestion() {
  const [isOpen, setIsOpen] = useState('cardOne')

  const { title, subtitle, questions, image } = askedQuestionDataStatic

  return (
    <Section>
      <Flexbox align="normal" flow="col" gap="2xl">
        <SectionTitle title={title}>{subtitle}</SectionTitle>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex w-full flex-col gap-6">
            {questions.map((question, index) => (
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
            <ImageNui src={image.src} alt={image.alt} />
          </div>
        </div>
      </Flexbox>
    </Section>
  )
}
