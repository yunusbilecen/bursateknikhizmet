const webpack = require('webpack');

module.exports = {
  reactStrictMode: false,
  webpack: (config, { isServer, dev }) => {
    // HMR için gerekli ayarlar
    if (dev) {
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    // isServer durumuna göre modülleri devre dışı bırakma
    if (isServer) {
      config.resolve.alias['dns'] = false;
      config.resolve.alias['tls'] = false;
      config.resolve.alias['net'] = false;
      config.resolve.alias['fs'] = false;
    }

    return config;
  },
};
