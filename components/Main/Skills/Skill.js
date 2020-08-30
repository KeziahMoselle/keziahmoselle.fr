import React from 'react'
import toFilename from '../../utils/toFilename'

function Skill ({ name }) {
  const img = toFilename(name)

  return (
    <div className="skill">
      <img src={`/logos/${img}.svg`} alt=""></img>
      <span>{name}</span>
    </div>
  )
}

export default Skill
