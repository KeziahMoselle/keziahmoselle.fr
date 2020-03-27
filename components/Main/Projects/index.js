import React from 'react'
import { useTranslation } from 'react-i18next'
import Project from './Project'

function Projects ({ projects }) {
  const { t } = useTranslation()

  const bigProjects = projects
    .reduce((acc, project, index) => {
      if (project.isBigProject) {
        acc.push(<Project key={index} {...project} />)
      }
      return acc
    }, [])
    .sort((a, b) => b.props.repo.user.repository.stargazers.totalCount - a.props.repo.user.repository.stargazers.totalCount)

  const smallProjects = projects.reduce((acc, project, index) => {
    if (!project.isBigProject) {
      acc.push(<Project key={index} {...project} />)
    }
    return acc
  }, [])

  return (
    <section id="projects" className="container projects">
      <h3>{ t('projects.title') }</h3>
      <p>{ t('projects.subtitle') }</p>

      <h4>{ t('projects.big') }</h4>
      <div className="block">
        { bigProjects }
      </div>

      <h4>{ t('projects.small') }</h4>
      <div className="projects-small grid">
        { smallProjects }
      </div>
    </section>
  )
}

export default Projects
