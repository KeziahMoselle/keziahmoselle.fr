import React from 'react'
import { useTranslation } from 'react-i18next'

function Service ({ illustration, service, index }) {
  const { t } = useTranslation()

  return (
    <div
      className="service"
      style={{
        '--degree': `${(index + 1) * 90}deg`
      }}
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <img src={`/illustrations/${illustration}.svg`} alt="" />
      <h4>{ t(`services.${service}.title`) }</h4>
      <p>{ t(`services.${service}.description`) }</p>
    </div>
  )
}

export default Service
