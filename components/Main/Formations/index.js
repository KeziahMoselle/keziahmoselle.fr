import React from 'react'
import { useTranslation } from 'react-i18next'

function Formations () {
  const { t } = useTranslation()

  function updateGradient (event) {
    const x = event.pageX - event.target.offsetLeft - event.target.offsetParent.offsetLeft
    const y = event.pageY - event.target.offsetTop - event.target.offsetParent.offsetTop
    event.target.style.setProperty('--x', x + 'px')
    event.target.style.setProperty('--y', y + 'px')
  }

  return (
    <section id="formations" className="container medium formations relative">
      <h3>{ t('education.title') }</h3>

      <div className="block card flex column">

        <h4>{ t('education.selfTaught') }</h4>
        <h5>2014-{new Date().getFullYear()}</h5>
        <p>{ t('education.learning') }</p>
      </div>

      <div className="block card flex column">
        <h4>DUT MMI</h4>
        <h5>2018-2019</h5>
      </div>

      <div className="block card flex column">
        <h4>{ t('education.bachelor')} STI2D</h4>
        <h5>2016-2018</h5>
        <p>{ t('education.good') }</p>
      </div>

      <div className="circle gradient animated" onMouseMove={updateGradient}></div>
      <div className="circle"></div>
    </section>
  )
}

export default Formations
