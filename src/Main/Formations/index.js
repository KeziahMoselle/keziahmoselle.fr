import React, { Component } from 'react'
import './index.css'

class Formations extends Component {
  render() {
    return (
      <div className="container formations">
        <h3>Formations</h3>

        <div className="block">
          <h4>Autodidacte</h4>
          <h5>2014-{new Date().getFullYear()}</h5>
        </div>

        <div className="block">
          <h4>Lycée Blaise Pascal</h4>
          <h5>2016-2018</h5>
        </div>
      </div>
    )
  }
}

export default Formations