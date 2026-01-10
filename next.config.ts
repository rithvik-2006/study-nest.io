import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error -- experimental.proxy not typed yet
    proxy: true,
  },
}

export default nextConfig
