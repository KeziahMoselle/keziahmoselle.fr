import React, { Fragment } from 'react'
import { IconContext } from 'react-icons'

import '../lang/i18n'
import '../static/index.css'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App () {
  return (
    <IconContext.Provider value={{ size: 18 }}>
      <Header />
      <Main />
      <Footer />
    </IconContext.Provider>
  )
}

export default App
