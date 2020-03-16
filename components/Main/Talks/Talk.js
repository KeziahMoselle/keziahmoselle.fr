import React from 'react'
import { FiYoutube } from 'react-icons/fi'
import { MdSlideshow } from 'react-icons/md'
import { FaMeetup } from 'react-icons/fa'
import Icon from '../../Icon'

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
              <Icon href={video} icon={<FiYoutube className="video" size={26} />} name="Video" />
            </li>
          )}

          { slides && (
            <li>
              <Icon href={slides} icon={<MdSlideshow className="slides" size={26} />} name="Slides" />
            </li>
          )}

          { url && (
            <li>
              <Icon href={url} icon={<FaMeetup className="url" size={26} />} name="Meetup" />
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default Talk
