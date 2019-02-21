import React from 'react'

import '../static/index.css'

import Seo from './Seo'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App () {
  return (
    <div>
      <Seo />
  
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
