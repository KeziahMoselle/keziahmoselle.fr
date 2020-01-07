import React, { useState, useEffect } from 'react'

function Project ({
  title,
  subtitle,
  type,
  date,
  github,
  stack,
  url
}) {
  /* Get the file name in /static/thumbnails */
  const formattedTitle = title.toLowerCase().replace(/\s/g, '_')

  const [stars, setStars] = useState(null)

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

  /* Tech stack */
  const techStack = stack.map((tech, index) => (
    <img
      src={`/static/logos/${tech}.svg`}
      alt={`${tech}`}
      title={tech}
      key={index}
    />
  ))
  

  return (
    <div className="project">
      <div className="project-header">
        <div>
          <h3>{ title }</h3>
          <h4 className="grey">{ subtitle }</h4>
          <h5>
            { type }
            <span className="separator">{ date }</span>
            { stars &&
            <span className="separator">
              <a href={`https://github.com/${github}/stargazers`} style={{ margin: '0' }}>
                { `${stars} ⭐` } GitHub Stars
              </a>
            </span>
            }
          </h5>
        </div>
        <a className="pill" href={url ? url : `https://github.com/${github}`} rel="nofollow noopener noreferrer">
          <span>{ url ? 'Voir le projet le site' : 'Voir le projet sur GitHub' }</span>
        </a>
      </div>
      <a tabIndex="-1" href={`https://github.com/${github}`} rel="nofollow noopener noreferrer">
        <picture>
          <source srcSet={`/static/thumbnails/${formattedTitle}.webp`} type="image/webp"></source>
          <img src={`/static/thumbnails/${formattedTitle}.jpg`} alt={`${title} thumbnail`}></img>
        </picture>
      </a>
      <p className="project-footer">{ techStack }</p>
    </div>
  )
}

export default Project