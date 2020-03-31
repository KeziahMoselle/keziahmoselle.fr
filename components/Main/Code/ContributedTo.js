import React from 'react'
import { useTranslation } from 'react-i18next'
import { GoStar } from 'react-icons/go'

function ContributedTo ({ repositories }) {
  const { t } = useTranslation()

  const contributedRepos = repositories.filter(repository => repository.stargazers.totalCount > 0)

  return (
    <div className="block column valign">
      <h4>{ t('code.someContributions') }</h4>

      <div className="contributions-list">
        { contributedRepos.map(repository => (
          <Repository repository={repository} />
        ))}
      </div>
    </div>
  )
}

function Repository ({ repository }) {
  return (
    <div className="repository-contributed">
      <a href={repository.url}>
        <img src={repository.owner.avatarUrl} alt="" />
        <h5>{ repository.nameWithOwner }</h5>
        <span>
          <GoStar size={16} />
          { repository.stargazers.totalCount }
        </span>
      </a>
    </div>
  )
}

export default ContributedTo
