import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

const IndexPage = ({ textSize, translation, chapter }) => {
  const textClass = `text ${textSize}`
  const { title, abbr, copyright } = translation
  const { chapter_no, text } = chapter

  return (
    <>
      <h2 className="page-heading">Proverbs {chapter_no}</h2>

      <p className="page-subheading p-b-400">
        {title} ({abbr})
      </p>

      <div className={textClass}>
        <ReactMarkdown children={text} rehypePlugins={[rehypeRaw]} />
      </div>

      <blockquote className="copyright">{copyright}</blockquote>
    </>
  )
}

export default IndexPage
