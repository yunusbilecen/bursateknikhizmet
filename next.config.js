// next.config.js
module.exports = {
  reactStrictMode: true, // ya da false, ihtiyacınıza göre değiştirin
  // "target" artık desteklenmiyor, kaldırılabilir veya belirli bir değere ayarlanabilir.
  // Örneğin, eğer "serverless" kullanıyorsanız, onu "server" olarak değiştirebilirsiniz.
  // Ancak, bu kısmı kaldırarak da deneyebilirsiniz, çünkü varsayılan değer "server" olarak ayarlıdır.
  target: 'serverless',
  webpack: (config, { isServer }) => {
    // Özel Webpack yapılandırmalarınızı burada ekleyebilirsiniz.

    // Örnek: Image optimizer eklemek için
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/images',
            publicPath: '/_next/static/images',
          },
        },
      ],
    });

    if (!isServer) {
      // Client tarafındaki özel yapılandırmaları buraya ekleyebilirsiniz.
    }

    return config;
  },
};
