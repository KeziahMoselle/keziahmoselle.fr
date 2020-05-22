import React from 'react'
import { useTranslation } from 'react-i18next'

function LatestPost ({ latestBlogPost }) {
  const { t, i18n } = useTranslation()

  console.log(latestBlogPost)

  const intl = new Intl.DateTimeFormat(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const date = intl.format(new Date(latestBlogPost.data.date))

  return (
    <section id="talks" className="container medium talks">
      <h3>{ t('latestPost') }</h3>

      <div className="block">

        <div className="article card">
          <div className="article-header">
            <div className="article-title">
              <h3>{ latestBlogPost.data.title }</h3>
              <small className="grey show-on-desktop">{ t('published') } { date }</small>
            </div>
            <p className="grey">{ latestBlogPost.excerpt }</p>
          </div>

          <div className="article-footer">
            <p className="pill">
              <span>{ t('readArticle') }</span>
            </p>

            <div>
              <div className="show-on-tablet-and-down">
                <small className="chip-inline grey white show-on-tablet-and-down">
                  { t('published') } { date }
                </small>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default LatestPost
