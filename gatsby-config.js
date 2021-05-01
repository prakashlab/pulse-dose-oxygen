module.exports = {
  siteMetadata: {
    title: 'Pulse-Dose Oxygen Conservation',
    description: 'Documentation site for a pulse-dose oxygen conservation system'
  },
  pathPrefix: '/pulse-dose-oxygen',
  plugins: [
    {
      resolve: 'gatsby-theme-documentation',
      options: {
        basePath: '/pulse-dose-oxygen',
      }
    }
  ]
}
