import { Flexbox, Icon, Typo } from '@/nui'

export default function Info() {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-dashed border-primary-500 bg-primary-25 p-6">
      <Typo size="md">
        Pertanyaan lebih lanjut seputar program magang di LPK COOP Indonesia,
        silahkan menghubungi:
      </Typo>
      <Flexbox gap="xl">
        <Flexbox gap="2xs">
          <div className="h-fit w-fit rounded-full bg-green-500 p-1 text-white">
            <Icon size="xs" icon="mdi:whatsapp" />
          </div>
          <Typo size="md">
            Admin #1 : <strong>0821-4081-3864</strong>
          </Typo>
        </Flexbox>
        <Flexbox gap="2xs">
          <div className="h-fit w-fit rounded-full bg-green-500 p-1 text-white">
            <Icon size="xs" icon="mdi:whatsapp" />
          </div>
          <Typo size="md">
            Admin #2 : <strong>0822-3238-8961</strong>
          </Typo>
        </Flexbox>
      </Flexbox>
    </div>
  )
}
