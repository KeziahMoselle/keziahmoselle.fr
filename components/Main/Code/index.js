import React from 'react'
import { useTranslation } from 'react-i18next'

import MostActivePR from './MostActivePR'
import UserStats from './UserStats'

function Code ({ codeStats }) {
  const { t } = useTranslation()

  const pullRequest = codeStats.mostActivePR.user.contributionsCollection.popularPullRequestContribution.pullRequest

  const userStats = codeStats.userStats.user

  return (
    <section id="code" className="container medium code">
      <h3>{ t('code.title') }</h3>

      <MostActivePR pullRequest={pullRequest} />

      <UserStats userStats={userStats} />

    </section>
  )
}

export default Code
