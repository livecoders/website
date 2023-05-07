module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-KCHKTE9622`,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/src/img/favicon.png`,
        name: "The Live Coders",
        short_name: "The Live Coders",
        dir: "auto",
        lang: "en-GB",
        background_color: "#9148db",
        theme_color: `#9148db`,
        display: "standalone",
        orientation: "any",
        start_url: "/",
      },
    },
  ],
}
