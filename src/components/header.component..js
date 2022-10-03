import React, { useState } from "react"
import menuStates from "../data/menu.states.data"

const HeaderComponent = (props) => {
  const [expandMenu, setExpandMenu] = useState(false)

  return (
    <header className="main-header" data-open={expandMenu}>
      <div className="container">
        <div className="main-header-grid | p-y-200">
          <nav className="main-nav main-nav-left">
            <ul className="nav-list" role="list">
              <li className="nav-item">
                <button
                  className="btn btn-link"
                  type="button"
                  data-element="collapse-menu"
                  onClick={() => setExpandMenu(false)}
                >
                  Close
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link" type="button">
                  Today's Proverb
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link" type="button">
                  Translations
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link" type="button">
                  View Chapters
                </button>
              </li>
            </ul>
          </nav>

          <h1 className="main-header-brand">Proverbs Everyday</h1>

          <nav className="main-nav main-nav-right">
            <ul className="nav-list" role="list">
              <li className="nav-item">
                <button className="btn btn-link" type="button">
                  Back
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link"
                  data-element="expand-menu"
                  type="button"
                  onClick={() => setExpandMenu(true)}
                >
                  Menu
                </button>
              </li>
            </ul>
          </nav>

          <p className="main-header-date">Today: 29 Sep 2022</p>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
