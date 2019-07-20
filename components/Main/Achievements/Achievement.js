import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

function Achievement ({
  name,
  thumbnail,
  year,
  link = '#'
}) {
  let styles

  if (thumbnail) {
    styles = {
      backgroundImage: `url(/static/thumbnails/${thumbnail})`
    }
  }

  return (
    <a href={link} target="_blank">
      <div className="card" style={styles}>
        <h4>{ name }</h4>
        <div className="badge">aze</div>
      </div>
    </a>
  )
}

export default Achievement