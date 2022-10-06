import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSave,
  faRotateLeft,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"

import ModalComponent from "../components/modal.component"

import ConfigData from "../data/config.data"
import ThemesData from "../data/themes.data"
import PreferredTranslationsData from "../data/preferred-translations.data"
import TextSizesData from "../data/text-sizes.data"
import AllowCachesData from "../data/allow-caches.data"

export default class SettingsPage extends React.Component {
  constructor(props) {
    super(props)

    const { settings } = this.props
    const { theme, preferredTranslation, textSize, allowCache } = settings

    this.state = {
      toggleModal: false,
      theme,
      preferredTranslation,
      textSize,
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

  allowCacheChangeHandler = (e) => {
    this.setState({
      allowCache: e.target.value,
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
    const { theme, preferredTranslation, textSize, allowCache } =
      this.props.defaultSettings
    this.setState({
      theme,
      preferredTranslation,
      textSize,
      allowCache,
    })
  }

  removeClickHandler = (e) => {
    console.log(`Remove cached settings.`)
    window.localStorage.removeItem(ConfigData.cacheKey)
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
    const { toggleModal, theme, preferredTranslation, textSize, allowCache } =
      this.state
    const note = allowCache ? (
      <p>
        Settings will be saved to your browser's cache when "Save" is clicked.
      </p>
    ) : (
      <></>
    )

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
              {this.renderOptions(ThemesData, `t`)}
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
              {this.renderOptions(PreferredTranslationsData, `pt`)}
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
              {this.renderOptions(TextSizesData, `ts`)}
            </select>
          </div>

          <div className="form-group-flex">
            <label htmlFor="allowCache" className="form-label">
              Save to Cache
            </label>
            <select
              name="allowCache"
              id="allowCache"
              className="form-input"
              value={allowCache}
              onChange={this.allowCacheChangeHandler}
            >
              {this.renderOptions(AllowCachesData, `ts`)}
            </select>
          </div>

          <p className="clr-danger-400">
            Click "save" for changes to take place.
          </p>
          {note}

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
            <button
              className="btn btn-neutral"
              type="button"
              onClick={this.removeClickHandler}
            >
              <FontAwesomeIcon icon={faTrashAlt} /> Remove Cached Settings
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
