import { Flexbox, Icon, Typo } from '@/nui'

export default function HowToRegistration() {
  const howToRegistration = {
    title: 'Cara Pendaftaran',
    titleStep: 'Peserta dapat mengajukan pendaftaran melalui:',
    steps: [
      {
        label: 'E-mail:',
        content: 'mail@coopindonesia.com',
        icon: 'lucide:mail',
      },
      {
        label: 'Subject:',
        content: 'Daftar Program Pemagangan ke Jepang',
        icon: 'lucide:edit',
      },
      {
        label: 'Tujukan Kepada:',
        content:
          'Divisi Program Pengembangan Sumber Daya Manusia LPK COOP Indonesia Di Jakarta',
        icon: 'lucide:building-2',
      },
    ],
  }

  const { title, titleStep, steps } = howToRegistration

  return (
    <Flexbox flow="col" align="normal" gap="xs">
      <Typo color="gray-900" size="2xl" fontWeight="bold">
        {title}
      </Typo>
      <div className="flex flex-col gap-3 px-4">
        <Typo size="lg" color="gray-700">
          {titleStep}
        </Typo>
        <Flexbox flow="col" gap="2xs" align="normal">
          {steps.map((step, index) => (
            <Flexbox key={index} align="start" gap="2xs">
              <div className="pt-1 text-gray-700">
                <Icon size="sm" icon={step.icon} />
              </div>
              <div className="flex flex-wrap gap-x-1">
                <Typo size="lg">{step.label}</Typo>
                <Typo
                  size="lg"
                  color={step.label === 'E-mail:' ? 'primary-700' : 'gray-900'}
                  fontWeight="semibold"
                >
                  {step.content}
                </Typo>
              </div>
            </Flexbox>
          ))}
        </Flexbox>
      </div>
    </Flexbox>
  )
}
