import React from 'react'
import { useTranslation } from 'react-i18next'
import Planet from '../../Planet'

function Formations () {
  const { t } = useTranslation()

  return (
    <section id="formations" className="container medium formations relative">
      <h3>{ t('education.title') }</h3>

      <div data-aos="fade">
        <div className="block card flex column">
          <h4>{ t('education.selfTaught') }</h4>
          <h5>2014-{new Date().getFullYear()}</h5>
          <p>{ t('education.learning') }</p>
        </div>
      </div>

      <div data-aos="fade">
        <div className="block card flex column">
          <h4>DUT MMI</h4>
          <h5>2018-2019</h5>
        </div>
      </div>

      <div data-aos="fade">
        <div className="block card flex column">
          <h4>{ t('education.bachelor')} STI2D</h4>
          <h5>2016-2018</h5>
          <p>{ t('education.good') }</p>
        </div>
      </div>

      <Planet
        hasBelt={true}
        isAnimated={true}
        style={{
          top: '100px',
          right: '-100px'
        }}
      />
    </section>
  )
}

export default Formations
