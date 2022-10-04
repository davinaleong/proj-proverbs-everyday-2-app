import React from "react"

const TranslationsPage = (props) => {
  const { translations } = props
  const translationsJsx = []

  translations.forEach(({ title, abbr, slug }, index) => {
    translationsJsx.push(
      <button
        className="btn btn-card"
        type="button"
        key={`t` + index}
        onClick={() => props.translationClickHandler(slug)}
      >
        <h3 className="fsize-600">{abbr}</h3>
        <p>{title}</p>
      </button>
    )
  })

  return (
    <>
      <h2 className="page-heading p-b-400">Translations</h2>

      <div className="card-grid">{translationsJsx}</div>
    </>
  )
}

export default TranslationsPage
