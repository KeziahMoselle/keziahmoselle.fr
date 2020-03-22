import React from 'react'

function Skill ({ name }) {
  const img = name.toLowerCase().replace(' ', '').replace('.', '')

  return (
    <div className="skill">
      <img src={`/logos/${img}.svg`} alt=""></img>
      <span>{name}</span>
    </div>
  )
}

export default Skill
