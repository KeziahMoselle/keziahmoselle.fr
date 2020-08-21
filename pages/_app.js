import App from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos'

import '../lang/i18n'
import '../public/index.css'
import 'aos/dist/aos.css'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
