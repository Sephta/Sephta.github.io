require("dotenv").config({
  path: `.env`,
});

module.exports = {
  pathPrefix: "/Sephta.github.io",
  siteMetadata: {
    title: `Seth Tal`,
    description: `Hard working student at the University of Oregon finishing my Bachelors this summer (Sept 2021) with a major in Computer and Information Science. 2 years of personal web development experience building small scale web applications. 1 year of experience working in ReactJS integrating RESTful APIs into frontend web clients. Proficient in many languages including: C#, C/C++, Python, JavaScript. Avid interest in UI / UX design, as well as Game programming mostly in the Unity game engine. Actively seeking entry level Software Engineer or Frontend Developer roles.`,
    author: `@seth_tal`,
    github: `https://github.com/Sephta`,
    linkedIn: `https://www.linkedin.com/in/sethtal`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
