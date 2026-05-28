import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { GoStar, GoRepoForked, GoEye, GoPerson } from 'react-icons/go'
import { FiGithub, FiBook, FiBarChart } from 'react-icons/fi'
import toFilename from '../../utils/toFilename'
import Icon from '../../Icon'

function Project ({
  slug,
  title,
  subtitle,
  tags,
  date,
  github,
  stack,
  url,
  repo,
  analytics,
  analyticsUrl,
  views,
  visitors
}) {
  const { t } = useTranslation()

  let projectDate = date

  const repository = repo && repo.user.repository

  if (repository) {
    projectDate = formatDate(repository.createdAt, repository.updatedAt) || date
  }

  /* Tech stack icons at the bottom of the thumbnail */
  const techStack = stack.map((tech, index) => (
    <Icon
      key={index}
      icon={<img
        title={tech}
        src={`/logos/${toFilename(tech)}.svg`}
        alt={tech}
      />}
      name={tech}
    />
  ))

  const tagsChips = tags.map((tag, index) => (
    <span key={index} className="chip-inline">{ tag }</span>
  ))

  return (
    <article className="project" data-aos="fade">

      <div className="project-header show-on-med-and-down">
        <div className="flex space-between valign">
          <div>
            <h3>{ title }</h3>
            <h4 className="grey">{ t(`projects.descriptions.${title}`) }</h4>
          </div>

          {repository && (
            <a
              href={`https://github.com/${github}`}
              className="chip flex-none"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <FiGithub size={26} />
            </a>
          )}
        </div>

        <div className="project-header-supplementary">
          <div>
            { repository && (
              <React.Fragment>
                <span className="chip-inline">
                  { repository.stargazers.totalCount }
                  <GoStar />
                </span>

                <span className="chip-inline">
                  { repository.forkCount }
                  <GoRepoForked />
                </span>
              </React.Fragment>
            )}

            {analytics && (
              <React.Fragment>
                <p className="chip-inline">
                  { analytics.visitors.toLocaleString('en-US', { notation: 'compact', compactDisplay: 'short' }) } { t('analytics.visitors')}
                </p>

                <p className="chip-inline">
                  { analytics.pageviews.toLocaleString('en-US', { notation: 'compact', compactDisplay: 'short' }) } { t('analytics.pageviews') }
                </p>
              </React.Fragment>
            )}

            {(views && visitors) && (
              <React.Fragment>
                <p className="chip-inline">
                  { visitors.toLocaleString('en-US', { notation: 'compact', compactDisplay: 'short' }) } { t('analytics.visitors')}
                </p>

                <p className="chip-inline">
                  { views.toLocaleString('en-US', { notation: 'compact', compactDisplay: 'short' }) } { t('analytics.pageviews') }
                </p>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>

      <Link href={url}>
        <a aria-label={`${title}, ${t(`projects.descriptions.${title}`)}`} target="_blank">
          <div className="project-image">
            <div className="project-body hide-on-med-and-down">
              <div className="project-subtitle">
                <h5>{ projectDate }</h5>
              </div>
              <div className="project-title">
                <h3>{ title }</h3>
                <h4>{ t(`projects.descriptions.${title}`) }</h4>
              </div>
              <div className="project-supplementary">
                { repository && (
                  <React.Fragment>
                    <p className="project-info">
                      { repository.stargazers.totalCount } <GoStar className="spacing" /> <span>Stars</span>
                    </p>
                    { repository.forkCount > 0 && (
                      <p className="project-info">
                        { repository.forkCount } <GoRepoForked className="spacing" /> <span>Forks</span>
                      </p>
                    )}
                  </React.Fragment>
                )}
                {analytics && (
                  <React.Fragment>
                    <p className="project-info">
                      { analytics.visitors.toLocaleString('en-US', { notation: 'compact', compactDisplay: 'short' }) }
                      <GoPerson className="spacing" />
                      <span>{ t('analytics.visitors')}</span>
                    </p>

                    <p className="project-info">
                      { analytics.pageviews.toLocaleString('en-US', { notation: 'compact', compactDisplay: 'short' }) }
                      <GoEye className="spacing" />
                      <span>{ t('analytics.pageviews') }</span>
                    </p>
                  </React.Fragment>
                )}
                {(views && visitors) && (
                  <React.Fragment>
                    <p className="project-info">
                      { visitors.toLocaleString('en-US', { notation: 'compact', compactDisplay: 'short' }) }
                      <GoPerson className="spacing" />
                      <span>{ t('analytics.visitors')}</span>
                    </p>

                    <p className="project-info">
                      { views.toLocaleString('en-US', { notation: 'compact', compactDisplay: 'short' }) }
                      <GoEye className="spacing" />
                      <span>{ t('analytics.pageviews') }</span>
                    </p>
                  </React.Fragment>
                )}
              </div>
            </div>

            <picture>
              <source srcSet={`/thumbnails/${slug}.webp`} type="image/webp"></source>
              <img
                className="project-thumbnail"
                src={`/thumbnails/${slug}.jpg`}
                alt=""
              >
              </img>
            </picture>
          </div>
        </a>
      </Link>

      <div className="project-footer gradient">
        <div className="flex">
          {repository && (
            <a
              href={`https://github.com/${github}`}
              className="chip-inline hide-on-med-and-down"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <FiGithub />
              GitHub
            </a>
          )}
          {analyticsUrl && (
            <a
              href={analyticsUrl}
              className="chip-inline"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <FiBarChart />
              Analytics
            </a>
          )}
          <div className="hide-on-med-and-down">{ tagsChips }</div>
        </div>

        <div className="project-stack">{ techStack }</div>
      </div>
    </article>
  )
}

function formatDate (begin, end) {
  if (!begin || !end) return

  const createdAt = new Date(begin).getFullYear()
  const updatedAt = new Date(end).getFullYear()

  if (createdAt === updatedAt) return createdAt

  return `${createdAt}-${updatedAt}`
}

export default Project
