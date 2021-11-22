import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiYoutube } from 'react-icons/fi'
import { MdSlideshow } from 'react-icons/md'
import { FaMeetup } from 'react-icons/fa'
import Icon from '../../Icon'

function Talk ({
  slug,
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
  const { t } = useTranslation()

  return (
    <div className="talk card inverted">

      <div className="talk-header">
        <a
          href={groupUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="img-container"
        >
          <img src={`/logos/${group.toLowerCase()}.png`} alt={group} />
        </a>

        <time dateTime={date}>{ intl.format(new Date(date)) }</time>
      </div>

      <div className="talk-body">
        <h4>{ t(`talks.${slug}`) }</h4>
      </div>

      <div className="talk-footer">
        <address>{ at }</address>

        <ul>
          { video && (
            <li>
              <Icon
                className="talk-link"
                href={video}
                icon={<FiYoutube className="video" size={26} />}
                name="Video" />
            </li>
          )}

          { slides && (
            <li>
              <Icon
                className="talk-link"
                href={slides}
                icon={<MdSlideshow className="slides" size={26} />}
                name="Slides" />
            </li>
          )}

          { url && (
            <li>
              <Icon
                className="talk-link"
                href={url}
                icon={<FaMeetup className="url" size={26} />}
                name="Meetup" />
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default Talk
