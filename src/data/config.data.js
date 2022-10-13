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
    meta_title: "Proverbs Everyday",
    meta_author: "Davina Leong",
    meta_description:
      "Displays the Bible Proverb chapter of the day. Able to view all chapters of the book of Proverbs too.",
    meta_keywords:
      "proverbs everyday, proverbs, everyday, daily, bible, jesus, jesus christ, christ, proverb, proverb everyday, christian, reactjs, html, css, sass, scss, html5, css3",
  },
  cacheKey: "proverbsEverydayV2Settings",
}

export default ConfigData
