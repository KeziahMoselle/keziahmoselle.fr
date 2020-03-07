import React from 'react'

function Skill ({ name }) {
  const img = name.toLowerCase().replace(' ', '').replace('.', '')

  return (
    <div className="skill">
      <img src={`/static/logos/${img}.svg`} alt={`${name}`}></img>
      <span>{name}</span>
    </div>
  )
}

export default Skill
