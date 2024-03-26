import { Flexbox, Icon, Typo } from '@/nui'

export default function HowToRegistration() {
  return (
    <Flexbox flow="col" align="normal" gap="xs">
      <Typo color="gray-900" size="xl" fontWeight="bold">
        Cara Pendaftaran
      </Typo>
      <div className="flex flex-col gap-3 px-4">
        <Typo size="md" color="gray-700">
          Peserta dapat mengajukan pendaftaran melalui:
        </Typo>
        <Flexbox flow="col" gap="2xs" align="normal">
          <Flexbox align="start" gap="2xs">
            <div className="pt-1 text-gray-700">
              <Icon size="sm" icon="lucide:mail" />
            </div>
            <div>
              <Typo size="md">E-mail: </Typo>
              <Typo size="md" color="primary-700" fontWeight="semibold">
                mail@coopindonesia.com
              </Typo>
            </div>
          </Flexbox>
          <Flexbox align="start" gap="2xs">
            <div className="pt-1 text-gray-700">
              <Icon size="sm" icon="lucide:edit" />
            </div>
            <div>
              <Typo size="md">Subject: </Typo>
              <Typo size="md" color="gray-900" fontWeight="semibold">
                Daftar Program Pemagangan ke Jepang
              </Typo>
            </div>
          </Flexbox>
          <Flexbox align="start" gap="2xs">
            <div className="pt-1 text-gray-700">
              <Icon size="sm" icon="lucide:building-2" />
            </div>
            <div>
              <Typo size="md">Tujukan Kepada:</Typo>
              <Typo size="md" color="gray-900" fontWeight="semibold">
                Divisi Program Pengembangan Sumber Daya Manusia LPK COOP
                Indonesia Di Jakarta
              </Typo>
            </div>
          </Flexbox>
        </Flexbox>
      </div>
    </Flexbox>
  )
}
