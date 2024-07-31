/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "ayeon_portfolio";

const nextConfig = {
  output: "export",
  basePath: !debug ? `/${repository}` : "",
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  images: {
    unoptimized: true,
  },
  experimental: {
    buildCache: true, // 빌드 캐시 설정 활성화
  },
};

export default nextConfig;
