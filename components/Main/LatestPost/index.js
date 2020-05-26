import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import marked from 'marked'

const renderer = {
  heading (text, level) { return '' },
  paragraph (str) {
    if (!str) return
    return str
  }
}

marked.use({ renderer })

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

        <Link href={`${process.env.BLOG_URL}${latestBlogPost.slug}`}>
          <a>
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
                <a className="pill">{ t('readArticle') }</a>

                <div>
                  <div className="show-on-tablet-and-down">
                    <small className="chip-inline grey white">
                      { t('published') } { date }
                    </small>
                  </div>
                </div>
              </div>

            </div>
          </a>
        </Link>

      </div>
    </section>
  )
}

export default LatestPost
