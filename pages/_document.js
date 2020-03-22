import Document, { Head, Main, NextScript } from 'next/document'

const name = 'Keziah MOSELLE'
const domainUrl = 'https://keziahmoselle.fr/'
const metaDescription = "Portfolio de Keziah Moselle, développeur front-end autodidacte depuis 6 ans et passionné par le développement web et l'UI/UX depuis 2014."
const coverImageUrl = 'https://keziahmoselle.fr/cover.png'

class HTMLDocument extends Document {
  render () {
    return (
      <html lang="fr">
        <Head>
          <meta	name="viewport"	content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <meta name="title" content={name} />
          <meta name="description" content={metaDescription} />

          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href={domainUrl} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={domainUrl} />
          <meta property="og:title" content={name} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={coverImageUrl} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={domainUrl} />
          <meta property="twitter:title" content={name} />
          <meta property="twitter:description" content={metaDescription} />
          <meta property="twitter:image" content={coverImageUrl} />
          <noscript>
            <div className="flex center">
              <div className="card noscript">
                JavaScript est désactivé, ce site fonctionnera mieux si vous l'activez.
              </div>
            </div>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default HTMLDocument
