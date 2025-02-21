import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: process.env.NEXT_PUBLIC_IMAGE_ALLOW_DOMAINS.split(',').map(
      (domain) => ({
        protocol: 'https',
        hostname: domain,
        pathname: '/**',
      })
    ),
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default withNextIntl(nextConfig)
