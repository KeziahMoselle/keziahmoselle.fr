import React from 'react'
import { useTranslation } from 'react-i18next'

import MostActivePR from './MostActivePR'
import UserStats from './UserStats'
import LanguagesStats from './LanguagesStats'
import ContributedTo from './ContributedTo'

function Code ({ codeStats }) {
  const { t } = useTranslation()

  const pullRequest = codeStats.mostActivePR.user.contributionsCollection.popularPullRequestContribution.pullRequest

  const userStats = codeStats.userStats.viewer

  const repositoriesContributedTo = codeStats.userStats.viewer.repositoriesContributedTo.nodes

  return (
    <section id="code" className="container medium code">
      <h3>{ t('code.title') }</h3>

      <MostActivePR pullRequest={pullRequest} />

      <UserStats userStats={userStats} />

      <LanguagesStats userStats={userStats} />

      <ContributedTo repositories={repositoriesContributedTo} />
    </section>
  )
}

export default Code
