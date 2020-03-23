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

  console.log(bigProjects)

  const smallProjects = projects.reduce((acc, project, index) => {
    if (!project.isBigProject) {
      acc.push(<Project key={index} {...project} />)
    }
    return acc
  }, [])

  return (
    <section id="projects" className="container projects">
      <h3>{ t('personalProjects') }</h3>

      <div className="block">
        { bigProjects }
      </div>

      <div className="projects-small grid">
        { smallProjects }
      </div>
    </section>
  )
}

export default Projects
