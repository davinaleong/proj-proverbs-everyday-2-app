import React from "react"
import { Helmet } from "react-helmet-async"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog } from "@fortawesome/free-solid-svg-icons"

import ConfigData from "./data/config.data"

import FooterComponent from "./components/footer.component"
import HeaderComponent from "./components/header.component."
import LoaderIconComponent from "./components/loader-icon.component"
import IndexPage from "./pages/index.page"
import TranslationsPage from "./pages/translations.page"
import ChaptersPage from "./pages/chapters.page"
import SettingsPage from "./pages/settings.page"

// import UrlHelper from "./helpers/url.helper"

import "./styles/main.scss"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    const { pageStates, defaultSettings } = this.props
    const {
      theme,
      preferredTranslation,
      bookSlug,
      chapterSlug,
      textSize,
      allowCache,
    } = defaultSettings

    this.state = {
      loading: true,
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
        allowCache,
      },
      translation: {},
      chapters: [],
      chapter: {},
    }
  }

  componentDidMount = () => {
    const { defaultSettings } = this.props
    const { chapterSlug } = defaultSettings

    const cachedSettings = JSON.parse(
      window.localStorage.getItem(ConfigData.cacheKey)
    )
    if (cachedSettings) {
      cachedSettings.chapterSlug = chapterSlug
    }

    const settings = cachedSettings ? cachedSettings : this.state.settings

    const { preferredTranslation } = settings

    // const urls = [
    //   UrlHelper.app(),
    //   UrlHelper.translations(),
    //   UrlHelper.chapters(preferredTranslation, bookSlug),
    // ]

    // Promise.all(urls.map((url) => fetch(url, { mode: "cors" })))
    //   .then((response) => Promise.all(response.map((res) => res.json())))
    //   .then((results) => {
    //     console.log(`Fetched all data.`)

    //     const metaResult = results[0]
    //     const translationsResult = results[1]
    //     const chaptersResult = results[2]

    //     const { apps } = metaResult
    //     let meta = {}
    //     if (apps.length > 0) {
    //       const app = apps[0]
    //       const { meta_title, meta_author, meta_description, meta_keywords } =
    //         app
    //       meta = {
    //         meta_title,
    //         meta_author,
    //         meta_description,
    //         meta_keywords,
    //       }
    //     }

    //     const translations = translationsResult.translations.data

    //     let translation = {}
    //     if (
    //       chaptersResult.translations.length > 0 &&
    //       chaptersResult.translations[0]
    //     ) {
    //       translation = chaptersResult.translations[0]
    //     }

    //     let chapter = {}
    //     if (chaptersResult.chapters && chaptersResult.chapters.length > 0) {
    //       chapter = chaptersResult.chapters.filter(
    //         (chapter) => chapter.slug === chapterSlug
    //       )[0]
    //     }

    //     this.setState({
    //       loading: false,
    //       settings,
    //       meta,
    //       translations,
    //       translation,
    //       chapters: chaptersResult.chapters,
    //       chapter,
    //     })
    //   })

    const translation = this.getTranslation(preferredTranslation)
    const { chapters } = translation
    const chapter = chapters.filter(chapter => chapter.slug === chapterSlug)[0]

    this.setState({
      loading: false,
      translation,
      chapters,
      chapter
    })
  }

  // Getters
  getTranslation = (translationSlug) => {
    const { translations } = this.props
    return translations.filter((translation) => {
      return translationSlug === translation.slug
    })[0]
  }

  getChapters = () => {
    return this.state.chapters
  }

  getChapter = (chapterSlug) => {
    const { chapters } = this.state
    return chapters.filter((chapter) => chapter.slug === chapterSlug)[0]
  }

  // Setters
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

  // Go to Pages
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

  // Page button click handlers
  todaysProverbClickHandler = () => {
    const { settings, chapters } = this.state
    const { chapterSlug } = settings

    const chapter = chapters.filter(
      (chapter) => chapter.slug === chapterSlug
    )[0]

    this.setState({
      chapter,
    })

    this.gotoIndexPage()
  }

  translationClickHandler = (translationSlug = "kjv") => {
    this.setState({ loading: true })
    const translation = this.getTranslation(translationSlug)
    const { settings } = this.state
    // const { bookSlug, chapterSlug } = settings

    // const chaptersUrl = UrlHelper.chapters(translationSlug, bookSlug)
    // fetch(chaptersUrl, { mode: "cors" })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(`Fetched chapters`)

    //     const { chapters } = data
    //     let chapter = {}
    //     if (chapters && chapters.length > 0) {
    //       chapter = chapters.filter(
    //         (chapter) => chapter.slug === chapterSlug
    //       )[0]
    //     }

    //     this.setState({
    //       loading: false,
    //       translation,
    //       chapters,
    //       chapter,
    //     })

    //     this.gotoIndexPage()
    //   }) // end fetch

    const { chapterSlug } = settings

    const { chapters } = translation
    const chapter = chapters.filter(chapter => chapter.slug === chapterSlug)[0]

    this.setState({
      loading: false,
      translation,
      chapters,
      chapter,
    })

    this.gotoIndexPage()
  }

  chapterClickHandler = (chapterSlug = "chapter-1") => {
    this.setState({ loading: true })
    const chapter = this.getChapter(chapterSlug)

    this.setState({
      loading: false,
      chapter,
    })

    this.gotoIndexPage()
  }

  saveClickHandler = (
    theme = "",
    preferredTranslation = "kjv",
    textSize = "",
    allowCache = false
  ) => {
    this.setState({ loading: true })
    const { settings } = this.state
    const { chapterSlug } = settings

    const newSettings = settings
    newSettings.theme = theme
    newSettings.preferredTranslation = preferredTranslation
    newSettings.textSize = textSize
    newSettings.allowCache = allowCache

    if (allowCache) {
      window.localStorage.setItem(
        ConfigData.cacheKey,
        JSON.stringify(newSettings)
      )
    }

    if (settings.preferredTranslation !== preferredTranslation) {
      const translation = this.getTranslation(preferredTranslation)

      // const chaptersUrl = UrlHelper.chapters(preferredTranslation, bookSlug)
      // fetch(chaptersUrl, { mode: "cors" })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(`Fetched chapters`)

      //     const { chapters } = data
      //     let chapter = {}
      //     if (chapters && chapters.length > 0) {
      //       chapter = chapters.filter(
      //         (chapter) => chapter.slug === chapterSlug
      //       )[0]
      //     }

      //     this.setState({
      //       loading: false,
      //       settings: newSettings,
      //       translation,
      //       chapters,
      //       chapter,
      //     })

      //     this.gotoIndexPage()
      //   }) // end fetch

      const { chapters } = translation
      const chapter = chapters.filter(chapter => chapter.slug === chapterSlug)[0]

      this.setState({
        loading: false,
        settings: newSettings,
        translation,
        chapters,
        chapter,
      })

      this.gotoIndexPage()
    } else {
      this.setState({
        loading: false,
        settings: newSettings,
      })

      this.gotoIndexPage()
    }
  }

  renderPage = () => {
    const { pageStates, defaultSettings, translations } = this.props
    const { page, settings, translation, chapters, chapter } =
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
    const { config } = this.props
    const { meta_title, meta_author, meta_description, meta_keywords } = config.meta

    const { loading, settings } = this.state
    const mainClass = `main-grid ${settings.theme}`

    const content = loading ? <LoaderIconComponent /> : this.renderPage()

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

        <div className="content container | p-y-400">{content}</div>

        <FooterComponent />

        <button
          type="button"
          className="btn btn-action btn-fixed"
          onClick={this.gotoSettingsPage}
        >
          <FontAwesomeIcon icon={faCog} />
        </button>
      </main>
    )
  }
}
