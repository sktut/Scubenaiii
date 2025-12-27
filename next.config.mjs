/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    // explicitly set the workspace root to this project to avoid an inferred-root warning
    root: './',
  },
  async redirects() {
    return [
      {
        source: '/labs',
        destination: '/scuben-ai-labs',
        permanent: true,
      },
      {
        source: '/labs/:path*',
        destination: '/scuben-ai-labs/:path*',
        permanent: true,
      },
    ]
  },
}


export default nextConfig
