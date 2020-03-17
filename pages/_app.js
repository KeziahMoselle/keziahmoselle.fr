import App from 'next/app'

import '../lang/i18n'
import './index.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
