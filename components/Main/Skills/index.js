import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return (
      <div className="container medium skills">
        <h3>Compétences</h3>
        
        <div className="block">
          <div className="flex column center valign">
            <h4>Front-End</h4>
            <img src="/static/skills/front-end.svg" alt="Front-End skills" />
          </div>

          <div className="flex column center valign">
            <h4>Back-End</h4>
            <img src="/static/skills/back-end.svg" alt="Back-End skills" />
          </div>
        </div>

        <div className="block center column valign">
          <h4>Outils</h4>
          
          <div className="tools">
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
      <img src={`/static/logos/${img}.svg`} alt={`${name} logo`}></img>
      <span>{name}</span>
    </div>
  )
}

export default Skills