import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { FiChevronDown } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

function Achievement ({
  name,
  thumbnail,
  year,
  link,
  content,
  rank,
  won
}) {
  const { t } = useTranslation()
  const [isExtended, setIsExtended] = useState(false)
  const props = useSpring({
    maxHeight: isExtended ? '1000px' : '0px'
  })

  const toggleExpanded = () => setIsExtended(!isExtended)

  return (
    <div
      className="achievement"
      aria-expanded={isExtended}
      data-aos="fade"
    >

      { won && (
        <div className="won-overlap">
          <div className="badge">🏆</div>
        </div>
      )}

      <button
        className="expanded-overlap"
        onClick={toggleExpanded}
        tabIndex="-1"
        aria-label="Open achievement card"
      >
        <FiChevronDown size={24} />
      </button>

      <div className="achievement-thumbnail-container">
        <div
          className="achievement-thumbnail"
          style={{
            backgroundImage: `url(/thumbnails/${thumbnail})`
          }}
          onClick={toggleExpanded}
        >
        </div>
      </div>

      <animated.div
        className="card achievement-body"
        style={props}
        aria-hidden={!isExtended}
      >
        <div className="achievement-title">
          <h4>{ name }</h4>

          { rank && <div className="badge">{ rank }</div>}
          { won &&
            <div
              className="badge success"
              role="img"
              aria-label="trophy emoji">
              🏆 Won
            </div>}
        </div>

        <p>{ t(`achievements.descriptions.${name}`) }</p>

        { link &&
          <div className="flex center">
            <a
              className="btn"
              href={link}
              target="_blank"
              onFocus={() => setIsExtended(true)}
              onBlur={() => setIsExtended(false)}
            >
              En savoir plus <span className="visually-hidden">sur { name }</span>
            </a>
          </div>
        }
      </animated.div>
    </div>
  )
}

export default Achievement
