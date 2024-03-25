import AskedQuestion from '@/features/shared/asked-question'
import Banner from '@/features/shared/banner'
import FeaturedPrograms from '@/features/shared/featured-programs'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'

export default function OrganizationStructurePage() {
  return (
    <>
      <Section>
        <SectionTitle info="ABOUT US" title="Organization Structure">
          LPK COOP Indonesia memiliki jaringan organisasi di Indonesia dan juga
          kantor perwakilan di Jepang.
        </SectionTitle>
      </Section>
      <Section>
        <div className="m-auto flex max-w-[960px] items-center justify-between px-[30px]">
          <Flexbox flow="col" gap="xs">
            <div className="h-auto- w-[72px] shrink-0 rounded-full border border-gray-200 bg-gray-50 p-4 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="text-center">
              <Typo size="md" fontWeight="semibold" color="gray-900">
                Prof. Dr. Ir. Ginandjar Kartasasmita
              </Typo>
              <Typo color="gray-400">Dewan Penasehat</Typo>
            </div>
          </Flexbox>
          <Flexbox flow="col" gap="xs">
            <div className="h-[72px]- w-[72px] shrink-0 rounded-full border border-gray-200 bg-gray-50 p-4 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="text-center">
              <Typo size="md" fontWeight="semibold" color="gray-900">
                H. Rahmat
              </Typo>
              <Typo color="gray-400">Dewan Penasehat</Typo>
            </div>
          </Flexbox>
          <Flexbox flow="col" gap="xs">
            <div className="h-[72px]- w-[72px] shrink-0 rounded-full border border-gray-200 bg-gray-50 p-4 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="text-center">
              <Typo size="md" fontWeight="semibold" color="gray-900">
                Herson Tendean, S.Kom
              </Typo>
              <Typo color="gray-400">Ketua</Typo>
            </div>
          </Flexbox>
        </div>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
