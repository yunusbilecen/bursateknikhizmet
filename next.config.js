const path = require('path');

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  target: 'serverless', // Serverless hedefini ekledik
  // Diğer konfigürasyon ayarları...
};
