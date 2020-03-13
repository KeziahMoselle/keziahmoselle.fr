import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'


export default function Project ({
  name,
  slug,
  content,
  data
}) {
  const { t } = useTranslation()

  return (
    <article className="case-study">
      <img src={`/static/thumbnails/${slug}.jpg`} />

      <h2>{ data.title }</h2>
      <h3>{ t(`projects.${data.title}`) }</h3>

      <pre>{ JSON.stringify(data, null, 2) }</pre>

      <ReactMarkdown source={content} />  
    </article>
  )
}
