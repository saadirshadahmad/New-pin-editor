/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Prevents double mounting during canvas ref setups
  images: {
    unoptimized: true
  }
};

export default nextConfig;
