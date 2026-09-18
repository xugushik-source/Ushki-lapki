import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photo slots ship as local SVGs until real photography is
    // dropped in (brief section 52). These are authored by us, not user
    // uploads, so allowing SVG here is safe.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
