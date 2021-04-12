module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Spectral\:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i`,
          `source sans pro\:300,400,400i,700`
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
