import React from 'react'
import { useTranslation } from 'react-i18next'
import Planet from '../../Planet'

function Formations () {
  const { t } = useTranslation()

  return (
    <section id="formations" className="container medium formations relative">
      <h3>{ t('education.title') }</h3>

      <div className="block card flex column" data-aos="fade-up">
        <h4>{ t('education.selfTaught') }</h4>
        <h5>2014-{new Date().getFullYear()}</h5>
        <p>{ t('education.learning') }</p>
      </div>

      <div className="block card flex column" data-aos="fade-up">
        <h4>DUT MMI</h4>
        <h5>2018-2019</h5>
      </div>

      <div className="block card flex column" data-aos="fade-up">
        <h4>{ t('education.bachelor')} STI2D</h4>
        <h5>2016-2018</h5>
        <p>{ t('education.good') }</p>
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
