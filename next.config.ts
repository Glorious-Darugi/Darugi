import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 콘텐츠 위주의 마케팅 사이트. 기본 설정으로 Vercel 배포에 최적.
  // (GitHub Pages 등 완전 정적 배포가 필요하면 output: "export" 를 켜세요.)
  reactStrictMode: true,
};

export default nextConfig;
