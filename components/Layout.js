import React, { Fragment } from 'react'
import { IconContext } from 'react-icons'

import Header from './Header'
import { Main } from './Main'
import Footer from './Footer'

function App ({ children }) {
  return (
    <IconContext.Provider value={{ size: 18 }}>
      <Header />
      <main> { children } </main>
      <Footer />
    </IconContext.Provider>
  )
}

export default App
