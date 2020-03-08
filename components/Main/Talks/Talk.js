import React from 'react'
import { FiVideo } from 'react-icons/fi'
import { MdSlideshow } from 'react-icons/md'
import { FaMeetup } from 'react-icons/fa'

function Talk ({
  title,
  slug,
  date,
  at,
  summary,
  slides,
  repository,
  url,
  video
}) {
  return (
    <div className="talk card inverted">
      <div className="talk-header">
        <h3>{ title }</h3>

        { summary && (
          <ol>
            { summary.map(content => <li>{ content }</li>) }
          </ol>
        )}

        <span>
          <h4>{ at }</h4>
          <h5>{ date }</h5>
        </span>
      </div>

      <div className="talk-body">
        <a
          className="talk-thumbnail"
          href={video || slides} target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img src={`/static/thumbnails/${slug}.jpg`} alt={`${title} thumbnail`} />
        </a>
      </div>

      <div className="talk-links">
        <a
          className="talk-link"
          href={video}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FiVideo className="video" size={26} title="Video" />
        </a>
        <a
          className="talk-link"
          href={slides}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <MdSlideshow className="slides" size={26} title="Slides" />
        </a>
        <a
          className="talk-link"
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaMeetup className="url" size={26} title="URL" />
        </a>
      </div>
    </div>
  )
}

export default Talk
