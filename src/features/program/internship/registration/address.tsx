import { Flexbox, Typo } from '@/nui'
import Image from 'next/image'

export default function Address() {
  const address = {
    title: 'Kontak Mitra LPK COOP Indonesia',
    subtitle:
      'Anda juga dapat menghubungai Mitra LPK COOP Indonesia di beberapa Wilayah, antara lain:',
    image: {
      src: '/program/registration-image-1.svg',
      alt: 'registration-image-1-coop-indonesia',
    },
    locations: [
      {
        region: 'Wilayah Jawa Timur',
        offices: [
          { name: 'Bojonegoro - LPK Masayu', phone: '0823-3163-6660' },
          { name: 'Malang - LPK Furusato', phone: '0821-4081-3864' },
          { name: 'Ponorogo - LPK BNS', phone: '0852-3046-1229' },
          { name: 'Tulung Agung - LPK Akashiro', phone: '081213114789' },
        ],
      },
      {
        region: 'Wilayah Jawa Tengah',
        offices: [
          { name: 'Brebes - LPK Ilalang', phone: '0819-0272-2631' },
          { name: 'Cilacap - LPK ITCO', phone: '0815-656-2914' },
          { name: 'Kebumen - LPK Shiawase', phone: '0831-5492-4576' },
          { name: 'Kudus - LPK Karazu', phone: '0813-901-7562' },
          { name: 'Purwokerto - LPK Akemi', phone: '0896-1913-3864' },
        ],
      },
      {
        region: 'Wilayah Jawa Barat',
        offices: [
          { name: 'Bandung - LPK Megumi', phone: '0813-2072-2262' },
          { name: 'Bandung - LPK SAHARA', phone: '0813-2070-0185' },
          { name: 'Cirebon - LPK ORI', phone: '0852-1722-9216' },
          { name: 'Cirebon - LPK PMB', phone: '0857-2245-6269' },
          { name: 'Indramayu - LPK Seiko', phone: '0813-2426-4474' },
          { name: 'Sukabumi - LPK Sahaja', phone: '0813-1737-9047' },
          { name: 'Tasik - LPK Seiko', phone: '0812-8134-5766' },
          { name: 'Pangandaran - Furusato', phone: '0852-2087-8323' },
        ],
      },
      {
        region: 'Wilayah Lampung',
        offices: [
          { name: 'Lampung - LPK Matsumoto', phone: '0821-7917-5940' },
          { name: 'Lampung - LPK Ayabe', phone: '0813-7994-9372' },
          { name: 'Lampung - LPK Yamamori', phone: '0821-7511-3260' },
          { name: 'Lampung - LPK Gakusho', phone: '0813-6969-6429' },
        ],
      },
    ],
  }

  const { title, subtitle, image, locations } = address

  return (
    <Flexbox align="normal" flow="col" gap="sm">
      <Flexbox flow="col" gap="xs" align="normal">
        <Typo size="2xl" color="gray-900" fontWeight="bold">
          {title}
        </Typo>
        <Typo size="lg">{subtitle}</Typo>
      </Flexbox>
      <div className="mx-auto max-w-[37.5rem]">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full"
          src={image.src}
          alt={image.alt}
        />
      </div>
      <Flexbox flow="col" gap="2xl" align="normal">
        {locations.map((location, index) => (
          <Flexbox key={index} flow="col" align="normal" gap="xs">
            <Typo size="lg" fontWeight="bold" color="gray-900">
              {location.region}
            </Typo>
            <ul className="grid list-disc gap-x-12 gap-y-2 py-0.5 pl-4 lg:grid-cols-2">
              {location.offices.map((office) => (
                <li
                  key={office.name}
                  className="text-base text-gray-700 lg:text-lg"
                >
                  {office.name}
                  <p className="font-bold">{office.phone}</p>
                </li>
              ))}
            </ul>
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  )
}
