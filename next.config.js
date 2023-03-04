/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    "GOOGLE_CLIENT_ID": "813994308258-sdqrmhj4v7rsui578381sijb75mgseb8.apps.googleusercontent.com",
    "GOOGLE_CLIENT_SECRET": "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",
    "NEXTAUTH_SECRET": 'dasdadjasklhdkjashdkash'
  }

}

module.exports = nextConfig