/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      newNextLinkBehavior: false,
    },
    images: {
        domains: ['fakestoreapi.com'],
    },
};

module.exports = nextConfig;
