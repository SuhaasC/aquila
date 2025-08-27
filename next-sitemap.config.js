/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aquilastrat.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.aquilastrat.com/sitemap.xml',
    ],
  },
  exclude: ['/admin/*', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
};
