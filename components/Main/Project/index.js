import React, { useEffect } from 'react'
import {
  GoMarkGithub,
  GoRepoForked,
  GoGitCommit,
  GoClock,
  GoCode,
  GoRepo,
  GoGlobe
} from 'react-icons/go'
import {
  MdFiberManualRecord,
  MdDateRange
} from 'react-icons/md'
import { IoMdPricetag } from 'react-icons/io'
import { FiExternalLink } from 'react-icons/fi'
import Icon from '../../Icon'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import mediumZoom from 'medium-zoom'

export default function Project ({ project, github }) {
  const { t } = useTranslation()

  const { slug, content, data } = project

  const release = github.repository.releases.nodes[0]
  const isPrerelease = (release && release.isPrerelease) || false

  const tags = data.tags.map((tag, index) => (
    <span key={index} className="chip-inline">{ tag }</span>
  ))

  useEffect(() => {
    subscribeImagesZoom()
  }, [])

  function subscribeImagesZoom () {
    window.addEventListener('load', () => {
      const allImages = Array.from(document.querySelectorAll('.case-study-body img'))
      const noZoomImages = allImages
        .filter(img => !img.classList.contains('medium-zoom-image'))
      mediumZoom(noZoomImages)
    })
  }

  return (
    <article className="case-study">
      <div className="case-study-header">
        <h2>{ data.title }</h2>
        <h3>{ t(`projects.descriptions.${data.title}`) }</h3>
        <p className="tags">{ tags }</p>
        <div className="case-study-thumbnail">
          <a
            href={data.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img src={`/thumbnails/${slug}.jpg`} alt={`${data.title} link to website`} />
          </a>
          <a
            className="btn white bordered"
            href={data.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            { t('viewProject') }
            <FiExternalLink className="right" />
          </a>
        </div>

        <div className="case-study-info">

          <span>
            { !isPrerelease && (
              <React.Fragment>
                <Icon icon={<MdFiberManualRecord size={16} fill="var(--success)" />} name="Status" />
              Released
              </React.Fragment>
            ) || (
              <React.Fragment>
                <Icon icon={<MdFiberManualRecord size={16} fill="var(--error)" />} name="Status" />
              Not released
              </React.Fragment>
            )}
          </span>

          <span>
            <Icon icon={<MdDateRange size={16} />} name="Created date" />
            { new Date(github.repository.pushedAt).getFullYear() || data.date }
          </span>

          <span>
            {(release && release.name) && (
              <React.Fragment>
                <Icon icon={<IoMdPricetag size={16} />} name="Version" />
                { release.name }
              </React.Fragment>
            )}
          </span>
        </div>
      </div>

      <ReactMarkdown
        source={content}
        className="case-study-body markdown-body"
        escapeHtml={false}
      />
    </article>
  )
}
