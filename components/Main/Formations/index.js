import React from 'react'

function Formations () {
  return (
    <div className="container medium formations">
      <h3>Formations</h3>

      <div className="block">
        <h4>Autodidacte</h4>
        <h5>2014-{new Date().getFullYear()}</h5>
      </div>

      <div className="block">
        <h4>Lycée Blaise Pascal STI2D</h4>
        <h5>2016-2018</h5>
      </div>
    </div>
  )
}

export default Formations