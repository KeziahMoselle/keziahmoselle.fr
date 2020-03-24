import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  GoIssueOpened,
  GoGitPullRequest,
  GoRepo
} from 'react-icons/go'

function UserStats ({ userStats }) {
  const { t } = useTranslation()

  return (
    <div className="block space-around valign">
      <div className="user-stats">
        <a
          className="card inverted translate-y"
          href="https://github.com/KeziahMoselle"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <GoIssueOpened size={24} className="OPEN" />
          { userStats.issues.totalCount } issues
        </a>
        <a
          className="card inverted translate-y"
          href="https://github.com/KeziahMoselle"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <GoGitPullRequest size={24} className="MERGED" />
          { userStats.pullRequests.totalCount } pull requests
        </a>
        <a
          className="card inverted translate-y"
          href="https://github.com/KeziahMoselle?tab=repositories"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <GoRepo size={24} className="NEUTRAL" />
          { userStats.repositories.totalCount } repositories
        </a>
      </div>
    </div>
  )
}

export default UserStats
