/** @type {import('next').NextConfig} */
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = repoName ? `/${repoName.replace(/^\\//, "")}` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true
};

export default nextConfig;

