import React, { Component } from 'react'
import './index.css'

class Skills extends Component {
  render() {
    return (
      <div className="container">
        <h3>Compétences</h3>
        
        <div className="skills-container">
          <h4>Front-end</h4>
          <ul>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Electron.js</li>
          </ul>
        </div>

        <div className="skills-container">
          <h4>Back-end</h4>
          <ul>
            <li>Node.js</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skills-container">
          <h4>Tooling</h4>
          <ul>
            <li>Git / GitHub</li>
            <li>SASS</li>
            <li>Webpack</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Skills