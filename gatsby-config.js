module.exports = {
  siteMetadata: {
    title: `Jordan Winslow: Front End Specialist Developer & Design Portfolio for 2020`,
    description: `Featuring Cutting Edge React, GraphQL, Gatsby, Greensock Animation, Night Mode & Much More!`,
    image: `https://i.postimg.cc/2jQg8wf6/meta-Image.jpg`,
    author: `@jordanwinslow <admin@jordanwinslow.me>`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 466,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `front-end-portfolio`,
        short_name: `front-end-portfolio`,
        start_url: `/`,
        background_color: `#1F1F25`,
        theme_color: `#239494`,
        display: `minimal-ui`,
        icon: `src/images/JWIcon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
