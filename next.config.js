// next.config.js
module.exports = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    // isServer durumuna göre modülleri devre dışı bırakma
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        dns: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
};
