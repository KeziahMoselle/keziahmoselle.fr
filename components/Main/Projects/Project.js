import React, { Fragment, useState, useEffect } from 'react'
import hasSupportWebP from 'supports-webp'

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
  const [imgUrl, setImgUrl] = useState(null)

  useEffect(() => {
    if (hasSupportWebP) return setImgUrl(`/static/thumbnails/${formattedTitle}.webp`)
    setImgUrl(`/static/thumbnails/${formattedTitle}.jpg`)
  }, [])

  useEffect(() => {
    const localStars = localStorage.getItem(formattedTitle)
    /* GitHub project */
    if (localStars) {
      setStars(localStorage.getItem(formattedTitle))
    } else {
      fetch(`https://api.github.com/repos/${github}`)
        .then(response => response.json())
        .then(data => {
          console.log(`Old: ${stars} | New: ${data.stargazers_count}`)
          setStars(data.stargazers_count)
          localStorage.setItem(formattedTitle, data.stargazers_count)
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
                { `${stars} ⭐` }
              </a>
            }
          </h5>
        </div>
        { github &&
          <a className="pill" href={url ? url : `https://github.com/${github}`} rel="nofollow noopener noreferrer">
            <span>{ url ? 'Voir sur le site' : 'Voir sur GitHub' }</span>
          </a>
        }
      </div>
      <a href={`https://github.com/${github}`} rel="nofollow noopener noreferrer">
        <img src={imgUrl} alt={`${title} thumbnail`} />
      </a>
      <p className="project-footer">{ techStack }</p>
    </div>
  )
}

export default Project