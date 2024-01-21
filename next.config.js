const webpack = require('webpack');

module.exports = {
  reactStrictMode: false,
  webpack: (config, { isServer, dev }) => {
    // HMR için gerekli ayarlar
    if (dev) {
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }


    return config;
  },
};
