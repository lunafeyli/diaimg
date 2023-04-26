/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  async rewrites() {
    return [
      {
        source: '/api/gen.png',
        destination: '/api/gen',
      },
      {
        source: '/',
        destination: '/api/gen',
      },
    ]
  }
}

module.exports = nextConfig
