import React, { Component } from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Experience from './Experience'
import Formations from './Formations'

class Main extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Formations />
      </main>
    )
  }
}

export default Main