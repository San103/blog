import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  transpilePackages: ["geist"],
  // output: "export",
  // reactStrictMode: true,
  // basePath: "/blog",
};

export default withMDX(nextConfig);
