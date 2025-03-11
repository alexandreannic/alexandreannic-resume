/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  distDir: 'out', // Ensures Next.js exports to the 'out' folder
  images: {
    unoptimized: true, // Required for static export if using Next.js images
  },
}

module.exports = nextConfig
