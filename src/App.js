import React from "react"
import dayjs from "dayjs"

import config from "./data/config.data"
import responses from "./data/responses.data"

import FooterComponent from "./components/footer.component"
import HeaderComponent from "./components/header.component."
import IndexPage from "./pages/index.page"
import TranslationsPage from "./pages/translations.page"
import ChaptersPage from "./pages/chapters.page"
import SettingsPage from "./pages/settings.page"

import gear from "./images/gear-solid-white.svg"
import "./styles/main.scss"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    const { pageStates, defaultSettings } = this.props
    const { theme, preferredTranslation, book, textSize } = defaultSettings
    const todayMonth = dayjs().format("M")

    this.state = {
      page: {
        previous: "",
        current: pageStates.INDEX,
      },
      settings: {
        theme: theme,
        preferredTranslation: preferredTranslation,
        book: book,
        textSize: textSize,
        chapterSlug: `chapter-${todayMonth}`,
      },
      translations: [],
      translation: {},
      chapters: [],
      chapter: {},
    }
  }

  componentDidMount = () => {
    console.log(`TODO: Get Translations & Chapter from API`)

    const { settings } = this.state
    const { preferredTranslation, book, chapterSlug } = settings

    const translationsApi = `${config.api}translations/`
    const chaptersApi = `${translationsApi}${preferredTranslation}/books/${book}/chapters`

    console.log(`Translations API`, translationsApi)
    console.log(`Chapters API`, chaptersApi)

    const translations = responses.translations.translations.data
    const translation = translations.filter(
      (translation) => translation.slug == preferredTranslation
    )[0]

    let chapters = []
    if (responses[preferredTranslation].chapters !== undefined) {
      chapters = responses[preferredTranslation].chapters
    }
    const chapter = chapters.filter((chapter) => chapter.slug == chapterSlug)[0]

    // fetch(translationsApi)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //   })

    this.setState({
      translations,
      translation,
      chapters,
      chapter,
    })
  }

  getTranslation = (translationSlug) => {
    const { translations } = this.state
    return translations.filter((translation) => {
      return translationSlug == translation.slug
    })[0]
  }

  setPage = (next = "") => {
    if (next && next != "") {
      const previous = this.state.page.current

      this.setState({
        page: {
          previous: previous,
          current: next,
        },
      })
    }
  }

  setSettings = (theme = "", preferredTranslation = "kjv", textSize = "") => {
    this.setState({
      settings: {
        theme,
        preferredTranslation,
        textSize,
      },
    })
  }

  setTranslation = (translationSlug = "kjv") => {
    this.setState({
      translation: this.getTranslation(translationSlug),
    })
  }

  setChapter = (chapter = 0) => {
    const thisChapter = chapter > 0 ? chapter : dayjs().format("M")

    // this.setState({
    //   chapter: `chapter-${thisChapter}`,
    // })
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

  renderPage = () => {
    const { pageStates, defaultSettings } = this.props
    const { page, settings, translations, translation, chapter } = this.state

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
        return <TranslationsPage translations={translations} />

      case pageStates.CHAPTERS:
        return <ChaptersPage />

      case pageStates.SETTINGS:
        return (
          <SettingsPage
            settings={settings}
            defaultSettings={defaultSettings}
            setSettings={this.setSettings}
          />
        )

      default:
        return null
    }
  }

  render = () => {
    const { settings } = this.state
    const mainClass = `main-grid ${settings.theme}`

    return (
      <main className={mainClass}>
        <HeaderComponent
          gotoBack={this.gotoBack}
          gotoIndexPage={this.gotoIndexPage}
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
