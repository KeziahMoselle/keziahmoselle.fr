import React, { Fragment } from 'react'
import { IconContext } from 'react-icons'

import Header from './Header'
import { Main } from './Main'
import Footer from './Footer'

function App ({ children, navLinks }) {
  return (
    <IconContext.Provider value={{ size: 18 }}>
      <Header navLinks={navLinks} />
      <main> { children } </main>
      <Footer />
    </IconContext.Provider>
  )
}

export default App
