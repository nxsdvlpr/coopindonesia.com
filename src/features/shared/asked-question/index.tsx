'use client'

import { Flexbox, Section, SectionTitle } from '@/nui'
import Image from 'next/image'
import { useState } from 'react'
import Card from './components/card'

export default function AskedQuestion() {
  const [isOpen, setIsOpen] = useState('cardOne')

  return (
    <Section>
      <Flexbox align="normal" flow="col" gap="2xl">
        <SectionTitle title="Frequently Asked Question">
          Answers to your common questions.
        </SectionTitle>
        <Flexbox align="normal" justify="between" gap="lg">
          <div className="flex w-full flex-col gap-6">
            <Card
              title="Apa itu COOP Indonesia?"
              id="cardOne"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            >
              LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara
              Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi
              peluang bagi pemuda(i) Indonesia untuk ditempatkan pada
              perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan
              dalam rangka meningkatkan kualitas dan kompetensi diri.
            </Card>
            <Card
              title="Apa saja program COOP Indonesia?"
              id="cardTwo"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            >
              LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara
              Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi
              peluang bagi pemuda(i) Indonesia untuk ditempatkan pada
              perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan
              dalam rangka meningkatkan kualitas dan kompetensi diri.
            </Card>
            <Card
              title="Bagaimana cara mendaftar programnya?"
              id="cardThree"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            >
              LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara
              Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi
              peluang bagi pemuda(i) Indonesia untuk ditempatkan pada
              perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan
              dalam rangka meningkatkan kualitas dan kompetensi diri.
            </Card>
            <Card
              title="Apa saja syarat-syarat yang harus dilengkapi?"
              id="cardFour"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            >
              LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara
              Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi
              peluang bagi pemuda(i) Indonesia untuk ditempatkan pada
              perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan
              dalam rangka meningkatkan kualitas dan kompetensi diri.
            </Card>
            <Card
              title="Berapa biaya yang harus dikeluarkan untuk mengikuti program ini?"
              id="cardFive"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            >
              LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara
              Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi
              peluang bagi pemuda(i) Indonesia untuk ditempatkan pada
              perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan
              dalam rangka meningkatkan kualitas dan kompetensi diri.
            </Card>
          </div>
          <div className="h-[21.875rem] w-[25rem] shrink-0 overflow-hidden">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-full w-full"
              src="/asked-question-image.svg"
              alt="asked-question-image-coop-indonesia"
            />
          </div>
        </Flexbox>
      </Flexbox>
    </Section>
  )
}
