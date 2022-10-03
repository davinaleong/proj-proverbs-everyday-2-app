import React from "react"

import FooterComponent from "./components/footer.component"
import HeaderComponent from "./components/header.component."

import "./styles/main.scss"
import gear from "./images/gear-solid-white.svg"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: {
        previous: "",
        current: this.props.pageStates.INDEX,
      },
    }
  }

  setPage = (next) => {
    const previous = this.state.page.current

    this.setState({
      page: {
        previous: previous,
        current: next,
      },
      translations: [],
      translation: "",
      chapters: [],
      chapter: 0
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

  render = () => {
    return (
      <main className="main-grid">
        <HeaderComponent
          gotoBack={this.gotoBack}
          gotoIndexPage={this.gotoIndexPage}
          gotoTranslationsPage={this.gotoTranslationsPage}
          gotoChaptersPage={this.gotoChaptersPage}
        />

        <div className="content">[Content]</div>

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
