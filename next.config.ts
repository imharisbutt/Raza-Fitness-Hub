import type { NextConfig } from "next";

// GitHub Pages serves this repo from /Raza-Fitness-Hub/, not the domain root,
// and can only host static files — so the GitHub Actions workflow builds with
// GITHUB_PAGES=true to switch on export mode + the path prefix. Other hosts
// (Vercel, local dev) build normally with full SSR/image-optimization intact.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Raza-Fitness-Hub" : "";

const nextConfig: NextConfig = {
  // Pin the workspace root — a stray package-lock.json in the home directory
  // otherwise makes Next infer the wrong root.
  turbopack: {
    root: __dirname,
  },
  ...(isGithubPages && {
    output: "export",
    basePath,
    assetPrefix: basePath,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
