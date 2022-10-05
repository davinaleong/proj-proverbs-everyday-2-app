import React from "react"
import { Helmet } from "react-helmet-async"
import dayjs from "dayjs"

import responses from "./data/responses.data"

import FooterComponent from "./components/footer.component"
import HeaderComponent from "./components/header.component."
import IndexPage from "./pages/index.page"
import TranslationsPage from "./pages/translations.page"
import ChaptersPage from "./pages/chapters.page"
import SettingsPage from "./pages/settings.page"

import UrlHelper from "./helpers/url.helper"

import gear from "./images/gear-solid-white.svg"
import "./styles/main.scss"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    const { pageStates, defaultSettings } = this.props
    const { theme, preferredTranslation, bookSlug, chapterSlug, textSize } =
      defaultSettings

    this.state = {
      meta: {
        meta_title: "",
        meta_description: "",
        meta_author: "",
        meta_keywords: "",
      },
      page: {
        previous: "",
        current: pageStates.INDEX,
      },
      settings: {
        theme,
        preferredTranslation,
        textSize,
        bookSlug,
        chapterSlug,
      },
      translations: [],
      translation: {},
      chapters: [],
      chapter: {},
    }
  }

  componentDidMount = () => {
    const { settings } = this.state
    const { preferredTranslation, bookSlug, chapterSlug } = settings

    const metaUrl = UrlHelper.app()
    fetch(metaUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Fetched meta`)
        const { apps } = data
        if (apps.length > 0) {
          const app = apps[0]
          const { meta_title, meta_author, meta_description, meta_keywords } =
            app
          this.setState({
            meta: {
              meta_title,
              meta_author,
              meta_description,
              meta_keywords,
            },
          })
        }
      }) // end fetch

    const translationsUrl = UrlHelper.translations()
    fetch(translationsUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Fetched translations`)
        const translations = data.translations.data

        this.setState({
          translations,
        })
      }) // end fetch

    const chaptersUrl = UrlHelper.chapters(preferredTranslation, bookSlug)
    fetch(chaptersUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Fetched chapters`)

        const { translations, chapters } = data
        let translation = {}
        if (translations.length > 0 && translations[0]) {
          translation = translations[0]
        }

        let chapter = {}
        if (chapters && chapters.length > 0) {
          chapter = chapters.filter((chapter) => chapter.slug == chapterSlug)[0]
        }

        this.setState({
          translation,
          chapters,
          chapter,
        })
      }) // end fetch
  }

  getTranslation = (translationSlug) => {
    const { translations } = this.state
    return translations.filter((translation) => {
      return translationSlug === translation.slug
    })[0]
  }

  getChapters = (translationSlug) => {
    let chapters = []
    if (responses[translationSlug].chapters !== undefined) {
      chapters = responses[translationSlug].chapters
    }

    return chapters
  }

  getChapter = (chapterSlug) => {
    const { chapters } = this.state
    return chapters.filter((chapter) => chapterSlug === chapter.slug)[0]
  }

  setPage = (next = "") => {
    if (next && next !== "") {
      const previous = this.state.page.current

      this.setState({
        page: {
          previous: previous,
          current: next,
        },
      })
    }
  }

  setTranslation = (translationSlug = "kjv") => {
    const translation = this.getTranslation(translationSlug)

    let chapters = []
    if (responses[translation.slug].chapters !== undefined) {
      chapters = responses[translation.slug].chapters
    }

    this.setState({
      translation: translation,
      chapters: chapters,
    })
  }

  setChapter = (chapterSlug = "") => {
    const todayMonth = dayjs().format("M")
    const thisChapterSlug =
      chapterSlug === "" ? `chapter-${todayMonth}` : chapterSlug

    this.setState({
      chapter: this.getChapter(thisChapterSlug),
    })
  }

  gotoBack = () => {
    this.setPage(this.state.page.previous)
  }

  gotoIndexPage = () => {
    this.setPage(this.props.pageStates.INDEX)
  }

  gotoTranslationsPage = () => {
    this.setPage(this.props.pageStates.TRANSLATIONS)
  }

  gotoChaptersPage = () => {
    this.setPage(this.props.pageStates.CHAPTERS)
  }

  gotoSettingsPage = () => {
    this.setPage(this.props.pageStates.SETTINGS)
  }

  todaysProverbClickHandler = () => {
    const { chapters } = this.state

    const todayMonth = dayjs().format("M")
    const chapter = chapters.filter(
      (chapter) => chapter.slug === `chapter-${todayMonth}`
    )[0]

    this.setState({
      chapter,
    })

    this.gotoIndexPage()
  }

  translationClickHandler = (translationSlug = "kjv") => {
    const translation = this.getTranslation(translationSlug)
    const { settings } = this.state
    const { bookSlug, chapterSlug } = settings

    const chaptersUrl = UrlHelper.chapters(translationSlug, bookSlug)
    fetch(chaptersUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Fetched chapters`)

        const { chapters } = data
        let chapter = {}
        if (chapters && chapters.length > 0) {
          chapter = chapters.filter((chapter) => chapter.slug == chapterSlug)[0]
        }

        this.setState({
          translation,
          chapters,
          chapter,
        })

        this.gotoIndexPage()
      }) // end fetch
  }

  chapterClickHandler = (chapterSlug = "chapter-1") => {
    const chapter = this.getChapter(chapterSlug)

    this.setState({
      chapter,
    })

    this.gotoIndexPage()
  }

  saveClickHandler = (
    theme = "",
    preferredTranslation = "kjv",
    textSize = ""
  ) => {
    const translation = this.getTranslation(preferredTranslation)
    const chapters = this.getChapters(preferredTranslation)
    const todayMonth = dayjs().format("M")

    let chapter = {}
    if (chapters) {
      chapter = chapters.filter(
        (chapter) => chapter.slug === `chapter-${todayMonth}`
      )[0]
    }

    this.setState({
      settings: {
        theme,
        preferredTranslation,
        textSize,
      },
      translation,
      chapters,
      chapter,
    })

    this.gotoIndexPage()
  }

  renderPage = () => {
    const { pageStates, defaultSettings } = this.props
    const { page, settings, translations, translation, chapters, chapter } =
      this.state

    switch (page.current) {
      case pageStates.INDEX:
        return (
          <IndexPage
            textSize={settings.textSize}
            translation={translation}
            chapter={chapter}
          />
        )

      case pageStates.TRANSLATIONS:
        return (
          <TranslationsPage
            translations={translations}
            translationClickHandler={this.translationClickHandler}
          />
        )

      case pageStates.CHAPTERS:
        return (
          <ChaptersPage
            chapters={chapters}
            chapterClickHandler={this.chapterClickHandler}
          />
        )

      case pageStates.SETTINGS:
        return (
          <SettingsPage
            settings={settings}
            defaultSettings={defaultSettings}
            saveClickHandler={this.saveClickHandler}
          />
        )

      default:
        return null
    }
  }

  render = () => {
    const { meta, settings } = this.state
    const { meta_title, meta_author, meta_description, meta_keywords } = meta
    const mainClass = `main-grid ${settings.theme}`

    return (
      <main className={mainClass}>
        <Helmet>
          <title>{meta_title}</title>
          <meta name="author" content={meta_author} />
          <meta name="description" content={meta_description} />
          <meta name="keywords" content={meta_keywords} />
        </Helmet>

        <HeaderComponent
          gotoBack={this.gotoBack}
          todaysProverbClickHandler={this.todaysProverbClickHandler}
          gotoTranslationsPage={this.gotoTranslationsPage}
          gotoChaptersPage={this.gotoChaptersPage}
        />

        <div className="content container | p-y-400">{this.renderPage()}</div>

        <FooterComponent />

        <button
          type="button"
          className="btn btn-action btn-fixed"
          onClick={this.gotoSettingsPage}
        >
          <img src={gear} alt="Settings" />
        </button>
      </main>
    )
  }
}
