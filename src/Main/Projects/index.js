import React, { useState } from 'react'
import './index.css'
import ky from 'ky'

function Projects () {
  return (
    <div className="container medium projects">
      <h3>Featured projects</h3>

      <div className="block">
        <Project
          title="Pomodoro"
          subtitle="A simple yet featureful pomodoro in the tray/menubar"
          type="UI/UX, Frontend"
          date="2019"
          github="KeziahMoselle/pomodoro"
        />

        <Project
          title="Export GitHub Stars"
          subtitle="View / Sort / Export your Starred repositories."
          type="UI/UX, Frontend, GitHub API"
          date="2018"
          github="KeziahMoselle/export-github-stars"
        />

        <Project
          title="Gelbooru Client"
          subtitle="A material client to explore an image board."
          type="UI/UX, Frontend, API"
          date="2017-2018"
          github="KeziahMoselle/gelbooru-client"
        />
      </div>
    </div>
  )
}

function Project ({ title, subtitle, type, date, github }) {
  const [stars, setStars] = useState(null)
  /* Get the file name in /assets/thumbnails */
  const img = title.toLowerCase().replace(/\s/g, '_')

  /* GitHub project */
  if (github) {
    (async () => {
      const data = await ky.get(`https://api.github.com/repos/${github}`).json()
      setStars(data.stargazers_count)
    })()
  }

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
              <>
                <span className="separator"></span>
                { `${stars} ⭐` }
              </>
            }
          </h5>
        </div>
        <a href="/"><span>Read more</span></a>
      </div>
      <img src={`./assets/thumbnails/${img}.jpg`} alt={`${title} thumbnail`} />
    </div>
  )
}

export default Projects