import React, { Component } from 'react'
import './index.css'

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>Keziah <br/> Moselle</h1>
        <h2>Front-end developer.</h2>
        <p>
          Autodidacte de 18 ans, je suis passioné par le développement web et l'UI/UX depuis 2014.
        </p>
        <button>Get in touch</button>
      </div>
    )
  }
}

export default Hero