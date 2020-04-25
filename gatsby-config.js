require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Ekanshi Kiran - UI/UX Designer`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        // layout: require.resolve(`./src/components/layout.js`)
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ekanshi Kiran - UI/UX Designer`,
        short_name: `Ekanshi Kiran`,
        start_url: `/`,
        background_color: `#B3E5E1`,
        theme_color: `#B3E5E1`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#252836`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
