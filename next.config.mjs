/** @type {import('next').NextConfig} */
const nextConfig = {
  // 빌드 시 ESLint와 TypeScript 에러 무시
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 실험적 기능 설정
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig; 