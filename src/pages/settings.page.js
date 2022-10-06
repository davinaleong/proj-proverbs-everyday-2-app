import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave, faRotateLeft } from "@fortawesome/free-solid-svg-icons"

import themes from "../data/themes.data"
import preferredTranslations from "../data/preferred-translations.data"
import textSizes from "../data/text-sizes.data"
import ModalComponent from "../components/modal.component"

export default class SettingsPage extends React.Component {
  constructor(props) {
    super(props)

    const { settings } = this.props
    const { theme, preferredTranslation, textSize, allowCache } = settings

    this.state = {
      toggleModal: true,
      theme: theme,
      preferredTranslation: preferredTranslation,
      textSize: textSize,
      allowCache,
    }
  }

  // Form input change handlers
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
    const { theme, preferredTranslation, textSize, allowCache } = this.state
    this.props.saveClickHandler(
      theme,
      preferredTranslation,
      textSize,
      allowCache
    )
  }

  resetClickHandler = (e) => {
    this.setState({
      theme: this.props.defaultSettings.theme,
      preferredTranslation: this.props.defaultSettings.preferredTranslation,
      textSize: this.props.defaultSettings.textSize,
    })
  }

  // Modal click handlers
  closeClickHandler = (e) => {
    console.log(`Modal CLOSE button clicked.`)
    this.setState({
      toggleModal: false,
    })
  }

  yesClickHandler = (e) => {
    console.log(`Modal YES button clicked.`)
    this.setState({
      toggleModal: false,
      allowCache: true,
    })
  }

  noClickHandler = (e) => {
    console.log(`Modal NO button clicked.`)
    this.setState({
      toggleModal: false,
      allowCache: false,
    })
  }

  cancelClickHandler = (e) => {
    console.log(`Modal CANCEL button clicked.`)
    this.setState({
      toggleModal: false,
    })
  }

  // Render functions
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

  render = () => {
    const { toggleModal, theme, preferredTranslation, textSize } = this.state
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
              value={theme}
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
              value={preferredTranslation}
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
              value={textSize}
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
              className="btn btn-action"
              type="button"
              onClick={this.saveClickHandler}
            >
              <FontAwesomeIcon icon={faSave} /> Save
            </button>
            <button
              className="btn btn-neutral"
              type="button"
              onClick={this.resetClickHandler}
            >
              <FontAwesomeIcon icon={faRotateLeft} /> Default
            </button>
          </div>
        </form>

        <ModalComponent
          toggleModal={toggleModal}
          heading="Notice!"
          closeClickHandler={this.closeClickHandler}
          yesClickHandler={this.yesClickHandler}
          noClickHandler={this.noClickHandler}
          cancelClickHandler={this.cancelClickHandler}
        >
          Allow settings to be saved in your brower's cache?
        </ModalComponent>
      </>
    )
  }
}
