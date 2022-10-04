import React from "react"

import themes from "../data/themes.data"
import preferredTranslations from "../data/preferred-translations.data"
import textSizes from "../data/text-sizes.data"

export default class SettingsPage extends React.Component {
  constructor(props) {
    super(props)

    const { settings } = this.props
    const { theme, preferredTranslation, textSize } = settings

    this.state = {
      theme: theme,
      preferredTranslation: preferredTranslation,
      textSize: textSize,
    }
  }

  renderOptions = (options, optionKey) => {
    const optionsJsx = []

    options.forEach(({ name, value }, index) => {
      optionsJsx.push(
        <option value={value} key={`o` + optionKey + index}>
          {name}
        </option>
      )
    })

    return optionsJsx
  }

  themeChangeHandler = (e) => {
    this.setState({
      theme: e.target.value,
    })
  }

  preferredTranslationChangeHandler = (e) => {
    this.setState({
      preferredTranslation: e.target.value,
    })
  }

  textSizeChangeHandler = (e) => {
    this.setState({
      textSize: e.target.value,
    })
  }

  saveClickHandler = (e) => {
    const { theme, preferredTranslation, textSize } = this.state
    this.props.saveClickHandler(theme, preferredTranslation, textSize)
  }

  resetClickHandler = (e) => {
    this.setState({
      theme: this.props.defaultSettings.theme,
      preferredTranslation: this.props.defaultSettings.preferredTranslation,
      textSize: this.props.defaultSettings.textSize,
    })
  }

  render = () => {
    return (
      <>
        <h2 className="page-heading p-b-400">Settings</h2>

        <form action="#" className="settings-form">
          <div className="form-group-flex">
            <label htmlFor="theme" className="form-label">
              Theme
            </label>
            <select
              name="theme"
              id="theme"
              className="form-input"
              value={this.state.theme}
              onChange={this.themeChangeHandler}
            >
              {this.renderOptions(themes, `t`)}
            </select>
          </div>

          <div className="form-group-flex">
            <label htmlFor="preferredTranslations" className="form-label">
              Preferred Translation
            </label>
            <select
              name="preferredTranslations"
              id="preferredTranslations"
              className="form-input"
              value={this.state.preferredTranslation}
              onChange={this.preferredTranslationChangeHandler}
            >
              {this.renderOptions(preferredTranslations, `pt`)}
            </select>
          </div>

          <div className="form-group-flex">
            <label htmlFor="textSize" className="form-label">
              Text Size
            </label>
            <select
              name="textSize"
              id="textSize"
              className="form-input"
              value={this.state.textSize}
              onChange={this.textSizeChangeHandler}
            >
              {this.renderOptions(textSizes, `ts`)}
            </select>
          </div>

          <p className="clr-danger-400">
            Click "save" for changes to take place.
          </p>

          <div className="form-buttons-flex">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.saveClickHandler}
            >
              Save
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.resetClickHandler}
            >
              Default
            </button>
          </div>
        </form>
      </>
    )
  }
}
