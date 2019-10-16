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
      alt={`${tech} logo`}
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
            <span className="separator"></span>
            { date }
            { stars &&
              <a href={`https://github.com/${github}/stargazers`} style={{ margin: '0' }}>
                <span className="separator"></span>
                { `${stars} ⭐` } GitHub Stars
              </a>
            }
          </h5>
        </div>
        <a className="pill" href={url ? url : `https://github.com/${github}`} rel="nofollow noopener noreferrer">
          <span>{ url ? 'Voir sur le site' : 'Voir sur GitHub' }</span>
        </a>
      </div>
      <a href={`https://github.com/${github}`} rel="nofollow noopener noreferrer">
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