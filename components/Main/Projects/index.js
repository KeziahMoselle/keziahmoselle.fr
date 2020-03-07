import React from 'react'
import { useTranslation } from 'react-i18next'
import Project from './Project'

const projects = [
  {
    title: 'Tempus',
    tags: ['UI/UX', 'Front-End'],
    date: '2019',
    github: 'KeziahMoselle/tempus',
    url: 'https://tempus.keziahmoselle.fr/',
    stack: ['reactjs', 'electronjs']
  },
  {
    title: 'Ribbon',
    tags: ['UI/UX', 'Front-End', 'Mobile', 'API', 'OAuth'],
    date: '2020',
    github: 'KeziahMoselle/ribbon',
    stack: ['reactjs', 'reactnative', 'typescript']
  }
]

const othersProjects = [
  {
    title: 'Export GitHub Stars',
    tags: ['UI/UX', 'Front-End', 'API'],
    date: '2018',
    github: 'KeziahMoselle/export-github-stars',
    stack: ['vuejs', 'vuetify']
  },
  {
    title: 'Gelbooru Client',
    tags: ['UI/UX', 'Front-End', 'API'],
    date: '2017-2018',
    github: 'KeziahMoselle/gelbooru-client',
    stack: ['javascript', 'electronjs', 'materialize']
  }
]

function Projects () {
  const { t } = useTranslation()

  const bigProjects = projects.map((project, index) => (
    <Project
      key={index}
      {...project}
    />
  ))

  const smallProjects = othersProjects.map((project, index) => (
    <Project
      key={index}
      {...project}
    />
  ))

  return (
    <div className="container projects">
      <h3>{ t('personalProjects') }</h3>

      <div className="block">
        { bigProjects }
      </div>

      <div className="grid">
        { smallProjects }
      </div>
    </div>
  )
}

export default Projects
