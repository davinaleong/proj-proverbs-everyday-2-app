import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import ConfigData from "./data/config.data"
import MenuStatesData from "./data/menu.states.data"
import PageStatesData from "./data/page.states.data"
import DefaultSettingsData from "./data/default-settings.data"
import TranslationsData from "./data/translations.data"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App
        config={ConfigData}
        menuStates={MenuStatesData}
        pageStates={PageStatesData}
        defaultSettings={DefaultSettingsData}
        translations={TranslationsData}
      />
    </HelmetProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
