import { Flexbox, Icon, Section, SectionTitle, Typo } from '@/nui'
import Checkbox from '@/nui/checkbox/checkbox'
import Image from 'next/image'

export default function ContactUs() {
  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="Contact Us" title="Contact Us" />
      </Section>
      <Section>
        <div className="flex items-center justify-between gap-16 rounded-lg bg-gray-50 p-16">
          <div className="flex w-full flex-col gap-8 rounded-lg bg-white p-10">
            <div className="grid grid-cols-2 gap-8">
              <input
                placeholder="First name"
                className="rounded-lg border border-gray-200 px-4 py-2.5 outline-none hover:border-primary-500 focus:border-primary-500 focus:outline-none"
              />
              <input
                placeholder="Last name"
                className="rounded-lg border border-gray-200 px-4 py-2.5 outline-none hover:border-primary-500 focus:border-primary-500 focus:outline-none"
              />
            </div>
            <input
              placeholder="you@company.com"
              className="rounded-lg border border-gray-200 px-4 py-2.5 outline-none hover:border-primary-500 focus:border-primary-500 focus:outline-none"
            />
            <textarea
              placeholder="Enter a description..."
              className="rounded-lg border border-gray-200 px-4 py-2.5 outline-none hover:border-primary-500 focus:border-primary-500 focus:outline-none"
            />

            <div className="flex items-center">
              <Checkbox />
              <span className="ml-1 mt-0.5 font-semibold text-primary-600">
                privacy policy.
              </span>
            </div>
            <button className="mt-2 max-w-[17rem] rounded-lg bg-primary-600 px-7 py-2.5 text-sm font-semibold text-white hover:bg-primary-700">
              Send message
            </button>
          </div>
          <div className="max-w-xs shrink-0">
            <Flexbox flow="col">
              <Flexbox flow="col" gap="sm" justify="end" align="end">
                <div className="flex flex-col gap-1 text-end">
                  <Typo size="lg" fontWeight="semibold" color="gray-900">
                    COOP Indonesia
                  </Typo>
                  <Typo color="gray-500">
                    Jl. Ciragil II No.6; RT/RW 001/001 Kel. Rawa Barat, Kec.
                    Kebayoran Baru Jakarta Selatan 12180
                  </Typo>
                </div>
                <Flexbox gap="none" align="end" justify="end" flow="col">
                  <Flexbox align="center" gap="xs">
                    <div className="h-4 w-4 text-gray-500">
                      <Icon size="sm" icon="lucide:phone" />
                    </div>
                    <Typo size="sm" fontWeight="medium" color="gray-500">
                      +62 21 29501010
                    </Typo>
                  </Flexbox>
                  <Flexbox align="center" gap="xs">
                    <div className="h-4 w-4 text-gray-500">
                      <Icon size="sm" icon="lucide:mail" />
                    </div>
                    <Typo size="sm" fontWeight="medium" color="gray-500">
                      mail@coopindonesia.com
                    </Typo>
                  </Flexbox>
                </Flexbox>
              </Flexbox>
              <div className="-mr-14 w-[20.3125rem]">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-full w-full rounded-lg object-cover"
                  src="/contact-us-image.svg"
                  alt="contact-us-image"
                />
              </div>
            </Flexbox>
          </div>
        </div>
      </Section>
    </>
  )
}
