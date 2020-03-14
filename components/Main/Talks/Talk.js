import React from 'react'
import { FiYoutube } from 'react-icons/fi'
import { MdSlideshow } from 'react-icons/md'
import { FaMeetup } from 'react-icons/fa'

function Talk ({
  title,
  imgSlug,
  date,
  at,
  group,
  groupUrl,
  slides,
  repository,
  url,
  video,
  intl
}) {
  return (
    <div className="talk card inverted">

      <div className="talk-header">
        <a 
          href={groupUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="img-container"
        >
          <img src="/logos/vuestrasbourg.png" alt={group} />
        </a>

        <time dateTime={date}>{ intl.format(new Date(date)) }</time>
      </div>

      <div className="talk-body">
        <h4>{ title }</h4>
      </div>

      <div className="talk-footer">
        <address>{ at }</address>
        
        <ul>
          { video && (
            <li>
              <a
                className="talk-link"
                href={video}
                aria-label="Video"
              >
                <FiYoutube className="video" size={26} />
              </a>
            </li>
          )}

          { slides && (
            <li>
              <a
                className="talk-link"
                href={slides}
                aria-label="Slides"
              >
                <MdSlideshow className="slides" size={26} />
              </a>
            </li>
          )}

          { url && (
            <li>
              <a
                className="talk-link"
                href={url}
                aria-label="Meetup"
              >
                <FaMeetup className="url" size={26} />
              </a>
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default Talk
