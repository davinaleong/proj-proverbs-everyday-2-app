import config from "../data/config.data"

const appUrl = config.apis.apps
const appSlug = config.slug
const bibleUrl = config.apis.bible

const apps = () => {
  return appUrl
}

const app = () => {
  return `${apps()}${appSlug}/`
}

const bible = () => {
  return bibleUrl
}

const translations = () => {
  return `${bible()}translations/`
}

const translation = (translationSlug) => {
  return `${translations()}${translationSlug}/`
}

const books = (translationSlug) => {
  return `${translation(translationSlug)}books/`
}

const book = (translationSlug, bookSlug) => {
  return `${books(translationSlug)}${bookSlug}/`
}

const chapters = (translationSlug, bookSlug) => {
  return `${book(translationSlug, bookSlug)}chapters/`
}

const chapter = (translationSlug, bookSlug, chapterSlug) => {
  return `${chapters(translationSlug, bookSlug)}${chapterSlug}/`
}

const UrlHelper = {
  apps,
  app,
  bible,
  translations,
  translation,
  books,
  book,
  chapters,
  chapter,
}

export default UrlHelper
