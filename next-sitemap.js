/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://meme-generator-hazel-nine.vercel.app/', // replace with your live URL
  generateRobotsTxt: true,
  outDir: './out', // optional if you want to specify output folder
  transform: async (config, path) => {
    // Fix for src/app routing
    return {
      loc: path, // keep path as is
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
