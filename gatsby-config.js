module.exports = {
  siteMetadata: {
    title: 'Pulse-Dose Oxygen Conservation',
    description: 'Documentation site for a pulse-dose oxygen conservation system'
  },
  pathPrefix: '/pulse-dose-oxygen',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs`,
      },
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        google: [
          {
            family: 'Inter',
            variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-responsive-iframe',
        ],
        remarkPlugins: [
          require('remark-slug'),
          require('remark-emoji'),
        ],
      },
    },
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-redirects',
    'gatsby-plugin-catch-links',
  ]
}
