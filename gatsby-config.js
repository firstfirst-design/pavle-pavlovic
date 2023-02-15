require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const breakpoints = {
  xs: '(max-width: 640px)',
  sm: '(max-width: 768px)',
  md: '(min-width: 768px)',
  l: '(max-width: 1536px)',

  portrait: '(orientation: portrait)',
};

module.exports = {
  siteMetadata: {
    title: 'Pavle Pavlović',
    siteUrl: 'https://www.pavlepavlovic.com/',
    description: 'Portfolio page of Croatian artist Pavle Pavlović',
    image: `src/images/icon.png`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: breakpoints,
      },
    },
  ],
};
