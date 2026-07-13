// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', 
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com', 
        port: '',
      },
    ],
  },
  // زيادة الحد الأقصى للملفات المرفوعة عبر الـ Server Actions
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // رفع الحد الافتراضي من 1MB إلى 10MB
    },
  },
};

export default nextConfig;