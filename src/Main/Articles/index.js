import React from 'react'
import Article from './Article'
import './index.css'

function Projects () {
  return (
    <div className="container medium articles">
      <h3>Last articles</h3>

      <div className="block">
        <Article
          title="Pomodoro"
          subtitle="A simple yet featureful pomodoro in the tray/menubar"
          tags="UI/UX, Frontend"
          date="2019"
        />

        <Article
          title="Export GitHub Stars"
          subtitle="View / Sort / Export your starred repositories."
          tags="UI/UX, Frontend, API"
          date="2018"
        />

        <Article
          title="Gelbooru Client"
          subtitle="A material client to explore an image board."
          tags="UI/UX, Frontend, API"
          date="2017-2018"
        />
      </div>
    </div>
  )
}

export default Projects