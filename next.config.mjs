/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/lpt" : "",
  assetPrefix: isProd ? "/lpt/" : "",
  images: {
    unoptimized: true, // Desabilita a otimização de imagens (requisito no GitHub Pages)
  },
};

module.exports = nextConfig;
