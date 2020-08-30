import React from 'react'
import { useTranslation } from 'react-i18next'

function Service ({ illustration, service, index }) {
  const { t } = useTranslation()

  return (
    <div data-aos="fade" data-aos-delay={index * 50}>
      <div
        className="service"
        style={{
          '--degree': `${(index + 1) * 90}deg`
        }}
      >
        <img src={`/illustrations/${illustration}.svg`} alt="" />
        <h4>{ t(`services.${service}.title`) }</h4>
        <p>{ t(`services.${service}.description`) }</p>
      </div>
    </div>
  )
}

export default Service
