module.exports = {
  siteMetadata: {
    title: `Tenderness Kit `,
    description: `tendernesskit.com`,
    author: `wasawat and tewprai and co`,
    version: `0.1`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Spectral\:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i`
        ],
        display: 'auto'
      }
    },
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    }
  ],
}
