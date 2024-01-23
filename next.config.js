const path = require('path');

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  target: 'experimental-serverless-trace', // target ayarını güncelledik
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Client tarafında kullanılan modüller
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};
