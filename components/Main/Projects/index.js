import React from 'react'
import { useTranslation } from 'react-i18next'
import Project from './Project'

const projects = [
  {
    title: 'Tempus',
    type: 'UI/UX, Front-End',
    date: '2019',
    github: 'KeziahMoselle/tempus',
    url: 'https://tempus.keziahmoselle.fr/',
    stack: ['reactjs', 'electronjs']
  },
  {
    title: 'Export GitHub Stars',
    type: 'UI/UX, Front-end, API',
    date: '2018',
    github: 'KeziahMoselle/export-github-stars',
    stack: ['vuejs', 'vuetify']
  },
  {
    title: 'Gelbooru Client',
    type: 'UI/UX, Front-end, API',
    date: '2017-2018',
    github: 'KeziahMoselle/gelbooru-client',
    stack: ['javascript', 'electronjs', 'materialize']
  }
]

function Projects () {
  const { t } = useTranslation()

  return (
    <div className="container medium projects">
      <h3>{ t('personalProjects') }</h3>

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