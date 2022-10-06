const envVars = process.env

const ConfigData = {
  appName: "Proverbs Everyday",
  author: "Davina Leong",
  dateStarted: "2022-09-28",
  slug: "proverbs-everyday",
  apis: {
    bible: envVars.REACT_APP_API_BIBLE_URL,
    apps: envVars.REACT_APP_API_APPS_URL,
  },
  meta: {
    metaTitle: "Proverbs Everyday",
    metaAuthor: "Davina Leong",
    metaDescription:
      "Displays the Bible Proverb chapter of the day. Able to view all chapters of the book of Proverbs too.",
    metaKeywords:
      "proverbs everyday, proverbs, everyday, daily, bible, jesus, jesus christ, christ, proverb, proverb everyday, christian, reactjs, html, css, sass, scss, html5, css3",
  },
  cacheKey: "proverbsEverydayV2Settings",
}

export default ConfigData
