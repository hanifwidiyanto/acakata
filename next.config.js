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
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/*',
      },
      {
        protocol: 'https',
        hostname: 'www.shareicon.net',
        port: '',
        pathname: '/data/*/*/*/*/*',
      },
      {
        protocol: 'https',
        hostname: 'cdn.acakata.app',
        port: '',
        pathname: '/assets/files/*',
      },
      // (https://cdn.acakata.app/assets/files/1678692708017_kuda.png)
      // https://www.shareicon.net/data/128x128/2016/06/27/787474_man_512x512.png
    ],

  },

}

module.exports = nextConfig