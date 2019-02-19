import React, { Component } from 'react'
import './index.css'

class Skills extends Component {
  render() {
    return (
      <div className="container medium skills">
        <h3>Compétences</h3>
        
        <div className="block">
          <h4>Front-end</h4>

          <div className="center">
            <Skill name="JavaScript" />
            <Skill name="Vue.js" />
            <Skill name="React.js" />
            <Skill name="React Native" />
            <Skill name="Electron.js" />
          </div>
        </div>

        <div className="block">
          <h4>Back-end</h4>

          <div className="center">
            <Skill name="Node.js" />
            <Skill name="PHP" />
            <Skill name="MySQL" />
          </div>
        </div>

        <div className="block">
          <h4>Outils</h4>

          <div className="center">
            <Skill name="Git" />
            <Skill name="GitHub" />
            <Skill name="SASS" />
            <Skill name="Webpack" />
          </div>
        </div>
      </div>
    )
  }
}

function Skill ({ name }) {
  const img = name.toLowerCase().replace(' ', '').replace('.', '')

  return (
    <div className="skill">
      <img src={`./assets/logos/${img}.svg`} alt={`${name} logo`}></img>
      <span>{name}</span>
    </div>
  )
}

export default Skills