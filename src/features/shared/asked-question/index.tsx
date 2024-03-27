'use client'

import { Flexbox, Section, SectionTitle } from '@/nui'
import Image from 'next/image'
import { useState } from 'react'
import Card from './components/card'

export default function AskedQuestion() {
  const [isOpen, setIsOpen] = useState('cardOne')

  const askedQuestion = {
    title: 'Frequently Asked Question',
    subtitle: 'Answers to your common questions.',
    questions: [
      {
        title: 'Apa itu COOP Indonesia?',
        id: 'cardOne',
        content:
          'LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.',
      },
      {
        title: 'Apa saja program COOP Indonesia?',
        id: 'cardTwo',
        content:
          'LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.',
      },
      {
        title: 'Bagaimana cara mendaftar programnya?',
        id: 'cardThree',
        content:
          'LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.',
      },
      {
        title: 'Apa saja syarat-syarat yang harus dilengkapi?',
        id: 'cardFour',
        content:
          'LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.',
      },
      {
        title:
          'Berapa biaya yang harus dikeluarkan untuk mengikuti program ini?',
        id: 'cardFive',
        content:
          'LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.',
      },
    ],
    image: {
      src: '/asked-question-image.svg',
      alt: 'asked-question-image-coop-indonesia',
    },
  }

  const { title, subtitle, questions, image } = askedQuestion

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
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-full w-full"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </div>
      </Flexbox>
    </Section>
  )
}
