import React from 'react'
import {
  GoMarkGithub,
  GoRepoForked,
  GoGitCommit,
  GoClock,
  GoCode,
  GoRepo
} from 'react-icons/go'
import {
  MdFiberManualRecord,
  MdDateRange
} from 'react-icons/md'
import {
  IoMdPricetag
} from 'react-icons/io'
import Icon from '../../Icon'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'

export default function Project ({
  name,
  slug,
  content,
  data
}) {
  const { t } = useTranslation()

  console.log(arguments)

  const tags = data.tags.map((tag, index) => (
    <span key={index} className="chip-inline">{ tag }</span>
  ))

  const InfoCard = (
    <div className="card">
      <div className="card-header">
        <GoRepo size={32} />
        <h4>Project</h4>
      </div>

      <div className="card-body">
        <div className="card-info">
          <Icon icon={<MdFiberManualRecord size={28} fill="#20e289" />} name="Status" />
          <span>Released</span>
        </div>

        <div className="card-info">
          <Icon icon={<MdDateRange size={28} />} name="Created date" />
          <span>{ data.date }</span>
        </div>

        <div className="card-info">
          <Icon icon={<IoMdPricetag size={28} />} name="Version" />
          <span>1.0.0</span>
        </div>
      </div>
    </div>
  )

  const GitHubCard = (
    <div className="card">
      <div className="card-header">
        <GoMarkGithub size={32} />
        <h4>GitHub</h4>
      </div>

      <div className="card-body">
        <div className="card-info">
          <Icon icon={<GoGitCommit size={28} />} name="Commits" />
          <span>300</span>
        </div>

        <div className="card-info">
          <Icon icon={<GoRepoForked size={28} />} name="Forks" />
          <span>14</span>
        </div>

        <div className="card-info">
          <Icon icon={<GoClock size={28} />} name="Last Activity" />

          <span>2 days ago</span>
        </div>
      </div>
    </div>
  )

  const CodeCard = (
    <div className="card" style={{
      boxShadow: `rgb(0, 122, 204) 0px 5px 0px 0px inset,
                    0 4px 4px rgba(0, 0, 0, 0.12)`
    }}>
      <div className="card-header">
        <GoCode size={32} />
        <h4>Code</h4>
      </div>

      <div className="card-body">
        { data.stack.map((tech, index) => (
          <div className="card-info">
            <img
              src={`/logos/${tech}.svg`}
              alt={tech}
              title={tech}
              key={index}
            />
            <span>{ tech }</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <article className="case-study">
      <div className="case-study-header">
        <h2>{ data.title }</h2>
        <h3>{ t(`projects.${data.title}`) }</h3>
        <p className="tags">{ tags }</p>
        <img src={`/thumbnails/${slug}.jpg`} />
        <div className="case-study-info">
          { InfoCard }

          { GitHubCard }

          { CodeCard }
        </div>
      </div>

      <ReactMarkdown
        source={content}
        className="case-study-body"
        escapeHtml={false}
      />
    </article>
  )
}
