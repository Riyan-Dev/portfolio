/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basepath: '/portfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
