/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000/api/",
    CONTENTFUL_SPACE_ID:"nplb9j5agad4",
    CONTENTFUL_ACCESS_KEY:"DJGJPD2lNSiZoKAFyIpwKEJWW3xt8SI-Tuki397RgtM",
    PGHOST: 'ep-billowing-tree-027847.us-east-2.aws.neon.tech',
    PGDATABASE: 'neondb',
    PGUSER:'abdulmanan4d',
    PGPASSWORD:'Y82DOzrdWMQS' 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
    ],
  }
}

module.exports = nextConfig
