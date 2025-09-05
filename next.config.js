/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/affinda-illustrated-grid',
  assetPrefix: '/affinda-illustrated-grid',
}

module.exports = nextConfig