module.exports = {
  siteMetadata: {
    title: `Front End Development With React, GraphQL in 2020`,
    description: `Jordan Winslow's development blog talking about CSS3, HTML5, JavaScript, React, GraphQL and everything else Front-End!`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `react-graphql-front-end-development-blog`,
        short_name: `react-graphql-gatsby-blog`,
        start_url: `/`,
        background_color: `#1F1F25`,
        theme_color: `#239494`,
        display: `minimal-ui`,
        icon: `src/images/JWIcon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
