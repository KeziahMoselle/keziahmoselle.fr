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
    <div className="block space-around valign reverse-on-mobile">
      <div className="user-stats">
        <span className="card inverted">
          <GoIssueOpened size={24} className="OPEN" />
          { userStats.issues.totalCount } issues
        </span>
        <span className="card inverted">
          <GoGitPullRequest size={24} className="MERGED" />
          { userStats.pullRequests.totalCount } pull requests
        </span>
        <span className="card inverted">
          <GoRepo size={24} className="NEUTRAL" />
          { userStats.repositories.totalCount } repositories
        </span>
      </div>

      <h4>{ t('code.userStats') }</h4>
    </div>
  )
}

export default UserStats
