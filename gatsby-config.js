const esmRequire = require('./EsmRequire')
module.exports = {
  siteMetadata: {
    title: "Deric Pang",
    titleTemplate: "%s | Deric Pang",
    author: "Deric Pang",
    description: "I'm Deric, and I'm a software engineer.",
    url: "https://dericpang.com",
    twitterUsername: "@pderichai",
    twitterImage: "/twitter-default-image.png",
    openGraphImage: "/og-default-image.png",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Publications",
        link: "/publications/",
      },
      {
        name: "Projects",
        link: "/projects/",
      },
      {
        name: "Blog",
        link: "/blog/",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Deric's Homepage",
        short_name: "Deric",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [esmRequire("remark-math").default, esmRequire("remark-html-katex").default],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              //maxWidth: 500,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
              // as we assume you'll use gatsby-remark-images to handle
              // images in markdown as it automatically creates responsive
              // versions of images.
              //
              // If you'd like to not use gatsby-remark-images and just copy your
              // original images to the public directory, set
              // `ignoreFileExtensions` to an empty array.
              //ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pdfs",
        path: `${__dirname}/src/assets/pdfs`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-167406818-1",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:400,500,700", "JetBrains Mono:400,500,700"],
        },
      },
    },
  ],
};
