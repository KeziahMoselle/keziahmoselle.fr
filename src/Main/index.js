import React, { Component } from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Experience from './Experience'

class Main extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Skills />
        <Experience />
      </main>
    )
  }
}

export default Main