import type { NextConfig } from "next";

// Webflow Cloud injects basePath/assetPrefix from the environment's mount path
// (/tools/marketing-playbook) at build time. We set the same value here so local
// dev matches production; Webflow overwrites it on deploy.
const nextConfig: NextConfig = {
  basePath: "/tools/marketing-playbook",
  poweredByHeader: false,
};

export default nextConfig;
