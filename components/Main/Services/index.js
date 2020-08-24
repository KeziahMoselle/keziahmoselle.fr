import React from 'react'
import Service from './Service'
import { useTranslation } from 'react-i18next'

const MY_SERVICES = [
  {
    illustration: 'landing_page',
    service: 'applications'
  },
  {
    illustration: 'wireframe',
    service: 'uiux'
  },
  {
    illustration: 'knowledge',
    service: 'accessibility'
  }
]

function Services () {
  const { t } = useTranslation()

  return (
    <section id="services" className="container services">
      <h3>{ t('services.title') }</h3>

      <div className="services-list">
        { MY_SERVICES.map((service, index) => (
          <Service key={service.title} {...service} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Services
