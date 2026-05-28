import React from 'react'
import { useTranslation } from 'react-i18next'
import Project from './Project'

function Projects ({ projects }) {
  const { t } = useTranslation()

  const MyProjects = projects
    .reduce((acc, project, index) => {
      if (project.isBigProject) {
        acc.push(<Project key={index} {...project} />)
      }
      return acc
    }, [])
    .sort((a, b) => a.props.order - b.props.order)

  return (
    <section id="projects" className="container projects">
      <h3>{ t('projects.title') }</h3>
      <div className="block">
        { MyProjects }
      </div>
    </section>
  )
}

export default Projects
