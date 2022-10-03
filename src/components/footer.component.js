import React from "react"
import dayjs from "dayjs"
import config from "../data/config.data"

const FooterComponent = (props) => {
  const { appName, author, dateStarted } = config
  const yearStarted = dayjs(dateStarted).format("YYYY")
  const yearToday = dayjs().format("YYYY")

  const year = yearStarted === yearToday ? yearStarted : `${yearStarted} - ${yearToday}`

  return (
    <footer className="main-footer p-y-400">
      <div className="container">
        <p className="ta-center | fsize-200">
          <em>{appName} &copy; {author}, {year}</em>
        </p>
      </div>
    </footer>
  )
}

export default FooterComponent
