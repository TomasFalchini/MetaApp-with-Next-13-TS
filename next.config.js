/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["scontent.fros9-2.fna.fbcdn.net"],
  },
  experimental: {
    appDir: true,
  },
  env: {
    mongodburl: "Your MongoDB connection String",
    firebaseconfig: "...",
  },
};
