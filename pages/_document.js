import Document, { Head, Main, NextScript } from 'next/document'

class HTMLDocument extends Document {
  render () {
    return (
      <html lang="fr">
        <Head>
          <meta	name="viewport"	content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <meta name="title" content="Keziah MOSELLE" />
          <meta name="description" content="Développeur front-end. Autodidacte de 18 ans, je suis passioné par le développement web et l'UI/UX depuis 2014." />

          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="canonical" href="https://keziahmoselle.fr/" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://keziahmoselle.fr/" />
          <meta property="og:title" content="Keziah MOSELLE" />
          <meta property="og:description" content="Développeur front-end. Autodidacte de 18 ans, je suis passioné par le développement web et l'UI/UX depuis 2014." />
          <meta property="og:image" content="https://keziahmoselle.fr/static/cover.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://keziahmoselle.fr/" />
          <meta property="twitter:title" content="Keziah MOSELLE" />
          <meta property="twitter:description" content="Développeur front-end. Autodidacte de 18 ans, je suis passioné par le développement web et l'UI/UX depuis 2014." />
          <meta property="twitter:image" content="https://keziahmoselle.fr/static/cover.png" />
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
