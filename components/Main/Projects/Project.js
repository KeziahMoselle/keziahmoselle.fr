import React, { Fragment, useState, useEffect } from 'react'

function Project ({ title, subtitle, type, date, github, stack }) {
  /* Get the file name in /static/thumbnails */
  const formattedTitle = title.toLowerCase().replace(/\s/g, '_')

  const [stars, setStars] = useState(null)

  useEffect(() => {
    const localStars = localStorage.getItem(formattedTitle)
    /* GitHub project */
    if (!localStars) {
      fetch(`https://api.github.com/repos/${github}`)
        .then(response => response.json())
        .then(data => {
          console.log(`Old: ${stars} | New: ${data.stargazers_count}`)
          setStars(data.stargazers_count)
          localStorage.setItem(formattedTitle, data.stargazers_count)
        })
    } else {
      setStars(localStorage.getItem(formattedTitle))
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
              <Fragment>
                <span className="separator"></span>
                { `${stars} ⭐` }
              </Fragment>
            }
          </h5>
        </div>
        { github &&
          <a className="pill" href={`https://github.com/${github}`} rel="nofollow noopener noreferrer">
            <span>En savoir plus</span>
          </a>
        }
      </div>
      <a href={`https://github.com/${github}`} rel="nofollow noopener noreferrer">
        <img
          src={`/static/thumbnails/${formattedTitle}.webp`}
          srcSet={`/static/thumbnails/${formattedTitle}.webp, /static/thumbnails/${formattedTitle}.jpg`}
          alt={`${title} thumbnail`}
        />
      </a>
      <p className="project-footer">{ techStack }</p>
    </div>
  )
}

export default Project