import React, { Component } from 'react'
import Hero from './Hero'
import Skills from './Skills'
import './index.css'

class Main extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Skills />
      </main>
    )
  }
}

export default Main