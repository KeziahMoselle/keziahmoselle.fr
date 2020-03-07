import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { GoStar } from 'react-icons/go'

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

  const tagsChips = tags.map((tag, index) => (
    <span key={index} className="chip-inline">{ tag }</span>
  ))
  

  return (
    <article className="project">

      <a href={`https://github.com/${github}`} rel="nofollow noopener noreferrer">
        <div className="project-thumbnail">
          <div className="project-body">
            <h3>{ title }</h3>
            <h4>{ t(`projects.${title}`) }</h4>
            <div className="project-supplementary">
              <p className="project-info">
                { stars } <GoStar className="spacing" /> <span>Stars</span>
              </p>
            </div>
          </div>

          <picture>
            <source srcSet={`/static/thumbnails/${formattedTitle}.webp`} type="image/webp"></source>
            <img
              className="project-thumbnail"
              src={`/static/thumbnails/${formattedTitle}.jpg`}
              alt={`${title} thumbnail`}
            >
            </img>
          </picture>
        </div>
      </a>

      <div className="project-footer">
        <div>{ tagsChips }</div>

        <div>{ techStack }</div>
      </div>
    </article>
  )
}

export default Project