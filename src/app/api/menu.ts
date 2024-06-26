export const menuDataStatic = {
  program: {
    menu: [
      {
        icon: 'lucide:graduation-cap',
        label: 'Pemagangan ke Jepang',
        description: 'LPK COOP Indonesia melakukan proses rekrutmen',
        state: 'internship',
      },
      {
        icon: 'lucide:briefcase-business',
        label: 'Program Internship',
        description:
          'Penempatan Mahasiswa(i) Indonesia ke berbagai perusahaan di Jepang.',
        state: '',
        href: '/program/student-internship',
      },
      {
        icon: 'lucide:award',
        label: 'Program Usaha Mandiri',
        description: 'Kegiatan usai magang di Jepang & kembali ke Tanah Air',
        state: 'business',
      },
    ],
    internship: [
      { href: '/program/internship', label: 'Tentang Magang' },
      {
        href: '/program/internship/educational-material',
        label: 'Materi Program',
      },
      { href: '/program/internship/registration', label: 'Pendaftaran' },
      {
        href: '/program/internship/placement-progress',
        label: 'Progress Penempatan',
      },
      {
        href: '/program/internship/three-career-path',
        label: 'Cara Berkarir di Jepang',
      },
      { href: '/program/internship/pre-selection', label: 'Pra Seleksi' },
      {
        href: '/program/internship/terms-conditions',
        label: 'Syarat & Ketentuan',
      },
      { href: '/program/internship/selection', label: 'Seleksi' },
      { href: '/program/internship/documents', label: 'Kelengkapan Dokumen' },
      { href: '/program/internship/training', label: 'Pelatihan' },
      {
        href: '/program/internship/rights-obligations',
        label: 'Hak & Kewajiban',
      },
      { href: '/program/internship/placement', label: 'Penempatan' },
      { href: '/program/internship/program-flow', label: 'Alur Program' },
    ],
    business: [
      { href: '/program/post-internship', label: 'Pendahuluan' },
      {
        href: '/program/post-internship/furusato-agribisnis',
        label: 'Furusato Agribisnis',
      },
      {
        href: '/program/post-internship/palm-sugar',
        label: 'Gula Aren',
      },
      {
        href: '/program/post-internship/roselindo-tea',
        label: 'Roselindo Tea',
      },
    ],
    studentInternship: {
      icon: 'lucide:briefcase-business',
      label: 'Program Internship',
      href: '/program/student-internship',
    },
    schools: [
      {
        href: '/program/nihonggo',
        label: 'Persyaratan Calon Siswa & Dokumen',
        body: 'Program Sekolah Bahasa Jepang atau Nihonggo Gakko (sekolah Bahasa Jepang Mandiri) merupakan peluang bagi Masyarakat Indonesia',
      },
      {
        href: '/program/nihonggo/anabuki',
        label: 'Sekolah Anabuki',
        image: {
          src: '/nihonggo/logo-anabuki.png',
          alt: 'logo-anabuki',
        },
        body: 'Anabuki College Group is a vocational school group with 14 vocational schools in the Chugoku-Shikoku area.',
      },
      {
        href: '/program/nihonggo/isb',
        label: 'Sekolah ISB',
        image: {
          src: '/nihonggo/logo-isb.png',
          alt: 'logo-isb',
        },
        body: ' Everyone has a dream.How to achieve that dream may be of the utmost importance to a young person.',
      },
    ],
  },
  publication: [
    {
      id: 1,
      label: 'Vlog',
      description: 'Tonton video log terbaru kami di YouTube',
      href: '/publication/vlog',
      icon: 'lucide:play',
    },
    {
      id: 2,
      label: 'Dari Akun Media Sosial Kami',
      description: 'Update dari Instagram kami',
      href: '/publication/instagram',
      icon: 'lucide:newspaper',
    },
  ],
  galleries: [
    {
      id: 1,
      label: 'Kunjungan Kerja',
      description: 'Foto-foto kunjungan kerja',
      href: '/gallery/work-visit',
      icon: 'lucide:image',
    },
    {
      id: 2,
      label: 'Kerjasama',
      description: 'Foto-foto kerjasama COOP Indonesia',
      href: '/gallery/collaboration',
      icon: 'lucide:image',
    },
    {
      id: 3,
      label: 'Kegiatan Magang',
      description: 'Foto-foto peserta dalam kegiatan magang',
      href: '/gallery/internship-activities',
      icon: 'lucide:image',
    },
    {
      id: 4,
      label: 'Pusdiklat Magang',
      description: 'Foto-foto kegiatan di pusdiklat magang',
      href: '/gallery/training-center',
      icon: 'lucide:image',
    },
  ],
  about: [
    {
      id: 1,
      label: 'Tentang Kami',
      description: 'Sekilas tentang LPK COOP Indonesia',
      href: '/about/at-a-glance',
      icon: 'lucide:building-2',
    },
    {
      id: 2,
      label: 'Misi dan Visi',
      description: 'Lebih jauh tentang tujuan kami',
      href: '/about/vision-and-mission',
      icon: 'lucide:scan-eye',
    },
    {
      id: 3,
      label: 'Struktur Organisasi',
      description: 'Dewan kepemimpinan dan staf',
      href: '/about/organization-structure',
      icon: 'lucide:network',
    },
    {
      id: 4,
      label: 'Sejarah',
      description: 'Kisah dibalik perjalanan kami',
      href: '/about/organization',
      icon: 'lucide:book-open',
    },
  ],
  contact: {
    label: 'CONTACT US',
    href: '/contact-us',
  },
}
