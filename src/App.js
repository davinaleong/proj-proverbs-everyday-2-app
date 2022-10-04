import React from "react"
import dayjs from "dayjs"

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
    const { theme, preferredTranslation, textSize } = defaultSettings
    const todayMonth = Number(dayjs().format("M"))

    this.state = {
      page: {
        previous: "",
        current: pageStates.INDEX,
      },
      settings: {
        theme: theme,
        preferredTranslation: preferredTranslation,
        textSize: textSize,
      },
      translations: [],
      translation: preferredTranslation,
      chapters: [],
      chapter: todayMonth,
    }
  }

  componentDidMount = () => {
    console.log(`TODO: Get Translations & Chapter from API`)
    // const translationsApi = `${config.api}translations/`
    // const chaptersApi = `${translationsApi}kjv/chapters`

    // console.log(translationsApi)
    // console.log(chaptersApi)
    // fetch(translationsApi)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
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

  setSettings = (theme = "", preferredTranslation = "KJV", textSize = "") => {
    this.setState({
      settings: {
        theme,
        preferredTranslation,
        textSize,
      },
    })
  }

  setTranslation = (translation = "KJV") => {
    this.setState({
      translation,
    })
  }

  setChapter = (chapter = 1) => {
    this.setState({
      chapter: Number(chapter),
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

  renderPage = () => {
    const { pageStates, defaultSettings } = this.props
    const { page, settings } = this.state

    switch (page.current) {
      case pageStates.INDEX:
        return <IndexPage textSize={settings.textSize} />

      case pageStates.TRANSLATIONS:
        return <TranslationsPage />

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
