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
          `Spectral`,
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    }
  ],
}
