module.exports = {
  siteMetadata: {
    title: 'Pulse-Dose Oxygen Conservation',
    description: 'Documentation site for a pulse-dose oxygen conservation system',
    siteUrl: 'https://prakashlab.github.io/pulse-dose-oxygen/',
  },
  pathPrefix: '/pulse-dose-oxygen',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/uploads`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
            families: ['Inter'],
            urls: ['fonts.css'],
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: '',
              include: ['coverImage'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
              showCaptions: ['title'],
              markdownCaptions: false,
              disableBgImage: true,
            },
          },
          'gatsby-remark-figure',
          'gatsby-remark-numbered-footnotes',
        ],
        remarkPlugins: [
          require('remark-slug'),
          require('remark-emoji'),
        ],
      },
    },
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-redirects',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
  ]
}
