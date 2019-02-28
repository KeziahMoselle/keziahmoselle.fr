import React from 'react'

function Formations () {
  function updateGradient (event) {
    const x = event.pageX - event.target.offsetLeft - event.target.offsetParent.offsetLeft
    const y = event.pageY - event.target.offsetTop - event.target.offsetParent.offsetTop
    event.target.style.setProperty('--x', x + 'px')
    event.target.style.setProperty('--y', y + 'px')
  }

  return (
    <div className="container medium formations relative">
      <h3>Formations</h3>

      <div className="block flex column">
        <h4>Autodidacte</h4>
        <h5>2014-{new Date().getFullYear()}</h5>
        <p>En perpétuel apprentissage...</p>
      </div>

      <div className="block flex column">
        <h4>DUT MMI</h4>
        <h5>2018-2019</h5>
      </div>

      <div className="block flex column">
        <h4>Baccalauréat STI2D</h4>
        <h5>2016-2018</h5>
        <p>Mention Bien</p>
      </div>

      <div className="circle gradient animated" onMouseMove={updateGradient}></div>
      <div className="circle"></div>
    </div>
  )
}

export default Formations