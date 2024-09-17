/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  devIndicators: {
    autoPrerender: false
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: [
      'image/avif',
      'image/webp',
      'image/png',
      'image/svg',
      'images/default.png'
    ]
  },
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error']
    }
  }
};

const nextConfig = {
  appDir: true,
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost', '*.localhost']
    }
  },
  env: {
    development: 'http://192.168.1.149:8080',
    production: 'https://apitestelocal.nwsys.com.br/macpro/'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@/assets'] = path.join(__dirname, 'public/assets');
    return config;
  }
};

module.exports = nextConfig;
