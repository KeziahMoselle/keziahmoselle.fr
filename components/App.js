import React, { Fragment } from 'react'

import '../lang/i18n'
import '../static/index.css'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App () {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default App
