import React, { useState, Fragment } from 'react'
import './index.css'

function Projects () {
  return (
    <div className="container medium projects">
      <h3>Projets notable</h3>

      <div className="block">
        <Project
          title="Pomodoro"
          subtitle="A simple yet featureful pomodoro in the tray/menubar"
          type="UI/UX, Front-end"
          date="2019"
          github="KeziahMoselle/pomodoro"
          stack={['reactjs', 'electronjs']}
        />

        <Project
          title="Export GitHub Stars"
          subtitle="View / Sort / Export your starred repositories."
          type="UI/UX, Front-end, API"
          date="2018"
          github="KeziahMoselle/export-github-stars"
          stack={['vuejs', 'vuetify']}
        />

        <Project
          title="Gelbooru Client"
          subtitle="A material client to explore an image board."
          type="UI/UX, Front-end, API"
          date="2017-2018"
          github="KeziahMoselle/gelbooru-client"
          stack={['javascript', 'electronjs', 'materialize']}
        />
      </div>
    </div>
  )
}

function Project ({ title, subtitle, type, date, github, stack }) {
  /* Get the file name in /assets/thumbnails */
  const formattedTitle = title.toLowerCase().replace(/\s/g, '_')

  const [stars, setStars] = useState(localStorage.getItem(formattedTitle))

  /* GitHub project */
  if (!stars) {
    fetch(`https://api.github.com/repos/${github}`)
      .then(response => response.json())
      .then(data => {
        console.log(`Old: ${stars} | New: ${data.stargazers_count}`)
        setStars(data.stargazers_count)
        localStorage.setItem(formattedTitle, data.stargazers_count)
      })
  }

  /* Tech stack */
  const techStack = stack.map(tech => (
    <img src={`./assets/logos/${tech}.svg`} alt={`${tech} logo`} title={tech} />
  ))
  

  return (
    <div className="project">
      <div className="project-header">
        <div>
          <h3>{ title }</h3>
          <h4 className="grey">{ subtitle }</h4>
          <h5>
            { type }
            <span className="separator"></span>
            { date }
            { stars &&
              <Fragment>
                <span className="separator"></span>
                { `${stars} ⭐` }
              </Fragment>
            }
          </h5>
        </div>
        { github &&
          <a href={`https://github.com/${github}`}><span>En savoir plus</span></a>
        }
      </div>
      <img
        onClick={() => window.open(`https://github.com/${github}`)}
        src={`./assets/thumbnails/${formattedTitle}.jpg`}
        alt={`${title} thumbnail`}
      />
      <p className="project-footer">{ techStack }</p>
    </div>
  )
}

export default Projects