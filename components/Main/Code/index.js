import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  GoGitMerge,
  GoGitCommit,
  GoCommentDiscussion,
  GoOrganization,
  GoDiffAdded,
  GoDiffRemoved
} from 'react-icons/go'
import Icon from '../../Icon'

function Code ({ codeStats }) {
  const { t } = useTranslation()

  const mostPopularPR = codeStats.mostPopularPR.user.contributionsCollection.popularPullRequestContribution.pullRequest

  console.log(mostPopularPR)

  return (
    <section id="code" className="container medium code">
      <h3>{ t('code') }</h3>

      <div className="block">

        <div className="card pull-request">
          <GoGitMerge
            className={`${mostPopularPR.state} hide-on-mobile`}
            size={24}
            style={{ float: 'left', marginTop: '6px' }}
          />

          <div className="card-body">
            <a href={mostPopularPR.permalink}>
              <div className="pull-request-title">
                <h4>{ mostPopularPR.title }</h4>
                <div className="owner-avatar hide-on-mobile">
                  <img
                    src={mostPopularPR.repository.owner.avatarUrl}
                    alt={`Repository Owner : ${mostPopularPR.repository.nameWithOwner}`}
                  />
                </div>
              </div>
              <p>{ getExcerpt(mostPopularPR.bodyText) }</p>
            </a>

            <p className="pull-request-info">
              <span>
                <a href={`${mostPopularPR.permalink}/commits`}>
                  <GoGitCommit size={18} />
                  { mostPopularPR.commits.totalCount }
                  <span className="visually-hidden">commits</span>
                </a>
                <span>
                  <GoCommentDiscussion size={18} />
                  { mostPopularPR.timeline.totalCount }
                  <span className="visually-hidden">comments</span>
                </span>
                <span>
                  <GoOrganization size={18} />
                  { mostPopularPR.participants.totalCount }
                  <span className="visually-hidden">participants</span>
                </span>
              </span>

              <a href={`${mostPopularPR.permalink}/files`} aria-label="Pull Request Diff">
                <span>
                  <GoDiffAdded size={18} className="additions" />
                  { mostPopularPR.additions }
                  <span className="visually-hidden">additions</span>
                </span>

                <span>
                  <GoDiffRemoved size={18} className="deletions" />
                  { mostPopularPR.deletions }
                  <span className="visually-hidden">deletions</span>
                </span>
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

function getExcerpt (str, limit = 140) {
  if (!str) return
  const lastWordIndex = str.lastIndexOf(' ', limit)
  return `${str.substr(0, lastWordIndex)}...`
}

export default Code
