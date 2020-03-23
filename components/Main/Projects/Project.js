import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { GoStar, GoRepoForked } from 'react-icons/go'
import toFilename from '../../utils/toFilename'

function Project ({
  slug,
  title,
  subtitle,
  tags,
  date,
  github,
  stack,
  url,
  repo
}) {
  const { t } = useTranslation()

  const repository = repo && repo.user.repository

  const projectDate = formatDate(repository.createdAt, repository.updatedAt) || date

  console.log(repository)

  /* Tech stack icons at the bottom of the thumbnail */
  const techStack = stack.map((tech, index) => (
    <img
      src={`/logos/${toFilename(tech)}.svg`}
      alt={tech}
      key={index}
    />
  ))

  const tagsChips = tags.map((tag, index) => (
    <span key={index} className="chip-inline">{ tag }</span>
  ))

  return (
    <article className="project">

      <div className="project-header show-on-med-and-down">
        <h3>{ title }</h3>
        <h4 className="grey">{ t(`projects.${title}`) }</h4>
        <div className="project-header-supplementary">
          <div>{ tagsChips }</div>
        </div>
      </div>

      <Link href={`/project/${slug}`}>
        <a aria-label={`${title}, ${t(`projects.${title}`)}`}>
          <div className="project-image">
            <div className="project-body hide-on-med-and-down">
              <div className="project-subtitle">
                <h5>{ projectDate }</h5>
              </div>
              <div className="project-title">
                <h3>{ title }</h3>
                <h4>{ t(`projects.${title}`) }</h4>
              </div>
              <div className="project-supplementary">
                <p className="project-info">
                  { repository.stargazers.totalCount } <GoStar className="spacing" /> <span>Stars</span>
                </p>
                { repository.forkCount > 0 && (
                  <p className="project-info">
                    { repository.forkCount } <GoRepoForked className="spacing" /> <span>Forks</span>
                  </p>
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

            <div className="overlap show-on-mobile">
              <span className="chip-inline">
                { repository.stargazers.totalCount }
                <GoStar />
              </span>
            </div>
          </div>
        </a>
      </Link>

      <div className="project-footer">
        <div className="hide-on-med-and-down">{ tagsChips }</div>

        <a
          className="pill show-on-med-and-down"
          href={url || `https://github.com/${github}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span>{ url ? t('seeWebsite') : t('seeRepo') }</span>
        </a>

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
