import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { 
    "remotePatterns": [
      {
        "protocol": "https",
        "hostname": "s3-inventory-management-qazedctgbvxcrewdsf-iopkjlmnhbnvgbh.s3.us-east-1.amazonaws.com",
        "port": "",
        "pathname": "/**"
      }
    ]
  }
};

export default nextConfig;
