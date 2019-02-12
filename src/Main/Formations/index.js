import React, { Component } from 'react'

class Formations extends Component {
  render() {
    return (
      <div className="container">
        <h3>Formations</h3>

        <div className="experience-container">
          <h4>Autodidacte</h4>
          <h5>2014-{new Date().getFullYear()}</h5>
        </div>

        <div className="experience-container">
          <h4>Lycée Blaise Pascal</h4>
          <h5>2016-2018</h5>
        </div>
      </div>
    )
  }
}

export default Formations