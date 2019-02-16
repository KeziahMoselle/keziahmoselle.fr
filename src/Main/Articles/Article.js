import React from 'react'

function Article ({ title, subtitle, tags, date}) {
  const listTags = tags.split(',').map(tag => (
    <h5 className="chip">{ tag }</h5>
  ))
  
  return (
    <div className="article">
      <div className="article-header">
        <div>
          <h3>{ title }</h3>
          <h4 className="grey">{ subtitle }</h4>
          { listTags }
          </div>
          <a href="#"><span>Read more</span></a>
      </div>

      <img
        src={`./assets/thumbnails/.jpg`}
        alt={`${title} thumbnail`}
      />
    </div>
  )
}

export default Article