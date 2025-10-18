/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration for Vercel
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i3.ytimg.com',
      },
    ],
  },

  // Strict mode for better development experience
  reactStrictMode: true,

  // Disable development indicators and overlay
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },

  // Disable error overlay completely
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Disable webpack dev middleware overlay
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = false;
    }
    return config;
  },

  // Environment variables that should be available on the client side
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_CHURCH_EMAIL: process.env.NEXT_PUBLIC_CHURCH_EMAIL,
    NEXT_PUBLIC_CHURCH_PHONE: process.env.NEXT_PUBLIC_CHURCH_PHONE,
    NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  },

  // Note: headers() is not supported with static export
  // Configure headers in Cloudflare Pages settings instead
};

module.exports = nextConfig;
