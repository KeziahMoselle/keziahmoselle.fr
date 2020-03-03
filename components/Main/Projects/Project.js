import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Project ({
  title,
  subtitle,
  tags,
  date,
  github,
  stack,
  url
}) {
  /* Get the file name in /static/thumbnails */
  const formattedTitle = title.toLowerCase().replace(/\s/g, '_')

  const [stars, setStars] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    const localStars = JSON.parse(localStorage.getItem(formattedTitle))
    if (localStars && (localStars.date === new Date().getHours())) {
      setStars(localStars.stars)
    } else {
      fetch(`https://api.github.com/repos/${github}`)
        .then(response => response.json())
        .then(data => {
          console.log(`Fetched ${github} : ${data.stargazers_count}`)
          setStars(data.stargazers_count)
          localStorage.setItem(formattedTitle, JSON.stringify({
            stars: data.stargazers_count,
            date: new Date().getHours()
          }))
        })
    }
  }, [])

  /* Tech stack icons at the bottom of the thumbnail */
  const techStack = stack.map((tech, index) => (
    <img
      src={`/static/logos/${tech}.svg`}
      alt={`${tech}`}
      title={tech}
      key={index}
    />
  ))
  

  return (
    <article className="project">
      <div className="project-header">
        <div>
          <h3>{ title }</h3>
          <h4 className="grey">{ t(`projects.${title}`) }</h4>
          { tags.map((tag, index) => (
            <span key={index} className="chip-inline">{ tag }</span>
          ))}
          <a
            href={`https://github.com/${github}/stargazers`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="chip-inline"
            title="Click to see GitHub stargazers"
          >
            <img class="img-left" src="/static/icons/star.svg" alt="stars" />
            { stars }
          </a>
        </div>

        <a className="pill hide-on-mobile" href={url ? url : `https://github.com/${github}`} rel="nofollow noopener noreferrer">
          <span>{ url ? t('seeWebsite') : t('seeRepo') }</span>
        </a>
      </div>

      <a className="project-thumbnail" tabIndex="-1" href={`https://github.com/${github}`} rel="nofollow noopener noreferrer">
        <picture>
          <source srcSet={`/static/thumbnails/${formattedTitle}.webp`} type="image/webp"></source>
          <img src={`/static/thumbnails/${formattedTitle}.jpg`} alt={`${title} thumbnail`}></img>
        </picture>
      </a>

      <div className="project-footer">
        <a className="pill hide-on-desktop" href={url ? url : `https://github.com/${github}`} rel="nofollow noopener noreferrer">
          <span>{ url ? t('seeWebsite') : t('seeRepo') }</span>
        </a>

        <div>{ techStack }</div>
      </div>
    </article>
  )
}

export default Project