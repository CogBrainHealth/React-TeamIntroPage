import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/team_cog",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
