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
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/assets/*/*',
      }
    ],
 
  },

}

module.exports = nextConfig