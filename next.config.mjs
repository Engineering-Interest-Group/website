/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  compiler: {
    removeConsole: true
  },

  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false
}

export default nextConfig
