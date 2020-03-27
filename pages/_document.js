import Document, { Head, Main, NextScript } from 'next/document'
import Seo from '../components/Seo'

class HTMLDocument extends Document {
  render () {
    return (
      <html lang="fr">
        <Head>
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
