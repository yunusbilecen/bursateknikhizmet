const webpack = require('webpack');

module.exports = {
  reactStrictMode: false,
  webpack: (config, { isServer, dev }) => {
    // HMR için gerekli ayarlar
    if (dev) {
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    // fs modülünü client-side'da devre dışı bırakma
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        dns: false,
        net: false,
        tls: false
      };
    }

    return config;
  },
};
