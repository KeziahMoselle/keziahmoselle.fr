import React from 'react'
import Achievement from './Achievement'

function Achievements () {
  
  return (
    <div className="container medium achievements">
      <h3>Achievements</h3>

      <Achievement
        name="Hacktoberfest"
        year="2018"
      />
    </div>
  )
}

export default Achievements