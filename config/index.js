module.exports = {
  //-- SITE SETTINGS -----
  author: "Erald Kuci",
  siteTitle: "Erald Kuci Portfolio",
  siteShortTitle: "ek.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "",
  siteUrl: "https://eraldkuci.dev/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Erald Kuci", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#CDF3E1",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    // {
    //   name: "Xing",
    //   url: "https://www.xing.com/profile/Konstantin_Muenster",
    // },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/erald-kuci/",
    },
    {
      name: "Github",
      url: "https://github.com/hrcg",
    },
    {
      name: "Mail",
      url: "mailto:aldikuci@gmail.com",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Home",
        url: "https://eraldkuci.dev",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Blog",
        url: "https://hrcg.dev/blog/",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: false,
      name: "Download my CV",
      fileName: "resume.pdf", // the file has to be placed inside the static folder at the root level
      url: "resume.pdf", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Made with GatsbyJS",
      url: "https://www.gatsbyjs.com/",
    },
  ],
}
