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
    'gatsby-theme-documentation',
    'gatsby-plugin-catch-links',
  ]
}
