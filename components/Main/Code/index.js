import React from 'react'
import { useTranslation } from 'react-i18next'

import MostActivePR from './MostActivePR'
import UserStats from './UserStats'
import LanguagesStats from './LanguagesStats'
import ContributedTo from './ContributedTo'

function Code ({ codeStats }) {
  const { t } = useTranslation()

  const pullRequest = codeStats.mostActivePR.user.contributionsCollection.popularPullRequestContribution.pullRequest

  return (
    <section id="code" className="container medium code">
      <h3>{ t('code.title') }</h3>

      <UserStats userStats={codeStats.userStats.viewer} />

      <MostActivePR pullRequest={pullRequest} />

      <LanguagesStats userStats={codeStats.userStats.viewer} />

      <ContributedTo repositories={codeStats.repositoriesContributedTo} />
    </section>
  )
}

export default Code
