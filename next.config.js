/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {

    "NEXTAUTH_SECRET": 'dasdadjasklhdkjashdkash',
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'i.ytimg.com',
      port: '',
      pathname: '/vi/*/*',
    }, ],
  },

}

module.exports = nextConfig