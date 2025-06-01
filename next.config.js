/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: production ? '/test_status2/' : '',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
