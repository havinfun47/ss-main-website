/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ss-main-website",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/ss-main-website",
  },
};

export default nextConfig;
