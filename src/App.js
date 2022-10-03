import React from "react"
import dayjs from "dayjs"

import FooterComponent from "./components/footer.component"
import HeaderComponent from "./components/header.component."
import IndexPage from "./pages/index.page"

import config from "./data/config.data"
import gear from "./images/gear-solid-white.svg"
import "./styles/main.scss"
import TranslationsPage from "./pages/translations.page"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: {
        previous: "",
        current: this.props.pageStates.INDEX,
      },
      translations: [],
      translation: "",
      chapters: [],
      chapter: "",
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

  setPage = (next) => {
    const previous = this.state.page.current

    this.setState({
      page: {
        previous: previous,
        current: next,
      },
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
    switch(this.state.page.current) {
      case this.props.pageStates.INDEX:
        return <IndexPage />

      case this.props.pageStates.TRANSLATIONS:
          return <TranslationsPage />

      default:
        return null
    }
  }

  render = () => {
    return (
      <main className="main-grid">
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
