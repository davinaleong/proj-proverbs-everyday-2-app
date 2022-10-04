import React from "react"

const ChaptersPage = ({ chapters, chapterClickHandler }) => {
  const chapterJsx = []
  chapters.forEach(({ slug, chapter_no }, index) => {
    chapterJsx.push(
      <button className="btn btn-card | fsize-600" type="button" key={`c` + index} onClick={() => chapterClickHandler(slug)}>
        {chapter_no}
      </button>
    )
  })

  return (
    <>
      <h2 className="page-heading p-b-400">Chapters</h2>

      <div className="card-grid">{chapterJsx}</div>
    </>
  )
}

export default ChaptersPage
