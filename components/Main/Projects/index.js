import React from 'react'
import Project from './Project'

const projects = [
  {
    title: 'Tempus',
    subtitle: 'A simple yet featureful pomodoro in the tray/menubar',
    type: 'UI/UX, Front-End',
    date: '2019',
    github: 'KeziahMoselle/tempus',
    url: 'https://tempus.keziahmoselle.fr/',
    stack: ['reactjs', 'electronjs']
  },
  {
    title: 'Export GitHub Stars',
    subtitle: 'View / Sort / Export your starred repositories.',
    type: 'UI/UX, Front-end, API',
    date: '2018',
    github: 'KeziahMoselle/export-github-stars',
    stack: ['vuejs', 'vuetify']
  },
  {
    title: 'Gelbooru Client',
    subtitle: 'A material client to explore an image board.',
    type: 'UI/UX, Front-end, API',
    date: '2017-2018',
    github: 'KeziahMoselle/gelbooru-client',
    stack: ['javascript', 'electronjs', 'materialize']
  }
]

function Projects () {
  return (
    <div className="container medium projects">
      <h3>Projets personnels</h3>

      <div className="block">
        {
          projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              type={project.type}
              date={project.date}
              github={project.github}
              url={project.url}
              stack={project.stack}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Projects