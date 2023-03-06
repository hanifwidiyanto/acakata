/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
  
    "NEXTAUTH_SECRET": 'dasdadjasklhdkjashdkash',
  }

}

module.exports = nextConfig