const path = require('path');

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  target: 'experimental-serverless-trace', // target ayarını güncelledik
};
