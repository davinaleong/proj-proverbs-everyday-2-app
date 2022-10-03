import React from "react"

const TranslationsPage = () => {
  return (
    <>
      <h2 className="page-heading p-b-400">Translations</h2>

      <div className="card-grid">
        <button className="btn btn-card" type="button">
          <h3 className="fsize-600">KJV</h3>
          <p>King James Version</p>
        </button>
        <button className="btn btn-card" type="button">
          <h3 className="fsize-600">YLT</h3>
          <p>Young's Literal Translation</p>
        </button>
      </div>
    </>
  )
}

export default TranslationsPage
