/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

 module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Backroad",
    description: "Explore Awesome Worldwide Tours - All Tours Available at cheapest price.",
    author: "Rahul Gupta",
    twitterUserName : "@notsonoobie",
    img : '/defaultBcg.jpeg',
    siteUrl : 'https://notsonoobie-backroad-gatsby.netlify.app',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://notsonoobie-backroad-gatsby.netlify.app',
        sitemap: 'https://notsonoobie-backroad-gatsby.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
  ],
}
