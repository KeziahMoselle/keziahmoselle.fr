import React from 'react'

function Achievement ({
  name,
  year,
  description
}) {
  return (
    <div class="card">
      <div class="achievement-logo">
      <img src={`/static/logos/${name.toLowerCase()}.svg`} alt={`${name} ${year}`} />
      </div>

      <h4>{ name }</h4>
    </div>
  )
}

export default Achievement