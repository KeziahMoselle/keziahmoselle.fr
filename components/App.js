import React, { Fragment } from 'react'

import Seo from './Seo'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App () {
  return (
    <Fragment>
      <Seo />

      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default App