import React from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'

export default function Project ({
  name,
  slug,
  content,
  data
}) {
  const { t } = useTranslation()

  console.log(arguments)

  const tags = data.tags.map((tag, index) => (
    <span key={index} className="chip-inline">{ tag }</span>
  ))

  const techStack = data.stack.map((tech, index) => (
    <img
      src={`/logos/${tech}.svg`}
      alt={tech}
      title={tech}
      key={index}
    />
  ))

  return (
    <article className="case-study">
      <div className="case-study-header">
        <h2>{ data.title }</h2>
        <h3>{ t(`projects.${data.title}`) }</h3>
        <p className="tags">{ tags }</p>
        <img src={`/thumbnails/${slug}.jpg`} />
        <div className="case-study-info">
          { techStack }
        </div>
      </div>

      <ReactMarkdown
        source={content}
        className="case-study-body"
        escapeHtml={false}
      />
    </article>
  )
}
