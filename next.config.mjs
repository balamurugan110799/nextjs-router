/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
    domains: ['https://balamurugan110799.github.io/nextjs-router'],
    unoptimized: true,
    },
    distDir:"dist",
    
 // Add basePath
  basePath: '/nextjs-router',

};

export default nextConfig;
