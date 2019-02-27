import React from 'react'

function Formations () {
  return (
    <div className="container medium formations">
      <h3>Formations</h3>

      <div className="block column">
        <h4>Autodidacte</h4>
        <h5>2014-{new Date().getFullYear()}</h5>
        <p>En perpétuel apprentissage...</p>
      </div>

      <div className="block column">
        <h4>DUT MMI</h4>
        <h5>2018-2019</h5>
      </div>

      <div className="block column">
        <h4>Baccalauréat STI2D</h4>
        <h5>2016-2018</h5>
        <p>Mention Bien</p>
      </div>
    </div>
  )
}

export default Formations