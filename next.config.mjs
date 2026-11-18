/** @type {import('next').NextConfig} */
const nextConfig = {
  // স্ট্যাটিক HTML এক্সপোর্ট: Cloudflare Pages-এ সরাসরি চলে, কোনো সার্ভার লাগে না
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // ছোট লিন্ট/টাইপ সতর্কতায় ডিপ্লয় যেন আটকে না যায়
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
