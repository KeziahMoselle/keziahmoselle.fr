import React, { useState, useEffect, Fragment } from 'react'
import Project from './Project'

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

export default Projects