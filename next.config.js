// next.config.js
module.exports = {
  reactStrictMode: true, // veya false, ihtiyacınıza göre değiştirin
  targer: 'server',
  webpack: (config, { isServer }) => {
    // Webpack özelleştirmeleri...
    return config;
  },
};
