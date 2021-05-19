const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: 'AnmO2l',
    description: 'Documentation site for a pulse-dose oxygen conservation system',
    siteUrl: 'https://anmol2.org',
  },
  pathPrefix: '',
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
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
              showCaptions: ['title'],
              markdownCaptions: false,
            },
          },
          'gatsby-remark-gifs',
          'gatsby-remark-figure',
          'gatsby-remark-numbered-footnotes',
          {
            resolve: `gatsby-remark-twemoji-shortcut`,
            options: {
              style: {
                display: 'inline',
              },
            },
          },
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
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: isProduction ? 'anmo2l' : 'anmo2l-dev',
        allowLocal: !isProduction,
        referrer: true,
      },
    },
  ]
}
