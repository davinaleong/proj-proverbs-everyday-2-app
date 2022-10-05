import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faChevronLeft,
  faBible,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons"
import dayjs from "dayjs"

const HeaderComponent = ({
  gotoBack,
  todaysProverbClickHandler,
  gotoTranslationsPage,
  gotoChaptersPage,
}) => {
  const [expandMenu, setExpandMenu] = useState(false)
  const today = dayjs().format("D MMM YYYY")

  return (
    <header className="main-header" data-open={expandMenu}>
      <div className="container">
        <div className="main-header-grid | p-y-200">
          <nav className="main-nav main-nav-left">
            <ul className="nav-list">
              <li className="nav-item">
                <button
                  className="btn btn-link"
                  type="button"
                  data-element="collapse-menu"
                  onClick={() => setExpandMenu(false)}
                >
                  <FontAwesomeIcon icon={faTimes} /> Close
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={todaysProverbClickHandler}
                >
                  Today's Proverb
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={gotoTranslationsPage}
                >
                  Translations
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={gotoChaptersPage}
                >
                  Other Chapters
                </button>
              </li>
            </ul>
          </nav>

          <div className="main-header-center">
            <h1 className="main-header-brand">
              <FontAwesomeIcon icon={faBible} /> Proverbs Everyday
            </h1>
            <p className="main-header-date">
              <FontAwesomeIcon icon={faClock} /> Today: {today}
            </p>
          </div>

          <nav className="main-nav main-nav-right">
            <ul className="nav-list">
              <li className="nav-item">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={gotoBack}
                >
                  <FontAwesomeIcon icon={faChevronLeft} /> Back
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link"
                  data-element="expand-menu"
                  type="button"
                  onClick={() => setExpandMenu(true)}
                >
                  <FontAwesomeIcon icon={faBars} /> Menu
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
