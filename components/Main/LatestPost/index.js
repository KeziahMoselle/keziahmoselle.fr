import React from 'react'
import { useTranslation } from 'react-i18next'
import marked from 'marked'

const renderer = {
  heading () { return '' },
  paragraph (str) {
    if (!str) return ''
    return str
  },
  image () { return '' },
  link (href, title, text) { return text }
}

marked.use({ renderer })

function LatestPost ({ latestBlogPost }) {
  const { t, i18n } = useTranslation()

  const intl = new Intl.DateTimeFormat(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const date = intl.format(new Date(latestBlogPost.data.date))

  return (
    <section id="article" className="container medium last-article">
      <h3>{ t('latestPost') }</h3>

      <div className="block">

        <a href={`${process.env.BLOG_URL}${latestBlogPost.slug}`}>
          <div>
            <div className="article card">
              <div className="article-header">
                <div className="article-title">
                  <h3>{ latestBlogPost.data.title }</h3>
                </div>
                <p className="grey" dangerouslySetInnerHTML={{
                  __html: marked(latestBlogPost.excerpt)
                }}></p>
              </div>

              <div className="article-footer">
                <span className="pill">{ t('readArticle') }</span>

                <div>
                  <div className="show-on-tablet-and-down">
                    <small className="chip-inline grey white">
                      { t('published') } { date }
                    </small>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </a>

      </div>
    </section>
  )
}

export default LatestPost
