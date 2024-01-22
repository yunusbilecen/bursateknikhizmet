module.exports = {
  reactStrictMode: true,
  // Diğer temel yapılandırmalar buraya eklenebilir

  // Statik HTML çıktısı için export ayarı
  // Bu özelliği ekleyerek statik HTML çıktısı alabilirsiniz
  // Daha fazla ayrıntı için: https://nextjs.org/docs/advanced-features/static-html-export
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Diğer sayfalar buraya eklenebilir
    };
  },

  // Statik HTML çıktısını out klasörüne al
  // Bu, next export komutu kullanıldığında kullanılır
  // Daha fazla ayrıntı için: https://nextjs.org/docs/advanced-features/static-html-export#output-directory
  outDir: 'out',
};
