require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Wall Deco"
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: `wrhxnny3`,
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    },
    `gatsby-plugin-emotion`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    //"gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Philosopher", "Mulish Condensed:700, 800"]
        }
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price'],
        secretKey: process.env.RESTRICTED_STRIPE_API_KEY,
        downloadFiles: true,
      }
    }
  ]
};
